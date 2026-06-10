/**
 * Theme module
 * Persists and applies light/dark theme via data-theme on <html>.
 * Syncs toggle button active state on every change.
 */

const root       = document.documentElement;
const STORAGE_KEY = "portfolio-theme";

export function initTheme() {

  const savedTheme = localStorage.getItem(STORAGE_KEY);

  // Apply saved theme; fall back to the HTML attribute (light)
  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
  }

  updateButtons();

}

export function toggleTheme(theme) {

  root.setAttribute("data-theme", theme);

  localStorage.setItem(STORAGE_KEY, theme);

  updateButtons();

}

function updateButtons() {

  const currentTheme = root.getAttribute("data-theme") || "light";

  document
    .querySelectorAll(".theme-toggle__option")
    .forEach((btn) => {

      btn.classList.toggle(
        "active",
        btn.dataset.themeOption === currentTheme
      );

    });

}
