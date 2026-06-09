import { experience }
from "../data/experience.js";

export function renderExperience(
  container
) {

  container.innerHTML = `

    <div class="section__header">

      <h2 class="section-title">

        Experience

      </h2>

      <div class="section__divider"></div>

    </div>

    <div class="timeline">

      ${experience
        .map(item => `

          <div
            class="timeline-item">

            <div
              class="timeline-period">

              ${item.period}

            </div>

            <h3
              class="card-title">

              ${item.title}

            </h3>

            <div
              class="timeline-company">

              ${item.company}

            </div>

            <div
              class="timeline-grid">

              <div>

                <div
                  class="timeline-label">

                  Responsibilities

                </div>

                <ul
                  class="timeline-list">

                  ${item.responsibilities
                    .map(r => `
                      <li>${r}</li>
                    `)
                    .join("")
                  }

                </ul>

              </div>

              <div>

                <div
                  class="timeline-label">

                  Achievements

                </div>

                <ul
                  class="timeline-list">

                  ${item.achievements
                    .map(a => `
                      <li class="timeline-achievement">
                        ${a}
                      </li>
                    `)
                    .join("")
                  }

                </ul>

              </div>

            </div>

          </div>

        `)
        .join("")
      }

    </div>

  `;
}