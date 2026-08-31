import type { Metadata } from "next";

export const dynamic = "force-static";
export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="page">
      <article className="glass-card" aria-labelledby="about-title">
        <header className="section-heading">
          <p className="eyebrow">About</p>
          <h1 id="about-title">Altafio</h1>
          <p className="lead">
            Altafio is an independent creative technology business bringing
            design, technology and practical delivery together.
          </p>
        </header>
        <div className="content-stack">
          <section className="content-block">
            <h2>What Altafio does</h2>
            <p>
              Altafio turns early ideas into clear concepts, useful digital
              products and practical services. Work can begin with strategy,
              design or technology and continue through prototyping and delivery.
            </p>
          </section>
          <section className="content-block">
            <h2>What Altafio provides</h2>
            <ul className="bullet-list">
              <li>Creative technology</li>
              <li>Design and technology consultancy</li>
              <li>UX/UI and service design</li>
              <li>Digital transformation</li>
            </ul>
          </section>
          <section className="content-block">
            <h2>How Altafio works</h2>
            <p>
              Each engagement focuses on making the problem clear, shaping the
              right experience, testing ideas early and building what proves useful.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
