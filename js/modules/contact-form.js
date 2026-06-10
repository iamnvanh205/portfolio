/**
 * initContactForm
 * Handles contact form submission with client-side validation
 * and user feedback. No real backend — shows success/error state.
 */

export function initContactForm() {

  const form = document.querySelector("#contact-form");

  if (!form) return;

  form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const nameInput    = form.querySelector("#contact-name");
    const emailInput   = form.querySelector("#contact-email");
    const messageInput = form.querySelector("#contact-message");
    const submitBtn    = form.querySelector("[type='submit']");

    // --- Validation ---

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

    // --- Submit state ---

    submitBtn.disabled     = true;
    submitBtn.textContent  = "Sending…";

    try {

      // Simulate async send (replace with real endpoint if needed)
      await simulateSend();

      showFormSuccess(form, submitBtn);

    } catch {

      submitBtn.disabled    = false;
      submitBtn.textContent = "Send Message";

      showFormError(form);

    }

  });

}

/* ---- Helpers ---- */

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

  // Auto-remove after 6s
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

function simulateSend() {
  return new Promise((resolve) => setTimeout(resolve, 800));
}
