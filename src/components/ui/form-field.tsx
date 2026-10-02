"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
}

export function FormField({
  label,
  hint,
  error,
  required,
  className,
  children,
  ...props
}: FormFieldProps) {
  const id = React.useId();
  // The required marker sits right after the label text.
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {label && (
        <Label htmlFor={id} className="gap-1">
          <span>{label}</span>
          {required && (
            <span aria-hidden className="text-gold-ink">
              *
            </span>
          )}
        </Label>
      )}
      {React.isValidElement(children)
        ? React.cloneElement(children as React.ReactElement<any>, {
            id,
            "aria-invalid": !!error || undefined,
            "aria-describedby": hint ? `${id}-hint` : undefined,
          })
        : children}
      <div className="min-h-1">
        {error ? (
          <p className="text-xs text-destructive">{error}</p>
        ) : hint ? (
          <p id={`${id}-hint`} className="text-xs text-muted-foreground">
            {hint}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default FormField;
