import type { Metadata } from "next";
import { ExpertiseCard } from "@/components/ExpertiseCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { standards, technologies, expertiseCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Metal AM Expertise",
  description:
    "Explore Matthew Parker's expertise in metal additive manufacturing qualification, production readiness, quality systems, powder lifecycle control, inspection, and AM factory scaling.",
  openGraph: {
    title: "Matthew Parker | Metal AM Expertise",
    description:
      "Technical and executive expertise across AM qualification, production readiness, quality systems, process development, inspection strategy, and factory scaling."
  }
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title="Metal AM expertise built around qualification, production readiness, and operational scale."
        text="The site organizes Matthew's expertise around the practical questions organizations must answer before AM can become a credible production capability."
        primaryHref="/contact"
        primaryLabel="Start a Conversation"
        secondaryHref="/qualification-production-readiness"
        secondaryLabel="Qualification Page"
      />

      <section className="bg-void">
        <div className="mx-auto max-w-site px-5 py-20">
          <SectionHeader
            eyebrow="Structured expertise"
            title="Ten categories tied to practical outcomes."
            text="Each category connects technical understanding to why it matters and what outcome organizations should expect."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {expertiseCategories.map((item) => (
              <ExpertiseCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-carbon">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Standards and quality familiarity"
              title="Quality-system language that production customers recognize."
              text="These references are presented as familiarity and strategic context, not as proprietary qualification instructions or personal certification claims."
            />
            <div className="mt-8 grid gap-3">
              {standards.map((item) => (
                <div key={item} className="border border-white/10 bg-white/[0.04] px-5 py-4 font-semibold text-frost">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Technology context"
              title="Platform decisions must map to production realities."
              text="The relevant question is not whether a process is impressive. It is whether the technology can support requirements, evidence, cost, rate, and customer confidence."
            />
            <div className="mt-8 grid gap-3">
              {technologies.map((item) => (
                <div key={item} className="border border-white/10 bg-white/[0.04] px-5 py-4 font-semibold text-frost">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
