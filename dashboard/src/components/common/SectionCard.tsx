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
        "rounded-xl border border-slate-800/90 bg-[#0e1520]/90",
        className,
      )}
    >
      <header className="flex items-center justify-between gap-3 border-b border-slate-800 px-4 py-3 md:px-3 md:py-2">
        <h2 className="text-sm font-semibold tracking-wide text-slate-200 md:text-xs md:text-slate-300">
          {title}
        </h2>
        {extra}
      </header>
      <div className={cn("p-4 md:p-3", bodyClassName)}>{children}</div>
    </section>
  );
}

export function EmptyState({ text }: { text: string }) {
  return (
    <div className="px-3 py-8 text-center text-sm text-slate-500">{text}</div>
  );
}
