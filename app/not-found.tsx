export default function NotFound() {
  return (
    <main className="page">
      <section className="glass-card glass-card--compact" aria-labelledby="not-found-title">
        <p className="eyebrow">404</p>
        <h1 id="not-found-title">Page not found.</h1>
        <p className="lead">That URL is not part of this site.</p>
        <div className="button-row">
          <a className="button" href="/">
            Back to home
          </a>
        </div>
      </section>
    </main>
  );
}
