import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Altafio handles analytics, cookies and contact information on altafio.com.",
};

export default function PrivacyPage() {
  return (
    <main className="page">
      <article className="glass-card" aria-labelledby="privacy-title">
        <header className="section-heading">
          <p className="eyebrow">Privacy</p>
          <h1 id="privacy-title">Privacy Policy</h1>
          <p className="lead">
            Altafio respects your privacy and aims to collect only the information
            necessary to operate and understand the use of this website.
          </p>
          <p className="quiet-note">Last updated: 15 September 2026</p>
        </header>
        <div className="content-stack">
          <section className="content-block">
            <h2>Information we collect</h2>
            <p>
              This website does not provide user accounts or directly collect
              personal information through contact forms.
            </p>
            <p>
              If you choose to enable analytics, Google Analytics may collect
              information about how you use the website, including:
            </p>
            <ul className="bullet-list">
              <li>pages viewed and interactions with the site</li>
              <li>approximate geographic location</li>
              <li>device, operating system and browser information</li>
              <li>referral and traffic source information</li>
            </ul>
            <p>
              Google Analytics does not run unless you accept analytics through the
              website&apos;s consent notice.
            </p>
          </section>
          <section className="content-block">
            <h2>Cookies and analytics</h2>
            <p>
              We use Google Analytics to understand how visitors use the website and
              to help improve its content and performance.
            </p>
            <p>
              Analytics is optional. You can decline analytics and continue using
              the website normally.
            </p>
            <p>
              Your consent preference is stored locally on your device so the
              website can remember your choice.
            </p>
            <p>
              Google may process analytics information in accordance with its own
              privacy policies and data-processing practices.
            </p>
          </section>
          <section className="content-block">
            <h2>Third-party services</h2>
            <p>This website is hosted using GitHub Pages.</p>
            <p>
              Google Analytics is provided by Google and is only activated if you
              consent to analytics.
            </p>
            <p>
              These third-party providers may process technical information
              necessary to provide their respective services.
            </p>
          </section>
          <section className="content-block">
            <h2>Contacting us</h2>
            <p>
              Project enquiries are made through your own email application rather
              than through a website form. Information you send by email will be
              used for the purpose of responding to your enquiry and conducting
              related business communications.
            </p>
          </section>
          <section className="content-block">
            <h2>Privacy enquiries</h2>
            <p>
              For questions about privacy or how information associated with this
              website is handled, use the{" "}
              <a href="/contact">contact</a> page.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
