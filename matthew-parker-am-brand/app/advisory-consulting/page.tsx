import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { advisoryAreas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Advisory & Consulting",
  description:
    "Selected advisory conversations with Matthew Parker around additive manufacturing qualification, aerospace and defense AM strategy, machine qualification, AM operations scaling, quality systems, factory integration, and platform strategy.",
  openGraph: {
    title: "Advisory & Consulting | Matthew Parker",
    description:
      "Selective advisory positioning for metal AM qualification, production readiness, quality systems, factory scaling, and executive AM strategy."
  }
};

export default function AdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Advisory and consulting"
        title="Selected advisory conversations for organizations serious about metal AM production readiness."
        text="Matthew may be available for selected advisory, consulting, board, leadership, and strategic conversations related to AM qualification, production readiness, factory scaling, and executive AM investment decisions."
        primaryHref="/contact"
        primaryLabel="Start a Conversation"
        secondaryHref="/qualification-production-readiness"
        secondaryLabel="Qualification Focus"
      />

      <section className="bg-void">
        <div className="mx-auto max-w-site px-5 py-20">
          <SectionHeader
            eyebrow="Advisory focus"
            title="Where Matthew's perspective can help."
            text="The advisory positioning stays selective and does not overstate availability. Any work must respect professional obligations, confidentiality requirements, and conflict-of-interest review."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {advisoryAreas.map((area) => (
              <Card key={area}>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">
                  Advisory area
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-frost">
                  {area}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-carbon">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-[0.92fr_1.08fr]">
          <SectionHeader
            eyebrow="Engagement filter"
            title="The right discussion starts with business reality and production risk."
            text="Good advisory work identifies whether an AM initiative has the right technology, evidence plan, operating model, customer alignment, and leadership expectations."
          />
          <div className="grid gap-4">
            {[
              "What problem is AM expected to solve?",
              "What evidence will customers, auditors, and leadership need?",
              "Which platform decisions affect cost, rate, quality, and qualification risk?",
              "What does the organization need before moving from prototype to production?"
            ].map((question) => (
              <Card key={question}>
                <p className="text-xl font-semibold text-frost">{question}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto grid max-w-site gap-10 px-5 py-20 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Selective availability"
              title="Start with a concise, non-confidential inquiry."
              text="Advisory work is considered selectively and subject to professional obligations, confidentiality requirements, and conflict-of-interest review."
            />
          </div>
          <ButtonLink href="/contact">Start a Conversation</ButtonLink>
        </div>
      </section>
    </>
  );
}
