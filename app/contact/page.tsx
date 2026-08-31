import type { Metadata } from "next";
import { ContactEmailButton } from "@/components/site/contact-email-button";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="page">
      <section className="glass-card" aria-labelledby="contact-title">
        <p className="eyebrow">Contact</p>
        <h1 id="contact-title">Get in touch.</h1>
        <p className="lead">For project enquiries and collaboration, send an email.</p>
        <ContactEmailButton />
      </section>
    </main>
  );
}
