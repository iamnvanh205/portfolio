/**
 * Theme module
 * Applies light/dark theme via data-theme on <html>.
 * Syncs toggle button active state on every change.
 */

const root = document.documentElement;
const STORAGE_KEY = "portfolio-theme";

export function initTheme() {

  root.setAttribute("data-theme", getSavedTheme() || "light");

  updateBrowserTheme();
  updateButtons();

}

export function toggleTheme(theme) {

  root.setAttribute("data-theme", theme);
  saveTheme(theme);

  updateBrowserTheme();
  updateButtons();

}

function getSavedTheme() {
  try {
    return sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    sessionStorage.setItem(STORAGE_KEY, theme);
  } catch {}
}

function updateBrowserTheme() {
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", root.dataset.theme === "dark" ? "#1E1E2E" : "#EFF1F5");
}

export function updateThemeButtons() {
  updateButtons();
}

function updateButtons() {

  const currentTheme = root.getAttribute("data-theme") || "light";

  document
    .querySelectorAll("[data-theme-option]")
    .forEach((btn) => {

      const active = btn.dataset.themeOption === currentTheme;

      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));

    });

}
