import { ButtonLink } from "./ButtonLink";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  text,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-void panel-grid">
      <div className="absolute inset-x-0 top-0 h-px metal-line" />
      <div className="mx-auto max-w-site px-5 py-20 md:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">{eyebrow}</p>
        <h1 className="mt-5 max-w-5xl text-balance font-display text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-frost md:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-silver/72 md:text-xl md:leading-9">
          {text}
        </p>
        {(primaryHref && primaryLabel) || (secondaryHref && secondaryLabel) ? (
          <div className="mt-9 flex flex-wrap gap-3">
            {primaryHref && primaryLabel ? (
              <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <ButtonLink href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
