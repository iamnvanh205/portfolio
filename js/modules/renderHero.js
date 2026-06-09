import { profile }
from "../data/profile.js";

export function renderHero(container) {

  container.innerHTML = `
  
  <div class="hero__container">

    <div class="hero__avatar">

      <img
        src="${profile.avatar}"
        alt="${profile.name}">

    </div>

    <div class="hero__content">

      <div class="hero__header">

        <div class="hero__title-group">

          <h1 class="hero-name">

            ${profile.name}

          </h1>

          <p class="hero-title">

            ${profile.title}

          </p>

        </div>

        <div
          class="theme-toggle">

          <button
            class="theme-toggle__option active"
            data-theme-option="light">

            Light

          </button>

          <button
            class="theme-toggle__option"
            data-theme-option="dark">

            Dark

          </button>

        </div>

      </div>

      <div class="hero__taglines">

        ${profile.tagline
          .map(
            item => `
            <div class="hero__tagline">
              ${item}
            </div>
          `
          )
          .join("")
        }

      </div>

      <div class="hero__actions">

        <a
          href="#projects"
          class="btn btn-outline">

          View Projects

        </a>

        <a
          href="${profile.cta.cv}"
          download
          class="btn btn-primary">

          Download CV

        </a>

      </div>

    </div>

  </div>
  
  `;
}