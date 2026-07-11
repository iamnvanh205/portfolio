import { getExperience, t } from "./lang.js";

export function renderExperience(container) {

  const experience = getExperience();

  container.innerHTML = `

    <div class="section__header">

      <h2
        id="experience-heading"
        class="section-title">
        ${t("nav.experience")}
      </h2>

      <div class="section__divider"></div>

    </div>

    <div class="timeline">

      ${experience
        .map(
          (item) => `

            <div class="timeline-item">

              <div class="timeline-period text-muted">
                ${item.period}
              </div>

              <h3 class="card-title">
                ${item.title}
              </h3>

              <div class="timeline-company body-small">
                ${item.company}
              </div>

              <div class="timeline-grid">

                <div>
                  <div class="timeline-label">
                    ${t("experience.responsibilities")}
                  </div>
                  <ul class="timeline-list body-small">
                    ${item.responsibilities
                      .map((r) => `<li>${r}</li>`)
                      .join("")
                    }
                  </ul>
                </div>

                <div>
                  <div class="timeline-label">
                    ${t("experience.achievements")}
                  </div>
                  <ul class="timeline-list body-small">
                    ${item.achievements
                      .map(
                        (a) => `
                          <li class="timeline-achievement">
                            ${a}
                          </li>
                        `
                      )
                      .join("")
                    }
                  </ul>
                </div>

              </div>

            </div>

          `
        )
        .join("")
      }

    </div>

  `;

}
