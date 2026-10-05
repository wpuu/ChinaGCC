import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export function SectionCard({
  title,
  extra,
  children,
  className,
  bodyClassName,
}: {
  title: string;
  extra?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-lg border border-slate-800/90 bg-[#0e1520]/90",
        className,
      )}
    >
      <header className="flex items-center justify-between gap-3 border-b border-slate-800 px-3 py-2">
        <h2 className="text-xs font-semibold tracking-wide text-slate-300">
          {title}
        </h2>
        {extra}
      </header>
      <div className={cn("p-3", bodyClassName)}>{children}</div>
    </section>
  );
}

export function EmptyState({ text }: { text: string }) {
  return (
    <div className="px-3 py-8 text-center text-sm text-slate-500">{text}</div>
  );
}
