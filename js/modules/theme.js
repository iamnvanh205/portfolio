const root =
  document.documentElement;

const STORAGE_KEY =
  "portfolio-theme";

export function initTheme() {

  const savedTheme =
    localStorage.getItem(
      STORAGE_KEY
    );

  if (savedTheme) {

    root.setAttribute(
      "data-theme",
      savedTheme
    );

  }

  updateButtons();
}

export function toggleTheme(
  theme
) {

  root.setAttribute(
    "data-theme",
    theme
  );

  localStorage.setItem(
    STORAGE_KEY,
    theme
  );

  updateButtons();
}

function updateButtons() {

  const currentTheme =
    root.getAttribute(
      "data-theme"
    );

  document
    .querySelectorAll(
      ".theme-toggle__option"
    )
    .forEach(btn => {

      btn.classList.remove(
        "active"
      );

      if (
        btn.dataset.themeOption
        === currentTheme
      ) {
        btn.classList.add(
          "active"
        );
      }

    });

}