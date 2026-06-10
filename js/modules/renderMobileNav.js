/**
 * renderMobileNav
 * Renders a sticky horizontal scroll-spy nav bar for mobile (< 900px).
 * Mirrors the sidebar links but displayed as a scrollable pill row.
 */

const menu = [
  { id: "about",      label: "About" },
  { id: "skills",     label: "Skills" },
  { id: "projects",   label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact",    label: "Contact" }
];

export function renderMobileNav(container) {

  container.innerHTML = `

    <div class="mobile-nav__inner">

      ${menu
        .map(
          item => `
            <a
              href="#${item.id}"
              class="mobile-nav__link"
              data-section="${item.id}">
              ${item.label}
            </a>
          `
        )
        .join("")
      }

    </div>

  `;

}
