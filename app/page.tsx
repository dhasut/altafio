import Link from "next/link";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <main className="page page--home">
      <section className="glass-card hero-card" aria-labelledby="home-title">
        <p className="eyebrow">Creative technology</p>
        <h1 id="home-title">Blue-sky ideas, made real.</h1>
        <p className="lead">
          Altafio is an independent creative technology business that designs,
          prototypes and builds useful digital products and services.
        </p>
        <div className="button-row">
          <Link className="button" href="/services">
            Services
          </Link>
          <Link className="button button--quiet" href="/projects">
            Projects
          </Link>
        </div>
        <p className="quiet-note">Design × technology × practical delivery</p>
      </section>
    </main>
  );
}
