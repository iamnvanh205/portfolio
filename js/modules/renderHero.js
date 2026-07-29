import { getProfile, t } from "./lang.js";

export function renderHero(container) {

  const profile = getProfile();

  container.innerHTML = `

    <div class="hero__avatar">
      <img
        src="${profile.avatar}"
        alt="${t("photoOf")} ${profile.name}"
        width="140"
        height="140"
        decoding="async"
        fetchpriority="high">
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

          <div class="hero__meta body-small">
            <span class="hero__availability">
              <span class="hero__status-dot" aria-hidden="true"></span>
              ${t("availability")}
            </span>
            <span>${profile.contact.location}</span>
          </div>

        </div>

        <div class="hero__controls">

          <div
            class="theme-toggle"
            role="group"
            aria-label="${t("themeLabel")}">

            <button
              class="theme-toggle__option btn-text"
              data-theme-option="light">
              ${t("light")}
            </button>

            <button
              class="theme-toggle__option btn-text"
              data-theme-option="dark">
              ${t("dark")}
            </button>

          </div>

          <div
            class="lang-toggle"
            role="group"
            aria-label="${t("languageLabel")}">

            <button
              class="lang-toggle__option btn-text active"
              data-lang-option="en"
              aria-pressed="true">
              EN
            </button>

            <button
              class="lang-toggle__option btn-text"
              data-lang-option="vi"
              aria-pressed="false">
              VI
            </button>

          </div>

        </div>

      </div>

      <div class="hero__taglines">

        ${profile.tagline
          .map(
            (item) => `
              <div class="hero__tagline">
                ${item}
              </div>
            `
          )
          .join("")
        }

      </div>

      <ul class="hero__proof" aria-label="${t("proofLabel")}">
        <li>
          <strong>${t("proof.systemsValue")}</strong>
          <span>${t("proof.systemsLabel")}</span>
        </li>
        <li>
          <strong>${t("proof.testsValue")}</strong>
          <span>${t("proof.testsLabel")}</span>
        </li>
        <li>
          <strong>${t("proof.concurrencyValue")}</strong>
          <span>${t("proof.concurrencyLabel")}</span>
        </li>
      </ul>

      <div class="hero__actions">

        <a
          href="${profile.cta.projectSectionId}"
          class="btn btn-outline btn-text">
          ${t("viewProjects")}
        </a>

        <a
          href="${profile.cta.cv}"
          download
          class="btn btn-primary btn-text">
          ${t("downloadCv")}
        </a>

      </div>

    </div>

  `;

}
