"use client";

import { useRef } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const closeMobileMenu = () => mobileMenu.current?.removeAttribute("open");

  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Altafio home">
        altafio<span aria-hidden="true">.</span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => (
          <a href={link.href} key={link.href}>{link.label}</a>
        ))}
      </nav>
      <details className="mobile-nav" ref={mobileMenu}>
        <summary aria-label="Open navigation"><span /><span /><span /></summary>
        <nav aria-label="Mobile navigation">
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMobileMenu}>{link.label}</a>
          ))}
        </nav>
      </details>
    </header>
  );
}
