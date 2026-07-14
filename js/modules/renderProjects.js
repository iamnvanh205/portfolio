import { getProjects, t } from "./lang.js";

let showAllProjects = false;

export function renderProjects(container) {

  const projects = getProjects();
  const visibleProjects = showAllProjects
    ? projects
    : projects.filter((project) => project.featured);

  container.innerHTML = `

    <div class="section__header">

      <h2
        id="projects-heading"
        class="section-title">
        ${t("nav.projects")}
      </h2>

      <div class="section__divider"></div>

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

    ${projects.length > visibleProjects.length || showAllProjects
      ? `
        <div class="projects-actions">
          <button
            type="button"
            class="btn btn-ghost"
            data-projects-toggle>
            ${showAllProjects ? t("showFeaturedProjects") : t("viewAllProjects")}
          </button>
        </div>
      `
      : ""
    }

  `;

  container
    .querySelector("[data-projects-toggle]")
    ?.addEventListener("click", () => {
      showAllProjects = !showAllProjects;
      renderProjects(container);
    });

}
