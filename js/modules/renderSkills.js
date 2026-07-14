import { getSkills, t } from "./lang.js";

export function renderSkills(container) {

  const skills = getSkills();

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
        ${t("nav.skills")}
      </h2>

      <div class="section__divider"></div>

    </div>

    ${renderGroup(t("skills.languages"),       skills.languages)}
    ${renderGroup(t("skills.frameworks"),      skills.frameworks)}
    ${renderGroup(t("skills.databases"),       skills.databases)}
    ${renderGroup(t("skills.devops"),          skills.devops)}
    ${renderGroup(t("skills.architecture"),    skills.architecture)}
    ${renderGroup(t("skills.spokenLanguages"), skills.spokenLanguages)}
    ${renderGroup(t("skills.softSkills"),      skills.softSkills)}

  `;

}
