export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-mono-tight text-xs text-accent">{index}</span>
      <span className="h-px w-8 bg-border" aria-hidden="true" />
      <span className="font-mono-tight text-xs uppercase text-muted">{title}</span>
    </div>
  );
}
