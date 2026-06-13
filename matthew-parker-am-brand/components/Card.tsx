import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`border border-white/10 bg-white/[0.035] p-6 shadow-panel ${className}`}>
      {children}
    </div>
  );
}
