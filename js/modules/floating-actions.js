/**
 * initFloatingActions
 * - Scroll-to-top button: smooth scroll to page top.
 * - Copy link button: copies current URL to clipboard,
 *   shows a non-blocking toast notification.
 */

export function initFloatingActions() {

  const scrollTopBtn = document.querySelector("#scroll-top-btn");
  const copyBtn = document.querySelector("#copy-link-btn");
  const actions = document.querySelector(".floating-actions");
  const footer = document.querySelector("#footer");

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {

      try {

        await navigator.clipboard.writeText(window.location.href);
        showToast("Link copied!");

      } catch {

        // Fallback for browsers that block clipboard without HTTPS
        showToast("Copy from the address bar.", true);

      }

    });
  }

  if (actions && footer) {
    const placeAboveFooter = () => {
      const gap = window.innerWidth >= 768 ? 32 : 24;
      const overlap = Math.max(0, window.innerHeight - footer.getBoundingClientRect().top);
      actions.style.setProperty("--floating-actions-bottom", `${overlap + gap}px`);
    };

    placeAboveFooter();
    window.addEventListener("scroll", placeAboveFooter, { passive: true });
    window.addEventListener("resize", placeAboveFooter);
  }

}

/* ---- Toast notification ---- */

function showToast(message, isError = false) {

  // Remove any existing toast first
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = `toast${isError ? " toast--error" : ""}`;
  toast.textContent = message;
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");

  document.body.appendChild(toast);

  // Animate in (small delay so transition fires)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add("toast--visible");
    });
  });

  // Auto-remove after 2.5s
  setTimeout(() => {
    toast.classList.remove("toast--visible");
    toast.addEventListener(
      "transitionend",
      () => toast.remove(),
      { once: true }
    );
  }, 2500);

}
