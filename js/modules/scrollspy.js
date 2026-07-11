/**
 * initScrollSpy
 * Highlights the active section link in both the desktop sidebar
 * and the mobile nav bar as the user scrolls.
 */

export function initScrollSpy() {

  const sections = document.querySelectorAll("section[id]");

  const OFFSET = 120; // px — accounts for sticky headers

  function onScroll() {

    let current = "";

    sections.forEach((section) => {

      const top = section.offsetTop - OFFSET;

      if (window.scrollY >= top) {
        current = section.id;
      }

    });

    document
      .querySelectorAll(".sidebar__link, .mobile-nav__link")
      .forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }

      });

  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // Run once on load to set initial active state
  onScroll();

}
