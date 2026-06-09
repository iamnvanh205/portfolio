const menu = [

  {
    id: "about",
    label: "About"
  },

  {
    id: "skills",
    label: "Skills"
  },

  {
    id: "projects",
    label: "Projects"
  },

  {
    id: "experience",
    label: "Experience"
  },

  {
    id: "contact",
    label: "Contact"
  }
];

export function renderSidebar(
  container
) {

  container.innerHTML = `

  <nav class="sidebar__nav">

    ${menu
      .map(
        item => `
        
        <a
          href="#${item.id}"
          class="sidebar__link">

          ${item.label}

        </a>
        
      `
      )
      .join("")
    }

  </nav>

  `;
}