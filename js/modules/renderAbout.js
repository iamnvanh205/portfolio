import { profile }
from "../data/profile.js";

export function renderAbout(
  container
) {

  container.innerHTML = `

    <div class="section__header">

      <h2
        class="section-title">

        About

      </h2>

      <div
        class="section__divider">

      </div>

    </div>

    <div
      class="about__content">

      ${profile.about
        .map(
          p => `
          <p class="body-text">
            ${p}
          </p>
        `
        )
        .join("")
      }

    </div>

  `;
}