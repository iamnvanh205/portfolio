/**
 * initScrollSpy
 * Highlights the active section link in both the desktop sidebar
 * and the mobile nav bar as the user scrolls.
 */

export function initScrollSpy() {

  const sections = document.querySelectorAll("section[id]");
  let previous = "";

  const OFFSET = 120; // px — accounts for sticky headers

  function onScroll() {

    let current = sections[0]?.id || "";

    sections.forEach((section) => {

      const top = section.offsetTop - OFFSET;

      if (window.scrollY >= top) {
        current = section.id;
      }

    });

    const links = document
      .querySelectorAll(".sidebar__link, .mobile-nav__link")
;

    links.forEach((link) => {

        link.classList.remove("active");
        link.removeAttribute("aria-current");

        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
          link.setAttribute("aria-current", "location");
        }

      });

    if (current !== previous) {
      const activeMobileLink =
        document.querySelector(`.mobile-nav__link[href="#${current}"]`);
      const mobileNav = activeMobileLink?.parentElement;

      mobileNav?.scrollTo({
        left: activeMobileLink.offsetLeft -
          (mobileNav.clientWidth - activeMobileLink.offsetWidth) / 2,
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
      previous = current;
    }

  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // Run once on load to set initial active state
  onScroll();

}
