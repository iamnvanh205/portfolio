import assert from "node:assert/strict";

globalThis.document = { documentElement: { dataset: {} } };

const { filterProjects, getProjectFilterTags } = await import("../js/modules/renderProjects.js");
const projects = [
  { tags: ["Java"] },
  { tags: ["University Projects"] }
];

assert.deepEqual(getProjectFilterTags([
  { tags: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL"] },
  { tags: ["C#", "SQL Server", "University Projects"] },
  { tags: ["Android", "University Projects"] }
]), ["Java/Spring Boot", "React/TypeScript", "PostgreSQL", "University Projects"]);

assert.equal(filterProjects(projects, "all").length, 2);
assert.deepEqual(filterProjects(projects, "Java/Spring Boot"), [projects[0]]);

document.documentElement.dataset = { lang: "vi" };
projects[1].tags = ["Đồ án môn học"];
assert.deepEqual(filterProjects(projects, "University Projects"), [projects[1]]);
