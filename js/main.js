import { DOM } from "./core/selectors.js";

import { renderHero } from "./modules/renderHero.js";
import { renderSidebar } from "./modules/renderSidebar.js";
import { renderMobileNav } from "./modules/renderMobileNav.js";
import { renderAbout } from "./modules/renderAbout.js";
import { renderSkills } from "./modules/renderSkills.js";
import { renderProjects } from "./modules/renderProjects.js";
import { renderExperience } from "./modules/renderExperience.js";
import { renderCertificates } from "./modules/renderCertificates.js";
import { renderContact } from "./modules/renderContact.js";
import { renderFooter } from "./modules/renderFooter.js";

import { initTheme, toggleTheme, updateThemeButtons } from "./modules/theme.js";
import { initLang, setLang, t, updateLangButtons, updateLangLabel } from "./modules/lang.js";
import { initScrollSpy } from "./modules/scrollspy.js";
import { initFloatingActions } from "./modules/floating-actions.js";
import { initContactForm } from "./modules/contact-form.js";
import { initViewport } from "./modules/viewport.js";

/* ==========================================
   RENDER - populate all sections
========================================== */

function renderPage() {
  document.querySelector("#skip-link").textContent = t("skipToContent");
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
  renderCertificates(DOM.certificates);
  renderContact(DOM.contact);

  renderFooter(DOM.footer);

  updateThemeButtons();
  updateLangButtons();
  updateLangLabel();
  initContactForm();
  window.dispatchEvent(new Event("scroll"));
}

initLang();
renderPage();

/* ==========================================
   INIT - behaviour modules
========================================== */

initTheme();
initScrollSpy();
initFloatingActions();
initViewport();

/* ==========================================
   THEME TOGGLE - delegated listener
========================================== */

document.addEventListener("click", (event) => {

  // Handle segmented controls (mobile nav)
  const segmentedBtn = event.target.closest("[data-theme-option]");
  if (segmentedBtn) {
    toggleTheme(segmentedBtn.dataset.themeOption);
    return;
  }

  // Handle toggle button (hero utility)
  const toggleBtn = event.target.closest("[data-theme-toggle]");
  if (toggleBtn) {
    toggleTheme(); // No argument = auto-toggle
    return;
  }

});

document.addEventListener("click", (event) => {

  // Handle segmented controls (mobile nav)
  const segmentedBtn = event.target.closest("[data-lang-option]");
  if (segmentedBtn) {
    setLang(segmentedBtn.dataset.langOption);
    renderPage();
    return;
  }

  // Handle toggle button (hero utility)
  const toggleBtn = event.target.closest("[data-lang-toggle]");
  if (toggleBtn) {
    setLang(); // No argument = auto-toggle
    renderPage();
    return;
  }

});
