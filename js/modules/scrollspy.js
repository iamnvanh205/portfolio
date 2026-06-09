export function initScrollSpy() {

  const sections =
    document.querySelectorAll(
      "section[id]"
    );

  const navLinks =
    document.querySelectorAll(
      ".sidebar__link"
    );

  window.addEventListener(
    "scroll",
    () => {

      let current = "";

      sections.forEach(
        section => {

          const top =
            section.offsetTop - 120;

          if (
            window.scrollY >= top
          ) {
            current =
              section.id;
          }

        }
      );

      navLinks.forEach(
        link => {

          link.classList.remove(
            "active"
          );

          if (
            link.getAttribute(
              "href"
            ) === `#${current}`
          ) {

            link.classList.add(
              "active"
            );

          }

        }
      );

    }
  );

}