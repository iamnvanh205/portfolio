import { DOM } from "./core/selectors.js";

import { renderHero } from "./modules/renderHero.js";
import { renderSidebar } from "./modules/renderSidebar.js";
import { renderMobileNav } from "./modules/renderMobileNav.js";
import { renderAbout } from "./modules/renderAbout.js";
import { renderSkills } from "./modules/renderSkills.js";
import { renderProjects } from "./modules/renderProjects.js";
import { renderExperience } from "./modules/renderExperience.js";
import { renderContact } from "./modules/renderContact.js";
import { renderFooter } from "./modules/renderFooter.js";

import { initTheme, toggleTheme, updateThemeButtons } from "./modules/theme.js";
import { initLang, setLang, t, updateLangButtons } from "./modules/lang.js";
import { initScrollSpy } from "./modules/scrollspy.js";
import { initFloatingActions } from "./modules/floating-actions.js";
import { initContactForm } from "./modules/contact-form.js";

/* ==========================================
   RENDER - populate all sections
========================================== */

function renderPage() {
  document.querySelector(".floating-actions")?.setAttribute("aria-label", t("quickActions"));
  document.querySelector("#scroll-top-btn")?.setAttribute("title", t("backToTop"));
  document.querySelector("#scroll-top-btn")?.setAttribute("aria-label", t("scrollBackToTop"));

  renderHero(DOM.hero);
  renderSidebar(DOM.sidebar);
  renderMobileNav(DOM.mobileNav);

  renderAbout(DOM.about);
  renderSkills(DOM.skills);
  renderExperience(DOM.experience);
  renderProjects(DOM.projects);
  renderContact(DOM.contact);

  renderFooter(DOM.footer);

  updateThemeButtons();
  updateLangButtons();
  initContactForm();
}

initLang();
renderPage();

/* ==========================================
   INIT - behaviour modules
========================================== */

initTheme();
initScrollSpy();
initFloatingActions();

/* ==========================================
   THEME TOGGLE - delegated listener
========================================== */

document.addEventListener("click", (event) => {

  const btn = event.target.closest("[data-theme-option]");

  if (!btn) return;

  toggleTheme(btn.dataset.themeOption);

});

document.addEventListener("click", (event) => {

  const btn = event.target.closest("[data-lang-option]");

  if (!btn) return;

  setLang(btn.dataset.langOption);
  renderPage();

});
