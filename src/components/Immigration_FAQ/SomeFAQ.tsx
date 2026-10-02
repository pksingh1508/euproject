"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import { FAQS } from "@/constants/data";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function SomeFAQ() {
  return (
    <div>
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        highlight="Questions"
        size="md"
      />

      <Accordion type="single" collapsible className="mt-10">
        <Stagger className="space-y-3" stagger={0.05}>
          {FAQS.map((item) => (
            <StaggerItem key={item.question} blur={false} y={14}>
              <AccordionItem value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </StaggerItem>
          ))}
        </Stagger>
      </Accordion>
    </div>
  );
}
