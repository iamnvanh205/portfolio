import { certificates } from "../data/certificates.js";
import { t } from "./lang.js";

export function renderCertificates(container) {
  const sortedCerts = [...certificates].sort((a, b) => a.order - b.order);

  container.innerHTML = `
    <div class="section__header">
      <h2 id="certificates-heading" class="section-title">
        ${t("nav.certificates")}
      </h2>
      <div class="section__divider"></div>
    </div>

    ${sortedCerts.length > 0
      ? `
        <div class="certificates-grid">
          ${sortedCerts.map(cert => renderCertificate(cert)).join("")}
        </div>
      `
      : `
        <div class="certificates-empty">
          <p class="body-text">${t("certificates.emptyState")}</p>
        </div>
      `
    }
  `;
}

function renderCertificate(cert) {
  const skillsHTML = cert.skills?.length
    ? `
      <div class="certificate-card__skills">
        ${cert.skills.map(skill => `<span class="tech-tag">${skill}</span>`).join("")}
      </div>
    `
    : "";

  const verifyButton = cert.credentialUrl
    ? `
      <a
        href="${cert.credentialUrl}"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-outline">
        ${t("certificates.verifyCredential")}
      </a>
    `
    : "";

  return `
    <article class="certificate-card">
      <div class="certificate-card__content">
        <h3 class="certificate-card__title card-title">${cert.title}</h3>
        
        <div class="certificate-card__meta body-small">
          <div class="certificate-card__meta-item">
            <span class="certificate-card__label">${t("certificates.issuer")}:</span>
            <span>${cert.issuer}</span>
          </div>
          ${cert.issueDate
            ? `
              <div class="certificate-card__meta-item">
                <span class="certificate-card__label">${t("certificates.issued")}:</span>
                <span>${cert.issueDate}</span>
              </div>
            `
            : ""
          }
          ${cert.credentialId
            ? `
              <div class="certificate-card__meta-item">
                <span class="certificate-card__label">${t("certificates.credentialId")}:</span>
                <span>${cert.credentialId}</span>
              </div>
            `
            : ""
          }
        </div>

        ${cert.description
          ? `<p class="certificate-card__description body-small">${cert.description}</p>`
          : ""
        }

        ${skillsHTML}
        ${verifyButton ? `<div class="certificate-card__actions">${verifyButton}</div>` : ""}
      </div>

      <div class="certificate-card__image">
        <img
          src="${cert.image}"
          alt="${t("certificates.certificateOf")} - ${cert.title}"
          loading="lazy"
          decoding="async">
      </div>
    </article>
  `;
}
