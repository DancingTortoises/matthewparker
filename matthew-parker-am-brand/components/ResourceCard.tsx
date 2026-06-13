import { Card } from "./Card";

type ResourceCardProps = {
  type: string;
  title: string;
  description: string;
};

export function ResourceCard({ type, title, description }: ResourceCardProps) {
  return (
    <Card className="min-h-[260px]">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">{type}</p>
      <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.025em] text-frost">
        {title}
      </h3>
      <p className="mt-4 leading-7 text-silver/66">{description}</p>
      <p className="mt-7 font-mono text-xs uppercase tracking-[0.2em] text-ash">
        Public insight theme
      </p>
    </Card>
  );
}
