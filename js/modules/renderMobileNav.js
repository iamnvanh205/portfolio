/**
 * renderMobileNav
 * Renders a sticky horizontal scroll-spy nav bar for mobile (< 900px).
 * All items (nav links, theme options, lang options) share the
 * .hero__utility-btn visual style — standalone pill buttons.
 */

import { t } from "./lang.js";

export function renderMobileNav(container) {

  const menu = ["about", "projects", "experience", "certificates", "skills", "contact"];

  container.innerHTML = `

    <div class="mobile-nav__inner">

      ${menu
        .map(
          item => `
            <a
              href="#${item}"
              class="mobile-nav__link"
              data-section="${item}">
              ${t(`nav.${item}`)}
            </a>
          `
        )
        .join("")
      }

      <div class="mobile-nav__divider" aria-hidden="true"></div>

      <!-- Theme toggle: single icon button, cycles light ↔ dark (mirrors hero utility) -->
      <button
        class="theme-toggle__option theme-toggle__option--icon btn-text"
        data-theme-toggle
        type="button"
        aria-label="${t("themeLabel")}"
        title="${t("themeLabel")}">

        <svg
          class="theme-toggle__icon theme-toggle__icon--sun"
          xmlns="http://www.w3.org/2000/svg"
          width="16" height="16"
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

        <svg
          class="theme-toggle__icon theme-toggle__icon--moon"
          xmlns="http://www.w3.org/2000/svg"
          width="16" height="16"
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

      <!-- Lang toggle: single text button, cycles EN ↔ VI (mirrors hero utility) -->
      <button
        class="lang-toggle__option btn-text"
        data-lang-toggle
        type="button"
        aria-label="${t("languageLabel")}"
        title="${t("languageLabel")}">
        <span class="lang-toggle__label" data-lang-label aria-hidden="true"></span>
      </button>

    </div>

  `;

}
