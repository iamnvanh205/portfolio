import { projects as sourceProjects } from "../data/projects.js";
import { getProjects, localizeTag, t } from "./lang.js";

let activeProjectFilter = "all";
const FILTER_TAGS = {
  "Java/Spring Boot": ["Java", "Spring Boot"],
  "React/TypeScript": ["React", "TypeScript"],
  "University Projects": ["University Projects"]
};
const GROUP_BY_TAG = Object.fromEntries(
  Object.entries(FILTER_TAGS).flatMap(([group, tags]) => tags.map((tag) => [tag, group]))
);

export function filterProjects(projects, tag) {
  const tags = FILTER_TAGS[tag] || [tag];
  return tag === "all"
    ? projects
    : projects.filter((project) => tags.some((candidate) => project.tags.includes(localizeTag(candidate))));
}

export function getProjectFilterTags(projects) {
  return [...new Set(projects.flatMap((project) =>
    project.tags.includes("University Projects")
      ? ["University Projects"]
      : project.tags.map((tag) => GROUP_BY_TAG[tag] || tag)
  ))];
}

export function renderProjects(container) {

  const projects = getProjects();
  const filterTags = getProjectFilterTags(sourceProjects);
  const visibleProjects = filterProjects(projects, activeProjectFilter);

  container.innerHTML = `

    <div class="section__header">

      <h2
        id="projects-heading"
        class="section-title">
        ${t("nav.projects")}
      </h2>

      <div class="section__divider"></div>

    </div>

    <div class="projects-filters" role="group" aria-label="${t("projectsPage.filterLabel")}">
      <button
        type="button"
        class="btn btn-card"
        data-project-filter="all"
        aria-pressed="${activeProjectFilter === "all"}">
        ${t("projectsPage.all")}
      </button>
      ${filterTags
        .map((tag) => `
          <button
            type="button"
            class="btn btn-card"
            data-project-filter="${tag}"
            aria-pressed="${activeProjectFilter === tag}">
            ${localizeTag(tag)}
          </button>
        `)
        .join("")}
    </div>

    <div class="projects-grid">

      ${visibleProjects
        .map(
          (project) => `

            <article
              class="project-card"
              aria-label="${project.title}">

              <div class="project-card__thumbnail">
                <img
                  src="${project.thumbnail}"
                  alt="${project.title} thumbnail"
                  loading="lazy">
              </div>

              <div class="project-card__content">

                <h3 class="project-card__title card-title">
                  ${project.title}
                </h3>

                <p class="project-card__description body-small">
                  ${project.description}
                </p>

                <div class="project-card__tags">
                  ${project.tags
                    .map(
                      (tag) => `<span class="tech-tag">${tag}</span>`
                    )
                    .join("")
                  }
                </div>

                <div class="project-card__actions">

                  <a
                    href="./project-detail.html?id=${project.id}"
                    class="btn btn-card">
                    Details
                  </a>

                  ${project.demo
                    ? `
                      <a
                        href="${project.demo}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-card">
                        Demo
                      </a>
                    `
                    : ""
                  }

                  ${project.github
                    ? `
                      <a
                        href="${project.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-card">
                        GitHub
                      </a>
                    `
                    : ""
                  }

                </div>

              </div>

            </article>

          `
        )
        .join("")
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
    });

}
