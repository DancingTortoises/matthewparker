import { Card } from "./Card";

type ExpertiseCardProps = {
  title: string;
  explanation: string;
  matters: string;
  outcome: string;
};

export function ExpertiseCard({ title, explanation, matters, outcome }: ExpertiseCardProps) {
  return (
    <Card className="flex min-h-[360px] flex-col">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">Expertise</p>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-frost">{title}</h3>
      <p className="mt-4 leading-7 text-silver/68">{explanation}</p>
      <div className="mt-6 grid gap-4 border-t border-white/10 pt-6">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ash">Why it matters</p>
          <p className="mt-2 text-sm leading-6 text-silver/62">{matters}</p>
        </div>
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ash">Practical outcome</p>
          <p className="mt-2 text-sm leading-6 text-silver/62">{outcome}</p>
        </div>
      </div>
    </Card>
  );
}
