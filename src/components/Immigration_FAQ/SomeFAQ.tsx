"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import { FAQS } from "@/constants/data";
import { fontPoppins } from "@/fonts";

export function SomeFAQ() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <h2
              className={`text-xl font-bold text-blue-400 ${fontPoppins.className}`}
            >
              FAQ
            </h2>
            <div className="w-9 h-1 bg-blue-400 rounded-2xl mb-4 md:mb-6" />
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-0">
            <Accordion type="single" className="w-full space-y-2">
              {FAQS.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={item.question}
                  className="border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <AccordionTrigger
                    className={`text-left text-gray-600 text-base ${fontPoppins.className}`}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className={`text-sm ${fontPoppins.className}`}
                  >
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
