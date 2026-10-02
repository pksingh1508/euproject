"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarClock,
  Clock,
  MessageCircle,
  UserRound,
  Video,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/common/PageHeader";
import { SectionHeading } from "@/components/common/SectionHeading";
import RotatingCircle from "@/components/common/RotatingCircle";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { EASE_OUT } from "@/lib/motion";

const infoBoxes = [
  {
    icon: UserRound,
    title: "Job Seekers Advisory – International Clients",
    text: "We provide professional one-on-one advisory sessions for job seekers looking to work in Poland and across Europe. Our guidance is tailored to your needs, helping you understand opportunities, recruitment procedures, and the best steps for your career journey."
  },
  {
    icon: Briefcase,
    title: "Recruitment Advisory Services for B2B Clients",
    text: "We support international companies in meeting their workforce needs through professional recruitment advisory sessions. Our services are designed to help businesses understand the European labor market, compliance requirements, and effective hiring strategies."
  }
];

const meetings = [
  {
    name: "In-Person Consultation at Our Office",
    duration: "30",
    price: "100",
    icon: Building2
  },
  {
    name: "Online Consultation via Zoom",
    duration: "30",
    price: "100",
    icon: Video
  },
  {
    name: "Quick Consultation via WhatsApp",
    duration: "15",
    price: "80",
    icon: MessageCircle
  }
];

const groups = [
  { key: "job-seeker", title: "Job Seeker Advisory" },
  { key: "recruitment", title: "Recruitment Advisory" }
];

export function BookAppointment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lenis = useLenis();
  const dialogRef = useRef<HTMLDivElement>(null);

  // Pause smooth scrolling + allow Escape while the dialog is open.
  useEffect(() => {
    if (!isModalOpen) return;
    lenis?.stop();
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsModalOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [isModalOpen, lenis]);

  return (
    <div className="pb-16">
      <PageHeader
        title="Book an Appointment"
        highlight="Appointment"
        eyebrow="Consultations"
        crumb="Book Appointment"
        description="Schedule a consultation with our experts"
      />

      {/* Advisory overview */}
      <section className="py-16 lg:py-20">
        <div className="page-container">
          <Stagger className="grid grid-cols-1 gap-6 lg:grid-cols-2" stagger={0.12}>
            {infoBoxes.map((box) => (
              <StaggerItem key={box.title} className="h-full">
                <article className="group relative isolate h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 ease-premium hover:border-primary/25 hover:shadow-elevated sm:p-10">
                  <div
                    aria-hidden
                    className="absolute -right-20 -top-20 -z-10 size-56 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  />
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <box.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-medium leading-snug tracking-[-0.015em] text-foreground sm:text-[1.75rem]">
                    {box.title}
                  </h2>
                  <p className="mt-4 text-[15.5px] leading-[1.85] text-muted-foreground">
                    {box.text}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <RotatingCircle />

      {/* Meeting booking cards */}
      <section className="py-16 lg:py-20">
        <div className="page-container grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          {groups.map((group) => (
            <div key={group.key}>
              <SectionHeading
                align="center"
                title={group.title}
                highlight="Advisory"
                size="md"
              />

              <Stagger className="mt-10 space-y-4" stagger={0.1}>
                {meetings.map((meeting) => (
                  <StaggerItem key={`${group.key}-${meeting.name}`} blur={false} y={18}>
                    <div className="group flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-500 ease-premium hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elevated sm:flex-row sm:items-center">
                      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-400 group-hover:bg-primary group-hover:text-primary-foreground">
                        <meeting.icon className="size-5" strokeWidth={1.75} />
                      </span>

                      <div className="flex-1">
                        <h3 className="text-base font-semibold leading-snug text-foreground sm:text-[17px]">
                          {meeting.name}
                        </h3>
                        <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Clock className="size-4" strokeWidth={1.75} />
                          {meeting.duration} minutes
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-5 border-t border-border/70 pt-4 sm:flex-col sm:items-end sm:gap-2 sm:border-t-0 sm:pt-0">
                        <span className="font-display text-3xl font-medium tabular-nums text-foreground">
                          €{meeting.price}
                        </span>
                        <Button
                          type="button"
                          size="sm"
                          variant="brandOutline"
                          onClick={() => setIsModalOpen(true)}
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </section>

      {/* Booking dialog */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-[oklch(0.18_0.03_262/0.6)] backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="booking-dialog-title"
              tabIndex={-1}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.45, ease: EASE_OUT }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-popover p-7 shadow-floating outline-none sm:p-8"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/70 to-gold"
              />
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close"
                className="absolute right-5 top-5 inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <X className="size-4" />
              </button>

              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <CalendarClock className="size-5" strokeWidth={1.75} />
              </span>
              <h2
                id="booking-dialog-title"
                className="mt-5 font-display text-2xl font-medium tracking-[-0.015em] text-foreground"
              >
                Booking Update
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
                Hello sir, we are working on this feature, you can go to contact
                us page and fill the form. Our team will contact you in 4 - 6
                working days.
              </p>
              <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </Button>
                <Button asChild className="group">
                  <Link href="/contact">
                    Go to Contact Us
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
