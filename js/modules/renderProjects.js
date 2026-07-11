import { getProjects, t } from "./lang.js";

export function renderProjects(container) {

  const projects = getProjects();

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

      ${projects
        .filter((p) => p.featured)
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

    <div class="projects-view-all">

      <a
        href="./projects.html"
        class="btn-ghost btn-text">
        ${t("viewAllProjects")}
      </a>

    </div>

  `;

}
