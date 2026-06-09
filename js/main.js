import { DOM }
from "./core/selectors.js";

import {
  renderHero
}
from "./modules/renderHero.js";

import {
  renderSidebar
}
from "./modules/renderSidebar.js";

import {
  renderAbout
}
from "./modules/renderAbout.js";

import {
  renderSkills
}
from "./modules/renderSkills.js";

import {
  renderProjects
}
from "./modules/renderProjects.js";

import {
  renderExperience
}
from "./modules/renderExperience.js";

import {
  renderContact
}
from "./modules/renderContact.js";

import {
  renderFooter
}
from "./modules/renderFooter.js";

import {
  initTheme,
  toggleTheme
}
from "./modules/theme.js";

import {
  initScrollSpy
}
from "./modules/scrollspy.js";

import {
  initFloatingActions
}
from "./modules/floating-actions.js";

/* ========================= */

renderHero(
  DOM.hero
);

renderSidebar(
  DOM.sidebar
);

renderAbout(
  DOM.about
);

renderSkills(
  DOM.skills
);

renderProjects(
  DOM.projects
);

renderExperience(
  DOM.experience
);

renderContact(
  DOM.contact
);

renderFooter(
  DOM.footer
);

/* ========================= */

initTheme();

initScrollSpy();

initFloatingActions();

/* ========================= */

document.addEventListener(
  "click",
  event => {

    const btn =
      event.target.closest(
        "[data-theme-option]"
      );

    if (!btn) return;

    toggleTheme(
      btn.dataset.themeOption
    );

  }
);