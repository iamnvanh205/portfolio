import { skills }
from "../data/skills.js";

export function renderSkills(
  container
) {

  const renderGroup =
    (
      title,
      list
    ) => {

      return `

      <div
        class="skills-group">

        <div
          class="subsection-label skills-group__label">

          ${title}

        </div>

        <div
          class="skills-group__items">

          ${list
            .map(
              item => `
              
              <div
                class="skill-chip">

                ${
                  item.icon
                  ? `<i class="${item.icon}"></i>`
                  : ""
                }

                <span>

                  ${
                    item.name
                    ?? item
                  }

                </span>

              </div>
              
            `
            )
            .join("")
          }

        </div>

      </div>

      `;
    };

  container.innerHTML = `

  <div class="section__header">

    <h2 class="section-title">

      Skills

    </h2>

    <div class="section__divider"></div>

  </div>

  ${renderGroup(
    "Programming Languages",
    skills.languages
  )}

  ${renderGroup(
    "Frameworks",
    skills.frameworks
  )}

  ${renderGroup(
    "Databases",
    skills.databases
  )}

  ${renderGroup(
    "Tools & DevOps",
    skills.devops
  )}

  ${renderGroup(
    "Architecture",
    skills.architecture
  )}

  ${renderGroup(
    "Soft Skills",
    skills.softSkills
  )}

  `;
}