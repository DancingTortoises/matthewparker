import Link from "next/link";
import { navItems, profile } from "@/lib/data";
import { ButtonLink } from "./ButtonLink";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-void pb-16 md:pb-0">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-16 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">
            Personal professional brand
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-frost md:text-6xl">
            Qualification-minded AM leadership for serious production environments.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <ButtonLink href="/contact">Contact Matthew</ButtonLink>
          <ButtonLink href={profile.linkedin} variant="secondary">LinkedIn</ButtonLink>
        </div>
      </div>

      <div className="mx-auto grid max-w-site gap-10 border-t border-white/10 px-5 py-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <p className="text-xl font-semibold text-frost">{profile.name}</p>
          <p className="mt-4 max-w-xl leading-7 text-silver/62">
            Metal AM qualification, production readiness, and factory-scaling leadership for serious production environments.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">Navigation</p>
          <ul className="mt-4 grid gap-2 text-sm text-silver/62">
            {navItems.slice(0, 5).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-frost">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">Contact</p>
          <ul className="mt-4 grid gap-2 text-sm text-silver/62">
            <li><a className="hover:text-frost" href={profile.emailHref}>{profile.email}</a></li>
            <li><a className="hover:text-frost" href={profile.linkedin}>LinkedIn profile</a></li>
            <li>No public phone number displayed.</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-site flex-col gap-3 border-t border-white/10 px-5 py-6 text-xs text-silver/42 md:flex-row md:justify-between">
        <p>Copyright 2026 Matthew Parker. All rights reserved.</p>
        <p>{profile.publicRoleNote} Company references are contextual. No confidential, proprietary, ITAR-controlled, CUI, or customer-sensitive information is published.</p>
      </div>
    </footer>
  );
}
