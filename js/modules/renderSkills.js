import { skills } from "../data/skills.js";

export function renderSkills(container) {

  const renderGroup = (title, list) => `

    <div class="skills-group">

      <div class="subsection-label skills-group__label">
        ${title}
      </div>

      <div class="skills-group__items">

        ${list
          .map((item) => {

            // item can be { name, icon? } or a plain string (softSkills)
            const name = typeof item === "string" ? item : item.name;
            const icon = typeof item === "object" && item.icon
              ? `<i class="${item.icon}" aria-hidden="true"></i>`
              : "";

            return `
              <div class="skill-chip">
                ${icon}
                <span>${name}</span>
              </div>
            `;

          })
          .join("")
        }

      </div>

    </div>

  `;

  container.innerHTML = `

    <div class="section__header">

      <h2
        id="skills-heading"
        class="section-title">
        Skills
      </h2>

      <div class="section__divider"></div>

    </div>

    ${renderGroup("Programming Languages", skills.languages)}
    ${renderGroup("Frameworks & Libraries", skills.frameworks)}
    ${renderGroup("Databases",             skills.databases)}
    ${renderGroup("Tools & DevOps",        skills.devops)}
    ${renderGroup("Architecture",          skills.architecture)}
    ${renderGroup("Soft Skills",           skills.softSkills)}

  `;

}
