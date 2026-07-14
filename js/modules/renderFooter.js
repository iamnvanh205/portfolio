import { t } from "./lang.js";

export function renderFooter(container) {

  const year = new Date().getFullYear();

  container.innerHTML = `

    <div class="footer__container page-container">

      <p class="footer__text footer-text">
        © ${year} Nguyen Van Anh. ${t("footer")}
      </p>

    </div>

  `;

}
