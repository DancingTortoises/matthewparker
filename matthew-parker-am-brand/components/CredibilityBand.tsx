import { profile } from "@/lib/data";

const items = [
  ["Current role", profile.title],
  ["Company context", profile.company],
  ["Operating base", profile.location],
  ["Brand identity", profile.brandIdentity]
];

export function CredibilityBand() {
  return (
    <section className="border-y border-white/10 bg-graphite">
      <div className="mx-auto grid max-w-site grid-cols-1 divide-y divide-white/10 px-5 md:grid-cols-4 md:divide-x md:divide-y-0">
        {items.map(([label, value]) => (
          <div key={label} className="py-7 md:px-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal/80">{label}</p>
            <p className="mt-3 text-lg font-semibold text-frost">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
