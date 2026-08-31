import type { Metadata } from "next";
import { services } from "@/data/site";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <main className="page">
      <section className="glass-card glass-card--wide" aria-labelledby="services-title">
        <header className="section-heading">
          <p className="eyebrow">Services</p>
          <h1 id="services-title">From an idea to something useful.</h1>
          <p className="lead">Altafio works where product thinking, design and technology overlap.</p>
        </header>
        <ul className="service-list">
          {services.map((service) => (
            <li className={`service-item${service.primary ? " service-item--primary" : ""}`} key={service.name}>
              <h2>
                {service.primary && <span className="primary-label">Primary focus</span>}
                {service.name}
              </h2>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
