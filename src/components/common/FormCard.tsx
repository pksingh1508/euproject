import * as React from "react";
import { cn } from "@/lib/utils";

interface FormCardProps {
  eyebrow?: string;
  title?: string;
  description?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

/** Elevated surface that frames the enquiry forms across the site. */
export function FormCard({
  eyebrow,
  title,
  description,
  className,
  children
}: FormCardProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-floating sm:p-8",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/70 to-gold"
      />
      <div
        aria-hidden
        className="absolute -right-24 -top-24 -z-10 size-64 rounded-full bg-primary/10 blur-3xl"
      />

      {(eyebrow || title || description) && (
        <div className="mb-7">
          {eyebrow && (
            <p className="mb-3 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold-ink">
              <span aria-hidden className="h-px w-6 bg-current opacity-60" />
              {eyebrow}
            </p>
          )}
          {title && (
            <h3 className="font-display text-2xl font-medium leading-tight tracking-[-0.015em] text-foreground">
              {title}
            </h3>
          )}
          {description && (
            <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </div>
          )}
        </div>
      )}

      {children}
    </div>
  );
}

export default FormCard;
