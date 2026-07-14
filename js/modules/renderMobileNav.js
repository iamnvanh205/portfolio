/**
 * renderMobileNav
 * Renders a sticky horizontal scroll-spy nav bar for mobile (< 900px).
 * Mirrors the sidebar links but displayed as a scrollable pill row.
 */

import { t } from "./lang.js";

export function renderMobileNav(container) {

  const menu = ["about", "skills", "experience", "projects", "contact"];

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

    </div>

  `;

}
