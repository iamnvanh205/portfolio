export function renderFooter(
  container
) {

  const year =
    new Date().getFullYear();

  container.innerHTML = `

    <div
      class="footer__container">

      <p
        class="footer__text">

        © ${year} Nguyen Van Anh.
        All rights reserved.

      </p>

    </div>

  `;
}