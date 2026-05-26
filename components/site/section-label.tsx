import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground",
        className,
      )}
    >
      <span className="h-px w-6 bg-terracotta" aria-hidden="true" />
      {children}
    </p>
  );
}
