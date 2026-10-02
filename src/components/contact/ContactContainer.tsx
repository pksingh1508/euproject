"use client";

import * as React from "react";
import { Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { PageHeader } from "@/components/common/PageHeader";
import { FormCard } from "@/components/common/FormCard";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { CONTACT, SOCIAL_LINKS } from "@/constants/site";

interface ContactItem {
  icon: LucideIcon;
  title: string;
  content: string[];
  link?: string;
}

const contactItems: ContactItem[] = [
  {
    icon: MapPin,
    title: "Address",
    content: [
      `Street: ${CONTACT.address.street}`,
      `ZIP code: ${CONTACT.address.zip}`,
      "City: Warszawa, Country: Poland"
    ]
  },
  {
    icon: Phone,
    title: "Call Us",
    content: [CONTACT.phones[0].label],
    link: CONTACT.phones[0].href
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: [CONTACT.whatsapp.label],
    link: CONTACT.whatsapp.href
  },
  {
    icon: Mail,
    title: "Email",
    content: [CONTACT.email.label],
    link: CONTACT.email.href
  }
];

function ContactItemCard({ item }: { item: ContactItem }) {
  const body = (
    <>
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-400 group-hover:bg-primary group-hover:text-primary-foreground">
        <item.icon className="size-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {item.title}
        </p>
        <div className="mt-1.5 space-y-0.5">
          {item.content.map((line) => (
            <p
              key={line}
              className="break-words text-[15px] font-medium text-foreground/90 transition-colors duration-300 group-hover:text-foreground"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </>
  );

  const className =
    "group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-500 ease-premium hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elevated";

  return item.link ? (
    <a href={item.link} className={className}>
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}

export function ContactContainer() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        highlight="Us"
        eyebrow="Get in touch"
        description="Sign up for a free expert consultation"
      />

      <section className="relative py-16 lg:py-24">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Contact information */}
            <div className="order-2 lg:order-1 lg:col-span-5">
              <Reveal>
                <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-[2.1rem]">
                  Reach our <em className="text-primary">Expert Team</em>
                </h2>
              </Reveal>

              <Stagger className="mt-8 space-y-3" stagger={0.08}>
                {contactItems.map((item) => (
                  <StaggerItem key={item.title} blur={false} y={16}>
                    <ContactItemCard item={item} />
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal className="mt-10">
                <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Follow Us
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground/80 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
                    >
                      <Icon className="size-4" strokeWidth={1.75} />
                      {label}
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              <Reveal blur={false} distance={32}>
                <FormCard
                  eyebrow="Free expert consultation"
                  title="Send us a message"
                  description="Fill in the form and our team will get back to you."
                >
                  <ContactForm />
                </FormCard>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
