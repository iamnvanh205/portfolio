/**
 * contact-form.js
 * Handles contact form submission via EmailJS.
 *
 * Setup:
 *  1. Replace the three constants below with your EmailJS credentials.
 *  2. Make sure the SDK is loaded in index.html (see comment at bottom).
 */

/* ─── EmailJS credentials ────────────────────────────────────────────────── */

const EMAILJS_PUBLIC_KEY  = "xIMYjjAdMQSmL2PTq";   // Account → General → Public Key
const EMAILJS_SERVICE_ID  = "service_ntnak7n";   // Email Services → Service ID
const EMAILJS_TEMPLATE_ID = "template_8wxg3j8";  // Email Templates → Template ID

/* ─────────────────────────────────────────────────────────────────────────── */

export function initContactForm() {

  // Initialise EmailJS once the module loads
  if (typeof emailjs !== "undefined") {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  } else {
    console.warn("EmailJS SDK not loaded. Add the script tag to index.html.");
  }

  const form = document.querySelector("#contact-form");

  if (!form) return;

  form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const nameInput    = form.querySelector("#contact-name");
    const emailInput   = form.querySelector("#contact-email");
    const messageInput = form.querySelector("#contact-message");
    const submitBtn    = form.querySelector("[type='submit']");

    // ── Validation ──────────────────────────────────────────────────────────

    let isValid = true;

    clearErrors(form);

    if (!nameInput.value.trim()) {
      showError(nameInput, "Name is required.");
      isValid = false;
    }

    if (!emailInput.value.trim()) {
      showError(emailInput, "Email is required.");
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email address.");
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      showError(messageInput, "Message cannot be empty.");
      isValid = false;
    }

    if (!isValid) return;

    // ── Submit state ─────────────────────────────────────────────────────────

    submitBtn.disabled    = true;
    submitBtn.textContent = "Sending…";

    // Template variables — must match {{placeholders}} in your EmailJS template
    const templateParams = {
      from_name : nameInput.value.trim(),
      reply_to  : emailInput.value.trim(),
      message   : messageInput.value.trim()
    };

    try {

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      showFormSuccess(form, submitBtn);

    } catch (error) {

      console.error("EmailJS error:", error);

      submitBtn.disabled    = false;
      submitBtn.textContent = "Send Message";

      showFormError(form);

    }

  });

}

/* ── Helpers ────────────────────────────────────────────────────────────────── */

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function showError(input, message) {

  input.classList.add("input--error");

  const errorEl = document.createElement("span");
  errorEl.className   = "form-error";
  errorEl.textContent = message;
  errorEl.setAttribute("role", "alert");

  input.parentElement.appendChild(errorEl);

}

function clearErrors(form) {

  form.querySelectorAll(".input--error").forEach(
    el => el.classList.remove("input--error")
  );

  form.querySelectorAll(".form-error").forEach(
    el => el.remove()
  );

  const banner = form.querySelector(".form-banner");
  if (banner) banner.remove();

}

function showFormSuccess(form, submitBtn) {

  form.reset();

  submitBtn.disabled    = false;
  submitBtn.textContent = "Send Message";

  const banner = document.createElement("p");
  banner.className   = "form-banner form-banner--success";
  banner.textContent = "Message sent — I'll get back to you soon!";
  banner.setAttribute("role", "status");

  form.prepend(banner);

  setTimeout(() => {
    if (banner.parentElement) banner.remove();
  }, 6000);

}

function showFormError(form) {

  const banner = document.createElement("p");
  banner.className   = "form-banner form-banner--error";
  banner.textContent = "Something went wrong. Please try again.";
  banner.setAttribute("role", "alert");

  form.prepend(banner);

  setTimeout(() => {
    if (banner.parentElement) banner.remove();
  }, 5000);

}