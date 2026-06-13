import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { MediaImage } from "@/components/MediaImage";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { speakingTopics } from "@/lib/data";

export const metadata: Metadata = {
  title: "Speaking & Thought Leadership",
  description:
    "Invite Matthew Parker for speaking, panels, executive briefings, industry commentary, and technical education on metal AM qualification and production readiness.",
  openGraph: {
    title: "Speaking & Thought Leadership | Matthew Parker",
    description:
      "Speaking topics on AM qualification, aerospace and defense production readiness, factory integration, powder lifecycle control, and executive AM investment decisions."
  }
};

const formats = [
  "Conference presentations",
  "Panel discussions",
  "Executive briefings",
  "Industry commentary",
  "Technical education",
  "Media and interview conversations"
];

export default function SpeakingPage() {
  return (
    <>
      <PageHero
        eyebrow="Speaking and thought leadership"
        title="Technical AM leadership communicated for executives, operators, and customers."
        text="Matthew is positioned for speaking opportunities, panel discussions, executive briefings, conference presentations, industry commentary, and technical education."
        primaryHref="/contact"
        primaryLabel="Invite Matthew to Speak"
        secondaryHref="/resources-insights"
        secondaryLabel="Explore Resources"
      />

      <section className="bg-graphite">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <MediaImage
            src="/media/nikon-am-synergy-collage.png"
            alt="Collage from Matthew Parker's time at Nikon AM Synergy"
            aspect="wide"
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
          <div>
            <SectionHeader
              eyebrow="Positioning"
              title="Serious topics for serious AM programs."
              text="The speaking platform is built around operational credibility: how AM programs mature, why qualification matters, and how executives should evaluate AM investment beyond demonstration parts."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {formats.map((format) => (
                <Card key={format}>
                  <p className="font-semibold text-frost">{format}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-void">
        <div className="mx-auto max-w-site px-5 py-20">
          <SectionHeader
            eyebrow="Topic examples"
            title="Thought leadership anchored in qualification and factory reality."
            text="Topics are framed for public discussion and avoid controlled details, customer-sensitive program content, proprietary process parameters, or internal strategy."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {speakingTopics.map((topic) => (
              <Card key={topic}>
                <h3 className="text-2xl font-semibold tracking-[-0.025em] text-frost">{topic}</h3>
                <p className="mt-4 leading-7 text-silver/66">
                  Suitable for a conference talk, panel discussion, executive briefing, or educational session tailored to the audience.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-carbon">
        <div className="mx-auto grid max-w-site gap-10 px-5 py-20 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeader
            eyebrow="Invite Matthew to speak"
            title="Bring a qualification-minded AM perspective to your audience."
            text="Use the contact form for event, media, panel, briefing, or education inquiries."
          />
          <ButtonLink href="/contact">Invite Matthew to Speak</ButtonLink>
        </div>
      </section>
    </>
  );
}
