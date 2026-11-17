import { projects as sourceProjects } from "../data/projects.js";
import { getProjects, t } from "./lang.js";

let activeProjectFilter = "all";

// Project categories used to filter the Projects section.
// "all" shows every project; the rest map 1:1 to a project's `category` field.
const CATEGORIES = ["personal", "academic"];

export function filterProjects(projects, filter) {
  return filter === "all"
    ? projects
    : projects.filter((project) => project.category === filter);
}

export function getProjectFilters(projects) {
  const present = new Set(
    projects.map((project) => project.category).filter(Boolean)
  );
  return ["all", ...CATEGORIES.filter((category) => present.has(category))];
}

function filterLabel(filter) {
  if (filter === "all") return t("projectsPage.all");
  if (filter === "personal") return t("projectsPage.categoryPersonal");
  if (filter === "academic") return t("projectsPage.categoryAcademic");
  return filter;
}

export function renderProjects(container) {

  const projects = getProjects();
  const filters = getProjectFilters(sourceProjects);
  const visibleProjects = filterProjects(projects, activeProjectFilter);
  const resultLabel = `${visibleProjects.length} ${
    t(visibleProjects.length === 1 ? "projectsPage.project" : "projectsPage.projects")
  }`;

  container.innerHTML = `

    <div class="section__header">

      <h2
        id="projects-heading"
        class="section-title">
        ${t("nav.projects")}
      </h2>

      <div class="section__divider"></div>

    </div>

    <div class="projects-toolbar">
      <div class="projects-filters" role="group" aria-label="${t("projectsPage.filterLabel")}">
        ${filters
          .map((filter) => `
            <button
              type="button"
              class="btn btn-card"
              data-project-filter="${filter}"
              aria-controls="projects-grid"
              aria-pressed="${activeProjectFilter === filter}">
              ${filterLabel(filter)}
            </button>
          `)
          .join("")}
      </div>
      <p class="projects-summary body-small">${resultLabel}</p>
    </div>

    <p class="sr-only" data-project-status aria-live="polite"></p>

    <div id="projects-grid" class="projects-grid">

      ${visibleProjects.length ? visibleProjects
        .map(
          (project) => `

            <article
              class="project-card${project.featured ? " project-card--featured" : ""}"
              data-category="${project.category || ""}"
              aria-label="${project.title}">

              <div class="project-card__thumbnail">
                <a
                  href="./project-detail.html?id=${project.id}"
                  aria-label="${t("projectsPage.details")}: ${project.title}">
                  <img
                    src="${project.thumbnail}"
                    alt="${project.title} - ${t("projectsPage.interfacePreview")}"
                    loading="lazy"
                    decoding="async">
                </a>
              </div>

              <div class="project-card__content">

                <div class="project-card__meta body-small">
                  ${project.featured
                    ? `<span class="project-card__featured">${t("projectsPage.featured")}</span>`
                    : "<span></span>"
                  }
                  ${project.duration ? `<span>${project.duration.replaceAll("[", "").replaceAll("]", "")}</span>` : ""}
                </div>

                <h3 class="project-card__title card-title">
                  <a href="./project-detail.html?id=${project.id}">
                    ${project.title}
                  </a>
                </h3>

                <p class="project-card__description body-small">
                  ${project.description}
                </p>

                <div class="project-card__tags">
                  ${project.tags
                    .slice(0, 5)
                    .map(
                      (tag) => `<span class="tech-tag">${tag}</span>`
                    )
                    .join("")
                  }
                  ${project.tags.length > 5
                    ? `<span class="tech-tag">+${project.tags.length - 5}</span>`
                    : ""
                  }
                </div>

              </div>

            </article>

          `
        )
        .join("")
        : `<p class="projects-empty body-text">${t("projectsPage.empty")}</p>`
      }

    </div>

  `;

  container
    .querySelector(".projects-filters")
    .addEventListener("click", (event) => {
      const button = event.target.closest("[data-project-filter]");
      if (!button) return;

      activeProjectFilter = button.dataset.projectFilter;
      renderProjects(container);

      [...container.querySelectorAll("[data-project-filter]")]
        .find(({ dataset }) => dataset.projectFilter === activeProjectFilter)
        ?.focus();

      container.querySelector("[data-project-status]").textContent =
        container.querySelector(".projects-summary").textContent;
    });

}
