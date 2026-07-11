import { getProfile, t } from "./lang.js";

export function renderAbout(container) {

  const profile = getProfile();

  container.innerHTML = `

    <div class="section__header">

      <h2
        id="about-heading"
        class="section-title">
        ${t("nav.about")}
      </h2>

      <div class="section__divider"></div>

    </div>

    <div class="about__content">

      ${profile.about
        .map(
          (p) => `<p class="body-text">${p}</p>`
        )
        .join("")
      }

    </div>

  `;

}
