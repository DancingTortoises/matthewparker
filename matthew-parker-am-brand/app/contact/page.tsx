import type { Metadata } from "next";
import { CalendlyPlaceholder } from "@/components/CalendlyPlaceholder";
import { ContactForm } from "@/components/ContactForm";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Matthew Parker",
  description:
    "Contact Matthew Parker for advisory, consulting, speaking, recruiting, leadership, board, collaboration, media, or additive manufacturing qualification discussions.",
  openGraph: {
    title: "Contact Matthew Parker",
    description:
      "Contact form, email, LinkedIn, and scheduling placeholder for AM qualification and production-readiness conversations."
  }
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a non-confidential AM qualification, advisory, or speaking conversation."
        text="Phone is not displayed publicly. Use email, LinkedIn, or the structured form for advisory, speaking, recruiting, board, collaboration, media, or AM qualification discussions."
        primaryHref={profile.emailHref}
        primaryLabel="Email Matthew"
        secondaryHref={profile.linkedin}
        secondaryLabel="LinkedIn"
      />

      <section className="bg-graphite">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Contact pathways"
              title="Keep the initial inquiry concise and public-safe."
              text="Do not include confidential, proprietary, ITAR-controlled, CUI, export-controlled, customer-sensitive, or company-sensitive information in the first message."
            />
            <div className="grid gap-4">
              <div className="border border-white/10 bg-white/[0.04] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">Email</p>
                <a className="mt-3 block text-xl font-semibold text-frost hover:text-signal" href={profile.emailHref}>
                  {profile.email}
                </a>
              </div>
              <div className="border border-white/10 bg-white/[0.04] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">LinkedIn</p>
                <a className="mt-3 block text-xl font-semibold text-frost hover:text-signal" href={profile.linkedin}>
                  linkedin.com/in/1mparker
                </a>
              </div>
              <CalendlyPlaceholder />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="bg-void">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeader
            eyebrow="Approved media"
            title="A professional headshot can make this page more personal without becoming casual."
            text="Use an approved professional image only. Do not include unapproved company facility, project, customer, or controlled technical imagery."
          />
          <MediaPlaceholder
            label="PLACEHOLDER: Approved professional headshot or speaking photo needed"
            aspect="wide"
          />
        </div>
      </section>
    </>
  );
}
