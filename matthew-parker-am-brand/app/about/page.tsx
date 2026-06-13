import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { MediaImage } from "@/components/MediaImage";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import {
  accomplishments,
  credibilitySignals,
  differentiators,
  longBio,
  profile,
  shortBio
} from "@/lib/data";

export const metadata: Metadata = {
  title: "About Matthew Parker",
  description:
    "Executive profile for Matthew Parker, Vice President of Additive Manufacturing at Hadrian and metal AM qualification and production readiness leader.",
  openGraph: {
    title: "About Matthew Parker",
    description:
      "A refined executive profile focused on metal additive manufacturing qualification, production scaling, quality systems, and regulated manufacturing."
  }
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Executive profile"
        title="An AM executive focused on practical deployment, qualification, and scale."
        text="Matthew Parker's perspective sits at the intersection of engineering leadership, manufacturing operations, production readiness, quality systems, customer confidence, and executive decision-making."
        primaryHref="/contact"
        primaryLabel="Contact Matthew"
        secondaryHref="/expertise"
        secondaryLabel="Explore Expertise"
      />

      <section className="bg-graphite">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <MediaImage
            src="/media/matthewparker-headshot.jpeg"
            alt="Matthew Parker professional headshot"
            aspect="portrait"
            priority
          />
          <div>
            <SectionHeader
              eyebrow="Professional biography"
              title="Technical leadership shaped by regulated production realities."
            />
            <div className="mt-8 space-y-6 text-lg leading-8 text-silver/72">
              <p>{shortBio}</p>
              <p>{longBio}</p>
            </div>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <Card>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">Current role</p>
                <p className="mt-3 text-xl font-semibold text-frost">{profile.currentRoleSummary}</p>
              </Card>
              <Card>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">Prior leadership</p>
                <p className="mt-3 text-xl font-semibold text-frost">Engineering and operations leadership at Nikon AM Synergy</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-void">
        <div className="mx-auto max-w-site px-5 py-20">
          <SectionHeader
            eyebrow="Positioning"
            title="Why qualification matters."
            text="Additive manufacturing becomes strategically meaningful when it can survive customer scrutiny, auditor expectations, production constraints, and the economics of real factory operations."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Prototype success is not enough",
                text: "A successful build does not prove repeatability, traceability, inspection readiness, post-processing control, or customer confidence."
              },
              {
                title: "Qualification is evidence",
                text: "Qualified production requires disciplined documentation, aligned quality systems, controlled materials, machine readiness, and defensible inspection strategy."
              },
              {
                title: "Scale is an operating system",
                text: "Rate and credibility depend on people, equipment, software, facilities, quality, data, and executive decision-making working together."
              }
            ].map((item) => (
              <Card key={item.title}>
                <h3 className="text-2xl font-semibold tracking-[-0.025em] text-frost">{item.title}</h3>
                <p className="mt-4 leading-7 text-silver/66">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-carbon">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeader
            eyebrow="What is different"
            title="Technical, strategic, practical."
            text="Matthew's positioning is executive-level AM leadership grounded in qualification, factory scaling, and regulated manufacturing."
          />
          <div className="grid gap-4">
            {differentiators.map((item) => (
              <Card key={item.title}>
                <h3 className="text-2xl font-semibold tracking-[-0.025em] text-frost">{item.title}</h3>
                <p className="mt-4 leading-7 text-silver/66">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeader
            eyebrow="Work he is proud of"
            title="Scaling advanced manufacturing from technical capability to production maturity."
            text="The website now uses Matthew's wording around the accomplishments and operating perspective that should remain memorable after a visit."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {accomplishments.map((item) => (
              <Card key={item}>
                <p className="text-lg font-semibold leading-7 text-frost">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-carbon">
        <div className="mx-auto max-w-site px-5 py-20">
          <SectionHeader
            eyebrow="Credibility indicators"
            title="The role, background, and standards context behind the positioning."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {credibilitySignals.map((signal) => (
              <Card key={signal}>
                <p className="text-lg font-semibold leading-7 text-frost">{signal}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-void">
        <div className="mx-auto grid max-w-site gap-10 px-5 py-20 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeader
            eyebrow="Next step"
            title="Start with the production problem, not the machine brochure."
            text="For advisory, speaking, recruiting, board, or AM qualification discussions, use the contact page."
          />
          <ButtonLink href="/contact">Contact Matthew</ButtonLink>
        </div>
      </section>
    </>
  );
}
