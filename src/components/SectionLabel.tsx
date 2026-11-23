export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="label-mono text-primary/70">{num}</span>
      <span className="h-px w-10 bg-border" />
      <span className="label-mono text-muted-foreground">{label}</span>
    </div>
  );
}
