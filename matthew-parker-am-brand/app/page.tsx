import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { CredibilityBand } from "@/components/CredibilityBand";
import { ExpertiseCard } from "@/components/ExpertiseCard";
import { MediaImage } from "@/components/MediaImage";
import { SectionHeader } from "@/components/SectionHeader";
import {
  expertiseCategories,
  adviceQuestions,
  differentiators,
  industries,
  profile,
  speakingTopics,
  standards,
  technologies
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Metal AM Qualification & Production Readiness Executive",
  description:
    "Matthew Parker helps organizations qualify and scale metal additive manufacturing for aerospace, defense, regulated production, and factory scaling environments.",
  openGraph: {
    title: "Matthew Parker | Metal AM Qualification & Production Readiness",
    description:
      "Technical, strategic, practical AM leadership for qualified, repeatable, production-ready metal additive manufacturing."
  }
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-void panel-grid">
        <div className="absolute inset-x-0 top-0 h-px metal-line" />
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 md:py-28 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">
              {profile.brandIdentity}
            </p>
            <h1 className="mt-5 max-w-5xl text-balance text-5xl font-semibold leading-[0.93] tracking-[-0.055em] text-frost md:text-7xl">
              Qualifying and scaling metal additive manufacturing for serious production environments.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-silver/72 md:text-xl md:leading-9">
              Matthew Parker helps organizations move metal AM from prototype success to qualified, repeatable, production-ready manufacturing where quality, traceability, rate, automation, and customer confidence matter.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Contact Matthew</ButtonLink>
              <ButtonLink href="/expertise" variant="secondary">Explore Expertise</ButtonLink>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {["Metal AM executive", "Qualification leader", "Production-scaling operator"].map((item) => (
                <div key={item} className="border-l border-signal/40 pl-4 text-sm font-semibold text-silver/72">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <MediaImage
            src="/media/matthewparker-headshot.jpeg"
            alt="Matthew Parker professional headshot"
            aspect="portrait"
            priority
          />
        </div>
      </section>

      <CredibilityBand />

      <section className="bg-graphite">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeader
            eyebrow="Executive overview"
            title="Not AM hype. Operational credibility for regulated production."
            text="The site positions Matthew as a technical executive who connects machines, materials, process control, quality systems, qualification evidence, customer requirements, autonomous factory integration, and executive decision-making."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Builds credibility with customers, auditors, and leadership teams.",
              "Understands the gap between prototype wins and production capability.",
              "Connects AM technology decisions to factory economics and operational risk.",
              "Frames standards and quality expectations without exposing controlled details."
            ].map((item) => (
              <Card key={item}>
                <p className="text-lg font-semibold leading-7 text-frost">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-void">
        <div className="mx-auto max-w-site px-5 py-20">
          <SectionHeader
            eyebrow="Core expertise pillars"
            title="Technical depth shaped by production constraints."
            text="The strongest AM organizations understand qualification, operations, quality, post-processing, inspection, and business requirements as one connected system."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {expertiseCategories.slice(0, 6).map((item) => (
              <ExpertiseCard key={item.title} {...item} />
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/expertise" variant="quiet">View All Expertise</ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-carbon">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Qualification and readiness"
              title="There is a difference between printing parts and proving capability."
              text="Qualified production capability requires machine and material readiness, powder control, documentation, traceability, inspection strategy, post-processing controls, customer alignment, and quality-system discipline."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {standards.map((item) => (
                <span key={item} className="border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] text-silver/70">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <Card>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-signal">
              Production readiness lens
            </p>
            <p className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.025em] text-frost">
              Qualification is an operating discipline.
            </p>
            <p className="mt-4 leading-7 text-silver/66">
              AM becomes credible when engineering, operations, materials, machines, post-processing, inspection, documentation, automation, software-defined workflows, and customer requirements work as one controlled production system.
            </p>
            <div className="mt-7">
              <ButtonLink href="/qualification-production-readiness">Read the Qualification Page</ButtonLink>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto max-w-site px-5 py-20">
          <SectionHeader
            eyebrow="What makes the perspective different"
            title="Not just knowing how to print parts."
            text="Matthew's value is knowing how to help make metal AM credible, repeatable, auditable, scalable, and production-ready."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {differentiators.map((item) => (
              <Card key={item.title}>
                <h3 className="text-2xl font-semibold tracking-[-0.025em] text-frost">{item.title}</h3>
                <p className="mt-4 leading-7 text-silver/66">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-void">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeader
            eyebrow="Industries served"
            title="Built for high-consequence manufacturing conversations."
            text="The brand language emphasizes aerospace, defense, space, and regulated manufacturing at a high level without implying customer relationships or publishing sensitive program details."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {industries.map((industry) => (
              <Card key={industry}>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-ash">Industry context</p>
                <h3 className="mt-3 text-2xl font-semibold text-frost">{industry}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-void">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Technology context"
              title="AM decisions have technical, operational, and business consequences."
              text="Matthew's positioning connects platform selection, material behavior, inspection strategy, heat treatment, simulation, automation, and software-defined manufacturing workflows to production outcomes."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {technologies.map((item) => (
                <span key={item} className="border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-silver/72">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-signal">
              Thought leadership topics
            </p>
            <div className="mt-5 grid gap-3">
              {speakingTopics.slice(0, 6).map((topic) => (
                <Link key={topic} href="/speaking-thought-leadership" className="border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-frost transition hover:border-signal/50">
                  {topic}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto max-w-site px-5 py-20">
          <SectionHeader
            eyebrow="Questions organizations ask"
            title="Where Matthew's advisory perspective is most useful."
            text="These are the practical questions companies bring when they need to connect AM technology decisions to business outcomes."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {adviceQuestions.map((question) => (
              <Card key={question}>
                <p className="text-lg font-semibold leading-7 text-frost">{question}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-carbon">
        <div className="mx-auto grid max-w-site gap-10 px-5 py-20 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeader
            eyebrow="Contact"
            title="For advisory, speaking, recruiting, board, or qualification discussions."
            text="Phone is intentionally not displayed publicly. Contact is routed through email, LinkedIn, and a structured inquiry form."
          />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink href="/contact">Contact Matthew</ButtonLink>
            <ButtonLink href={profile.linkedin} variant="secondary">LinkedIn</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
