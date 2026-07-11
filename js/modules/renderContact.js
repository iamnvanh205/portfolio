import { getProfile, t } from "./lang.js";

/**
 * renderContact
 * Renders the Contact section with a validated form and
 * social/contact links with inline SVG icons.
 */
export function renderContact(container) {

  const profile = getProfile();

  container.innerHTML = `

    <div class="section__header">

      <h2
        id="contact-heading"
        class="section-title">
        ${t("nav.contact")}
      </h2>

      <div class="section__divider"></div>

    </div>

    <div class="contact-card">

      <div class="contact-layout">

        <!-- FORM AREA -->

        <form
          id="contact-form"
          novalidate>

          <div class="form-grid">

            <div class="form-group">

              <label
                class="input-label"
                for="contact-name">
                ${t("contact.name")}
              </label>

              <input
                id="contact-name"
                type="text"
                class="input"
                placeholder="${t("contact.namePlaceholder")}"
                autocomplete="name">

            </div>

            <div class="form-group">

              <label
                class="input-label"
                for="contact-email">
                ${t("contact.email")}
              </label>

              <input
                id="contact-email"
                type="email"
                class="input"
                placeholder="your@email.com"
                autocomplete="email">

            </div>

          </div>

          <div
            class="form-group"
            style="margin-top: 16px">

            <label
              class="input-label"
              for="contact-message">
              ${t("contact.message")}
            </label>

            <textarea
              id="contact-message"
              class="textarea"
              placeholder="${t("contact.messagePlaceholder")}"></textarea>

          </div>

          <button
            type="submit"
            class="btn btn-primary contact-form__submit">
            ${t("contact.send")}
          </button>

        </form>

        <!-- LINKS AREA -->

        <div class="contact-links">

          <a
            href="${profile.contact.github}"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link">

            <!-- GitHub icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20" height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>

            <span>github.com/iamnvanh205</span>

          </a>

          <a
            href="${profile.contact.linkedin}"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link">

            <!-- LinkedIn icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20" height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>

            <span>linkedin.com/in/iamnvanh205</span>

          </a>

          <a
            href="mailto:${profile.contact.email}"
            class="contact-link">

            <!-- Email icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20" height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>

            <span>${profile.contact.email}</span>

          </a>

          <div class="contact-link contact-link--static">

            <!-- Location icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20" height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>

            <span>${profile.contact.location}</span>

          </div>

        </div>

      </div>

    </div>

  `;

}
