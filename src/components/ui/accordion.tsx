"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-[border-color,box-shadow] duration-300 hover:border-primary/25 data-[state=open]:border-primary/30 data-[state=open]:shadow-elevated",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-foreground/85 outline-none transition-colors duration-300 hover:text-foreground focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-ring/15 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-foreground",
          className
        )}
        {...props}
      >
        {children}
        <span
          aria-hidden
          className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-400 ease-premium group-data-[state=open]:rotate-180 group-data-[state=open]:border-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground"
        >
          <ChevronDownIcon className="size-4" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm duration-400 ease-premium data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div
        className={cn(
          "px-5 pb-5 leading-relaxed text-muted-foreground",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
