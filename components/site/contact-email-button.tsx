"use client";

const CONTACT_USER = "hello";
const CONTACT_DOMAIN = "altafio.com";

export function ContactEmailButton() {
  return (
    <button
      type="button"
      className="button contact-email-button"
      onClick={() => {
        window.location.href = `mailto:${CONTACT_USER}@${CONTACT_DOMAIN}`;
      }}
    >
      Email Altafio
    </button>
  );
}
