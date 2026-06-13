import Link from "next/link";
import { navItems, profile } from "@/lib/data";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-void/92 backdrop-blur">
        <div className="mx-auto flex min-h-20 max-w-site items-center justify-between gap-6 px-5">
          <Link href="/" className="min-w-0" aria-label="Matthew Parker home">
            <span className="block text-lg font-semibold tracking-[-0.02em] text-frost">
              Matthew Parker
            </span>
            <span className="mt-1 block font-mono text-[0.66rem] uppercase tracking-[0.24em] text-signal">
              Metal AM / Qualification / Scale
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-semibold text-silver/70 transition hover:text-frost focus-visible:text-frost"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={profile.linkedin}
              className="font-mono text-xs uppercase tracking-[0.18em] text-silver/70 underline decoration-signal/50 underline-offset-8 hover:text-frost"
            >
              LinkedIn
            </a>
            <ButtonLink href="/contact">Contact</ButtonLink>
          </div>

          <details className="group relative xl:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-white/10 bg-white/[0.04]">
              <span className="sr-only">Open navigation</span>
              <span className="block h-0.5 w-5 bg-frost shadow-[0_6px_0_current,0_-6px_0_current]" />
            </summary>
            <div className="absolute right-0 top-14 w-[min(90vw,390px)] border border-white/10 bg-void p-4 shadow-panel">
              <nav className="grid gap-1" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border border-transparent px-3 py-3 text-sm font-semibold text-silver/78 hover:border-white/10 hover:text-frost"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 grid gap-2 border-t border-white/10 pt-4">
                <ButtonLink href="/contact" className="w-full">Contact Matthew</ButtonLink>
                <ButtonLink href={profile.linkedin} variant="quiet" className="w-full">LinkedIn</ButtonLink>
              </div>
            </div>
          </details>
        </div>
      </header>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/10 bg-void text-center text-xs font-semibold uppercase tracking-[0.16em] text-frost md:hidden">
        <a className="px-4 py-4" href={profile.emailHref}>Email</a>
        <Link className="bg-signal px-4 py-4 text-void" href="/contact">Contact</Link>
      </div>
    </>
  );
}
