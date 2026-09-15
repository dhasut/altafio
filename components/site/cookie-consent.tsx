"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-RQY547RBTN";
const STORAGE_KEY = "altafio-analytics-consent";

type Consent = "accepted" | "declined" | null;

function readConsent(): Consent {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    if (value === "accepted" || value === "declined") return value;
  } catch {
    // Private mode / blocked storage — treat as undecided.
  }
  return null;
}

function writeConsent(value: Exclude<Consent, null>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Ignore persistence failures; choice still applies this session.
  }
  window.dispatchEvent(new Event("altafio-consent"));
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("altafio-consent", onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("altafio-consent", onStoreChange);
  };
}

function getSnapshot(): Consent {
  return readConsent();
}

function getServerSnapshot(): Consent {
  return null;
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const accept = () => writeConsent("accepted");
  const decline = () => writeConsent("declined");

  return (
    <>
      {consent === "accepted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      ) : null}

      {consent === null ? (
        <dialog className="cookie-consent" open aria-labelledby="cookie-consent-title" aria-describedby="cookie-consent-copy">
          <div className="cookie-consent__copy">
            <p id="cookie-consent-title" className="cookie-consent__title">Analytics</p>
            <p id="cookie-consent-copy">
              Altafio uses Google Analytics to understand site visits.{" "}
              <a href="/privacy">Privacy</a>
            </p>
          </div>
          <div className="cookie-consent__actions">
            <button type="button" className="button button--quiet cookie-consent__button" onClick={decline}>
              Decline
            </button>
            <button type="button" className="button cookie-consent__button" onClick={accept}>
              Accept
            </button>
          </div>
        </dialog>
      ) : null}
    </>
  );
}
