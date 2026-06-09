export function initFloatingActions() {

  const scrollTopBtn =
    document.querySelector(
      "#scroll-top-btn"
    );

  const copyBtn =
    document.querySelector(
      "#copy-link-btn"
    );

  scrollTopBtn.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

  copyBtn.addEventListener(
    "click",
    async () => {

      await navigator.clipboard
        .writeText(
          window.location.href
        );

      alert(
        "Portfolio link copied!"
      );

    }
  );

}