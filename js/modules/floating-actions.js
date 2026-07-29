export function initFloatingActions() {

  const scrollTopBtn = document.querySelector("#scroll-top-btn");

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
    });

    const updateVisibility = () => {
      const visible = window.scrollY > Math.max(480, window.innerHeight * .75);
      scrollTopBtn.classList.toggle("is-visible", visible);
      scrollTopBtn.setAttribute("aria-hidden", String(!visible));
      scrollTopBtn.tabIndex = visible ? 0 : -1;
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
  }

}
