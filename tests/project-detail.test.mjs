import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

globalThis.document = {
  documentElement: { dataset: {} },
  querySelectorAll: () => []
};

const { getProjects, setLang, t } = await import("../js/modules/lang.js");
globalThis.t = t;
const html = await readFile(new URL("../project-detail.html", import.meta.url), "utf8");
const start = html.indexOf("function renderProject(project) {");
const end = html.indexOf("\n\n    renderPage();", start);
const renderProject = Function(`return (${html.slice(start, end)})`)();

setLang("en", false);
const enProjects = getProjects();
const enItamProject = enProjects.find(({ id }) => id === "itam-system");
const enItam = renderProject(enItamProject);
const eventProject = enProjects.find(({ id }) => id === "event-ticketing");
const enEvent = renderProject(eventProject);
const fallback = renderProject({ ...eventProject, highlights: [] });
const schemaFields = [
  "id", "title", "thumbnail", "duration", "description", "highlights",
  "tags", "github", "docs", "demo", "screenshots", "featured"
];
const highlightShape = Object.fromEntries(
  enProjects.map(({ id, highlights }) => [id, highlights.map(({ bullets }) => bullets.length)])
);

assert.ok(enProjects.every((project) => schemaFields.every((field) => field in project)));
assert.deepEqual(enItamProject.highlights.map(({ bullets }) => bullets.length), [4, 2, 2, 2, 1]);
assert.ok(enProjects.every(({ highlights }) => Array.isArray(highlights)));
assert.equal((enItam.match(/project-detail-card__section-title/g) || []).length, 5);
assert.match(enItam, /Core Business &amp; Workflow|Core Business & Workflow/);
assert.equal((enEvent.match(/project-detail-card__section-title/g) || []).length, 5);
assert.equal((fallback.match(/project-detail-card__section-title/g) || []).length, 0);
assert.match(fallback, /ticket oversell/);
assert.match(enItam, /Technical documentation is available in the/);
assert.match(enItam, /class="project-detail-card__docs-link"[^>]*>GitHub docs<\/a>/);

setLang("vi", false);
const viProjects = getProjects();
const viItamProject = viProjects.find(({ id }) => id === "itam-system");
const viItam = renderProject(viItamProject);

assert.deepEqual(
  Object.fromEntries(
    viProjects.map(({ id, highlights }) => [id, highlights.map(({ bullets }) => bullets.length)])
  ),
  highlightShape
);
assert.deepEqual(viItamProject.highlights.map(({ bullets }) => bullets.length), [4, 2, 2, 2, 1]);
assert.match(viItam, /Hệ thống quản lý tài sản CNTT/);
assert.match(viItam, /Nghiệp vụ cốt lõi & Quy trình/);
assert.match(viItam, /Tài liệu kỹ thuật có tại/);
assert.doesNotMatch(viItam, /Technical documentation is available/);
assert.doesNotMatch(viItam, /Core Business & Workflow/);
