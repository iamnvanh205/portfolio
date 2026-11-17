import assert from "node:assert/strict";

globalThis.document = { documentElement: { dataset: {} } };

const { filterProjects, getProjectFilters } = await import("../js/modules/renderProjects.js");
const { projects: portfolioProjects } = await import("../js/data/projects.js");

// Every portfolio project carries a `category` of either "personal" or "academic".
assert.ok(
  portfolioProjects.every((p) => p.category === "personal" || p.category === "academic")
);

// getProjectFilters returns "all" first, then each category that has >= 1 project.
assert.deepEqual(
  getProjectFilters([
    { category: "personal" },
    { category: "academic" },
    { category: "personal" }
  ]),
  ["all", "personal", "academic"]
);

assert.deepEqual(getProjectFilters(portfolioProjects), ["all", "personal", "academic"]);

// "all" returns the same array reference (no copy, no filtering).
const sample = [{ category: "personal" }, { category: "academic" }];
assert.equal(filterProjects(sample, "all"), sample);

// Real data: 2 personal (ITAM, Event Ticketing) + 3 academic.
assert.equal(filterProjects(portfolioProjects, "all").length, portfolioProjects.length);
assert.deepEqual(
  filterProjects(portfolioProjects, "personal").map((p) => p.id),
  ["itam-system", "event-ticketing"]
);
assert.deepEqual(
  filterProjects(portfolioProjects, "academic").map((p) => p.id),
  ["thien-nguyen", "nhan-khau", "homestay"]
);

// Sample-level filtering.
assert.deepEqual(filterProjects(sample, "personal"), [sample[0]]);
assert.deepEqual(filterProjects(sample, "academic"), [sample[1]]);
// An unknown filter matches nothing.
assert.deepEqual(filterProjects(sample, "nonexistent"), []);
