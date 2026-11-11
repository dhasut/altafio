import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CASA",
  description:
    "CASA is a private household assistant by Altafio. It keeps one shared Google Calendar for a household.",
};

export default function CasaPage() {
  return (
    <main className="page">
      <article className="glass-card" aria-labelledby="casa-title">
        <header className="section-heading">
          <p className="eyebrow">Altafio project</p>
          <h1 id="casa-title">CASA</h1>
          <p className="lead">
            A private household assistant. It runs on a computer at home and is used
            only by the members of one household. It is not offered to the public and
            has no sign-up.
          </p>
        </header>
        <div className="content-stack">
          <section className="content-block">
            <h2>Google Calendar</h2>
            <p>
              With the household&apos;s permission, CASA keeps one shared Google
              Calendar, called &ldquo;CASA Household&rdquo;, so household members can
              see family events together. It can only see and change that one
              calendar, which it creates itself.
            </p>
            <p>
              Read the <a href="/casa/privacy">CASA privacy policy</a>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
