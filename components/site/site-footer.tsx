export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Altafio</p>
      <p>
        <a href="/privacy">Privacy</a>
        <span aria-hidden="true"> · </span>
        Independent creative technology business.
      </p>
    </footer>
  );
}
