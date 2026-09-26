import type { Status } from "@/lib/projects";

const label: Record<Status, string> = {
  live: "Live",
  built: "Built",
  "in-development": "In development",
  prototype: "Prototype",
};

const tone: Record<Status, string> = {
  live: "text-success border-success/40",
  built: "text-foreground/80 border-border",
  "in-development": "text-accent border-accent/40",
  prototype: "text-muted border-border",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 font-mono-tight text-[10px] uppercase ${tone[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {label[status]}
    </span>
  );
}

export const statusLabel = label;
