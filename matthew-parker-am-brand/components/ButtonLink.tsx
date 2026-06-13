import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
};

const variants = {
  primary:
    "bg-signal text-void hover:bg-silver focus-visible:bg-silver",
  secondary:
    "border border-signal/40 text-frost hover:border-signal hover:bg-signal/10 focus-visible:border-signal focus-visible:bg-signal/10",
  quiet:
    "border border-white/10 bg-white/[0.04] text-frost hover:border-signal/50 hover:bg-white/[0.07] focus-visible:border-signal/50"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  const sharedClassName = `inline-flex min-h-12 items-center justify-center rounded-none px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] transition ${variants[variant]} ${className}`;

  if (/^(mailto:|https?:)/.test(href)) {
    return (
      <a href={href} className={sharedClassName}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClassName}>
      {children}
    </Link>
  );
}
