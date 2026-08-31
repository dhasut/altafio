import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { SkyBackdrop } from "@/components/site/sky-backdrop";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Altafio — Blue-sky ideas, made real",
    template: "%s — Altafio",
  },
  description:
    "Independent creative technology business working across design, digital products and transformation.",
  metadataBase: new URL("https://altafio.com"),
  openGraph: {
    title: "Altafio — Blue-sky ideas, made real",
    description: "Creative technology, design and digital products by Altafio.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Altafio — Blue-sky ideas, made real" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Altafio — Blue-sky ideas, made real",
    description: "Creative technology, design and digital products by Altafio.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${outfit.variable}`}>
        <SkyBackdrop />
        <div className="site-frame">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
