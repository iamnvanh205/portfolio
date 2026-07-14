import { t } from "./lang.js";

export function renderSidebar(container) {

  const menu = ["about", "skills", "experience", "projects", "contact"];

  container.innerHTML = `

    <nav class="sidebar__nav" aria-label="Page sections">

      ${menu
        .map(
          (item) => `
            <a
              href="#${item}"
              class="sidebar__link nav-link-text">
              ${t(`nav.${item}`)}
            </a>
          `
        )
        .join("")
      }

    </nav>

  `;

}
