import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="bg-void panel-grid">
      <div className="mx-auto max-w-site px-5 py-28">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">404</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-frost md:text-7xl">
          This page is not available.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-silver/70">
          Return to the homepage or contact Matthew for an AM qualification, production readiness, speaking, or advisory discussion.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/">Return Home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">Contact</ButtonLink>
        </div>
      </div>
    </section>
  );
}
