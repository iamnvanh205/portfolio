/**
 * renderMobileNav
 * Renders a sticky horizontal scroll-spy nav bar for mobile (< 900px).
 * Mirrors the sidebar links but displayed as a scrollable pill row.
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

      <div class="mobile-nav__divider"></div>

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
          class="lang-toggle__option btn-text"
          data-lang-option="en">
          EN
        </button>

        <button
          class="lang-toggle__option btn-text"
          data-lang-option="vi">
          VI
        </button>

      </div>

    </div>

  `;

}
