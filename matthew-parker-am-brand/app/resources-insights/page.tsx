import type { Metadata } from "next";
import { MediaImage } from "@/components/MediaImage";
import { PageHero } from "@/components/PageHero";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { resources } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description:
    "Resource hub for Matthew Parker's metal additive manufacturing insights, including AM qualification, production readiness, powder traceability, and aerospace defense AM strategy.",
  openGraph: {
    title: "Resources & Insights | Matthew Parker",
    description:
      "Insights on AM qualification, production readiness, powder traceability, and aerospace and defense AM strategy."
  }
};

const resourceTypes = ["Articles", "Technical notes", "White papers", "Presentations", "Videos", "Industry insights"];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources and insights"
        title="A resource hub for AM qualification, production readiness, and executive decision-making."
        text="Matthew's public insight themes focus on qualification, production readiness, customer confidence, powder traceability, and executive AM decision-making."
        primaryHref="/contact"
        primaryLabel="Discuss a Resource"
        secondaryHref="/speaking-thought-leadership"
        secondaryLabel="Speaking Topics"
      />

      <section className="bg-graphite">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Resource formats"
            title="Educational content without AM hype or controlled detail."
            text="Each resource should help executives and technical teams think more clearly about qualification, readiness, and scale while staying within public, compliance-safe boundaries."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {resourceTypes.map((type) => (
              <div key={type} className="border border-white/10 bg-white/[0.04] px-5 py-4 font-semibold text-frost">
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-void">
        <div className="mx-auto max-w-site px-5 py-20">
          <SectionHeader
            eyebrow="Insight themes"
            title="Public themes for qualification and production readiness."
            text="These topics summarize the conversations Matthew is positioned to support through articles, technical education, presentations, interviews, and executive briefings."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-carbon">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeader
            eyebrow="Printed-part context"
            title="Production credibility comes from proving the system around the part."
            text="This image supports Matthew's focus on moving metal AM from successful builds to controlled, repeatable, evidence-backed production capability."
          />
          <MediaImage
            src="/media/printed-part-upright.jpeg"
            alt="Metal 3D printed part produced by Matthew Parker"
            aspect="tall"
            fit="contain"
            className="bg-void"
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
        </div>
      </section>
    </>
  );
}
