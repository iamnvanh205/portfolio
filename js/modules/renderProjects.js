import { projects }
from "../data/projects.js";

export function renderProjects(
  container
) {

  container.innerHTML = `

    <div class="section__header">

      <h2 class="section-title">

        Projects

      </h2>

      <div class="section__divider"></div>

    </div>

    <div class="projects-grid">

      ${projects
        .map(project => `

          <article
            class="project-card">

            <div
              class="project-card__thumbnail">

              <img
                src="${project.thumbnail}"
                alt="${project.title}">
            </div>

            <div
              class="project-card__content">

              <h3
                class="project-card__title card-title">

                ${project.title}

              </h3>

              <p
                class="project-card__description body-small">

                ${project.description}

              </p>

              <div
                class="project-card__tags">

                ${project.tags
                  .map(tag => `
                    <span class="tech-tag">
                      ${tag}
                    </span>
                  `)
                  .join("")
                }

              </div>

              <div
                class="project-card__actions">

                ${
                  project.demo
                  ? `
                    <a
                      href="${project.demo}"
                      target="_blank"
                      class="btn btn-card">

                      Demo
                    </a>
                  `
                  : ""
                }

                ${
                  project.github
                  ? `
                    <a
                      href="${project.github}"
                      target="_blank"
                      class="btn btn-card">

                      GitHub
                    </a>
                  `
                  : ""
                }

              </div>

            </div>

          </article>

        `)
        .join("")
      }

    </div>

    <div
      class="projects-view-all">

      <button
        class="btn-ghost">

        View all →

      </button>

    </div>

  `;
}