import { getProfile, t } from "./lang.js";

export function renderHero(container) {

  const profile = getProfile();

  container.innerHTML = `

    <div class="hero__content">

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
        <li>
          <strong>${t("proof.docsValue")}</strong>
          <span>${t("proof.docsLabel")}</span>
        </li>
      </ul>

      <div class="hero__actions" role="toolbar" aria-label="${t("actionsLabel")}">

        <!-- Primary CTAs -->
        <div class="hero__primary-actions">
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

        <!-- Utility controls separator -->
        <div class="hero__utilities-divider" aria-hidden="true"></div>

        <!-- Compact utility controls -->
        <div class="hero__utilities" role="group" aria-label="${t("utilityLabel")}">

          <!-- Theme toggle: icon-only pill button -->
          <button
            class="hero__utility-btn hero__utility-btn--theme"
            data-theme-toggle
            type="button"
            aria-label="${t("themeLabel")}"
            title="${t("themeLabel")}">

            <!-- Sun icon (shown in light mode) -->
            <svg
              class="hero__utility-icon hero__utility-icon--sun"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              focusable="false">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2"/>
              <path d="M12 20v2"/>
              <path d="m4.93 4.93 1.41 1.41"/>
              <path d="m17.66 17.66 1.41 1.41"/>
              <path d="M2 12h2"/>
              <path d="M20 12h2"/>
              <path d="m6.34 17.66-1.41 1.41"/>
              <path d="m19.07 4.93-1.41 1.41"/>
            </svg>

            <!-- Moon icon (shown in dark mode) -->
            <svg
              class="hero__utility-icon hero__utility-icon--moon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              focusable="false">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
            </svg>

          </button>

          <!-- Language toggle: compact pill with label -->
          <button
            class="hero__utility-btn hero__utility-btn--lang"
            data-lang-toggle
            type="button"
            aria-label="${t("languageLabel")}"
            title="${t("languageLabel")}">

            <span
              class="hero__utility-text"
              data-lang-label
              aria-hidden="true"></span>

          </button>

        </div>

      </div>

    </div>

  `;

}
