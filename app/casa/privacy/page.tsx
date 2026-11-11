import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CASA privacy policy",
  description: "How CASA, a private household assistant by Altafio, handles Google Calendar data.",
};

export default function CasaPrivacyPage() {
  return (
    <main className="page">
      <article className="glass-card" aria-labelledby="casa-privacy-title">
        <header className="section-heading">
          <p className="eyebrow">CASA</p>
          <h1 id="casa-privacy-title">CASA Privacy Policy</h1>
          <p className="lead">
            CASA is a private household assistant used only by the members of one
            household. This page explains what it does with Google data.
          </p>
          <p className="quiet-note">Last updated: 11 November 2026</p>
        </header>
        <div className="content-stack">
          <section className="content-block">
            <h2>What CASA accesses</h2>
            <p>
              CASA asks Google for one permission: to create calendars and manage
              events on the calendars it created (calendar.app.created). It also reads
              the account&apos;s email address so the household admin can see which
              account is connected. It cannot see or change any other calendar, email,
              contacts or files.
            </p>
          </section>
          <section className="content-block">
            <h2>How it is used</h2>
            <ul className="bullet-list">
              <li>CASA creates one calendar, &ldquo;CASA Household&rdquo;, and shows its events to household members.</li>
              <li>Adult members can add and remove events on it through CASA.</li>
              <li>
                Calendar data is used only to show and manage that calendar. It is not
                sold, shared outside the household, used for advertising, or used to
                train AI models.
              </li>
            </ul>
          </section>
          <section className="content-block">
            <h2>Where it is stored</h2>
            <p>
              CASA runs on a computer in the household. The access token Google issues
              is stored only on that computer, readable only by CASA. Event details are
              fetched from Google when needed and are not copied anywhere else.
            </p>
          </section>
          <section className="content-block">
            <h2>Removing access</h2>
            <p>
              The household admin can disconnect Google Calendar in CASA at any time,
              which revokes the token with Google and deletes it from CASA. Access can
              also be removed in the Google Account under Security, then Third-party
              apps &amp; services. The calendar itself stays in Google until the account
              owner deletes it.
            </p>
          </section>
          <section className="content-block">
            <h2>Contact</h2>
            <p>
              For questions about CASA and privacy, use the <a href="/contact">contact</a> page.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
