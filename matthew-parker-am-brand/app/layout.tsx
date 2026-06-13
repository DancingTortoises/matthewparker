import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StructuredData } from "@/components/StructuredData";
import { profile, technologies } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: {
    default: "Matthew Parker | Metal AM Qualification & Production Readiness",
    template: "%s | Matthew Parker"
  },
  description:
    "Matthew Parker is a metal additive manufacturing executive focused on AM qualification, production readiness, quality systems, and factory scaling.",
  openGraph: {
    title: "Matthew Parker | Metal AM Qualification & Production Readiness",
    description:
      "Personal professional brand site for Matthew Parker, additive manufacturing executive and production-readiness leader.",
    type: "website",
    locale: "en_US"
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  worksFor: {
    "@type": "Organization",
    name: profile.company
  },
  email: profile.email,
  url: "https://www.example.com",
  sameAs: [profile.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles Area",
    addressRegion: "CA",
    addressCountry: "US"
  },
  knowsAbout: technologies.concat([
    "Metal additive manufacturing qualification",
    "Aerospace additive manufacturing qualification",
    "Defense additive manufacturing production",
    "AM production readiness",
    "Additive manufacturing quality systems"
  ]),
  description: profile.positioning
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StructuredData data={personSchema} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-signal focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-void"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
