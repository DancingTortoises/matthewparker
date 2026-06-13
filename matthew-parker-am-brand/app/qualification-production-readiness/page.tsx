import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { complianceBoundaries, readinessTopics, standards } from "@/lib/data";

export const metadata: Metadata = {
  title: "AM Qualification & Production Readiness",
  description:
    "Strategic guidance on metal additive manufacturing qualification, AM production readiness, AS9100 alignment, NADCAP-level expectations, AMS7031 powder reuse, AMS7032 machine qualification, and AWS D20.1.",
  openGraph: {
    title: "AM Qualification & Production Readiness | Matthew Parker",
    description:
      "The difference between printing successful prototypes and building qualified metal AM production capability."
  }
};

const comparison = [
  {
    title: "Printing successful prototypes",
    points: [
      "Demonstrates technical possibility",
      "Often relies on expert judgment and controlled attention",
      "May not prove repeatability across operators, machines, powder lots, or production schedules",
      "Can underrepresent inspection, traceability, post-processing, and customer evidence needs"
    ]
  },
  {
    title: "Building qualified production capability",
    points: [
      "Requires controlled machines, materials, documentation, and inspection strategy",
      "Aligns process evidence with customer, auditor, quality, and rate expectations",
      "Connects powder lifecycle, heat treatment, post-processing, and testing to production risk",
      "Creates a system that leadership can trust and customers can evaluate"
    ]
  }
];

export default function QualificationPage() {
  return (
    <>
      <PageHero
        eyebrow="Qualification and production readiness"
        title="The hard part is not printing the first part. It is proving the manufacturing system."
        text="For serious aerospace, defense, space, and regulated manufacturing environments, metal AM must become auditable, repeatable, traceable, and aligned with customer confidence."
        primaryHref="/contact"
        primaryLabel="Discuss Readiness"
        secondaryHref="/expertise"
        secondaryLabel="Explore Expertise"
      />

      <section className="bg-graphite">
        <div className="mx-auto grid max-w-site gap-8 px-5 py-20 lg:grid-cols-2">
          {comparison.map((item) => (
            <Card key={item.title}>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-frost">{item.title}</h2>
              <ul className="mt-6 grid gap-4">
                {item.points.map((point) => (
                  <li key={point} className="border-l border-signal/40 pl-4 leading-7 text-silver/68">
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-void">
        <div className="mx-auto max-w-site px-5 py-20">
          <SectionHeader
            eyebrow="Readiness system"
            title="Production readiness is a connected evidence system."
            text="This content stays at a strategic level. It intentionally avoids proprietary technical instructions, process parameters, customer programs, and controlled qualification data."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {readinessTopics.map((topic) => (
              <Card key={topic}>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">
                  Readiness element
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-frost">{topic}</h3>
                <p className="mt-4 leading-7 text-silver/66">
                  The production question is whether this element is defined, controlled, documented, and aligned with customer and quality expectations.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-carbon">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-[0.86fr_1.14fr]">
          <SectionHeader
            eyebrow="Standards context"
            title="Quality-system alignment must be visible before production pressure arrives."
            text="The purpose is not to publish qualification procedures. The purpose is to frame the evidence, discipline, and readiness questions leadership teams must ask."
          />
          <div className="grid gap-4">
            {standards.map((standard) => (
              <Card key={standard}>
                <h3 className="text-xl font-semibold text-frost">{standard}</h3>
                <p className="mt-3 leading-7 text-silver/66">
                  Relevant as a strategic reference point for production credibility, customer confidence, and readiness conversations.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Customer and auditor readiness"
              title="Credibility is built before the audit, not during it."
              text="AM programs need clear answers for machine readiness, material control, powder lifecycle logic, process documentation, traceability, inspection strategy, heat treatment validation, post-processing controls, and quality-system integration."
            />
            <div className="mt-8 space-y-5 text-lg leading-8 text-silver/70">
              <p>
                Customer and auditor readiness is not a document exercise alone. It reflects whether the organization can explain how the AM production system works, where risk is controlled, what evidence exists, and how decisions are governed.
              </p>
              <p>
                For executive teams, this means AM investment decisions should be evaluated against the readiness of the entire manufacturing system, not just machine capacity or headline part performance.
              </p>
            </div>
          </div>
          <Card>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-signal">
              Compliance boundaries
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-frost">
              What this site will not publish.
            </h3>
            <ul className="mt-6 grid gap-3">
              {complianceBoundaries.map((boundary) => (
                <li key={boundary} className="border-l border-copper/60 pl-4 text-sm leading-6 text-silver/68">
                  {boundary}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="bg-void">
        <div className="mx-auto grid max-w-site gap-10 px-5 py-20 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeader
            eyebrow="Production-readiness conversation"
            title="Discuss AM capability through the lens of qualification, evidence, and scale."
            text="For advisory, speaking, or leadership conversations around AM production readiness, use the contact page."
          />
          <ButtonLink href="/contact">Start a Conversation</ButtonLink>
        </div>
      </section>
    </>
  );
}
