import { profile }
from "../data/profile.js";

export function renderContact(
  container
) {

  container.innerHTML = `

    <div class="section__header">

      <h2 class="section-title">

        Contact

      </h2>

      <div class="section__divider"></div>

    </div>

    <div
      class="contact-card">

      <div
        class="contact-layout">

        <form
          id="contact-form">

          <div
            class="form-grid">

            <div
              class="form-group">

              <label
                class="input-label">

                Name

              </label>

              <input
                type="text"
                class="input"
                placeholder="Your name">

            </div>

            <div
              class="form-group">

              <label
                class="input-label">

                Email

              </label>

              <input
                type="email"
                class="input"
                placeholder="your@email.com">

            </div>

          </div>

          <div
            class="form-group">

            <label
              class="input-label">

              Message

            </label>

            <textarea
              class="textarea"
              placeholder="Write your message..."></textarea>

          </div>

          <button
            type="submit"
            class="btn btn-primary contact-form__submit">

            Send Message

          </button>

        </form>

        <div
          class="contact-links">

          <a
            href="${profile.contact.github}"
            target="_blank"
            class="contact-link">

            GitHub

          </a>

          <a
            href="${profile.contact.linkedin}"
            target="_blank"
            class="contact-link">

            LinkedIn

          </a>

          <a
            href="mailto:${profile.contact.email}"
            class="contact-link">

            ${profile.contact.email}

          </a>

          <div
            class="contact-link">

            ${profile.contact.location}

          </div>

        </div>

      </div>

    </div>

  `;
}