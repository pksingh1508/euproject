"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from "framer-motion";
import { ArrowUpRight, BadgeCheck, Phone } from "lucide-react";
import { NAVBAR_LINKS } from "@/constants/data";
import { CONTACT, SOCIAL_LINKS } from "@/constants/site";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EASE_OUT, SPRING_SOFT, staggerContainer } from "@/lib/motion";

const drawerItem = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE_OUT } }
};

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hovered, setHovered] = React.useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setIsScrolled(y > 48));

  // Close the mobile drawer on navigation and on Escape.
  React.useEffect(() => setIsOpen(false), [pathname]);
  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "/home";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const activeHref =
    NAVBAR_LINKS.map((l) => `/${l.href}`).find((href) => isActive(href)) ??
    null;
  const pillHref = hovered ?? activeHref;

  return (
    <>
      {/* Utility bar — scrolls away with the page */}
      <div className="relative z-40 bg-navy text-navy-foreground">
        <div className="page-container flex items-center justify-center gap-4 py-2 text-[12.5px] sm:justify-between">
          <div className="flex items-center gap-4 text-navy-muted">
            {CONTACT.phones.map((phone, i) => (
              <React.Fragment key={phone.href}>
                {i > 0 && <span aria-hidden className="h-3 w-px bg-white/15" />}
                <a
                  href={phone.href}
                  className="inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-navy-foreground"
                >
                  <Phone className="size-3.5" strokeWidth={1.75} />
                  {phone.label}
                </a>
              </React.Fragment>
            ))}
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <div className="flex items-center gap-0.5">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-7 items-center justify-center rounded-full text-navy-muted transition-colors duration-300 hover:bg-white/10 hover:text-navy-foreground"
                >
                  <Icon className="size-3.5" strokeWidth={1.75} />
                </a>
              ))}
            </div>
            <span aria-hidden className="h-4 w-px bg-white/15" />
            <Link
              href="/company-certificate"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[12px] font-medium transition-colors duration-300",
                isActive("/company-certificate")
                  ? "bg-navy-foreground text-navy"
                  : "bg-white/[0.07] text-navy-foreground/90 hover:bg-white/[0.14]"
              )}
            >
              <BadgeCheck className="size-3.5" strokeWidth={1.75} />
              Certificate
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar — sticky, turns to frosted glass on scroll */}
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ease-premium",
          isScrolled || isOpen
            ? "border-border/70 bg-background/80 shadow-soft backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-background"
        )}
      >
        <div className="page-container flex h-[72px] items-center justify-between gap-6 lg:h-20">
          <Link
            href="/"
            aria-label="EU Prime Serwis — home"
            className="shrink-0 transition-opacity duration-300 hover:opacity-90"
          >
            <Image
              src="/mylogo.png"
              alt="EU Prime Serwis"
              width={207}
              height={100}
              priority
              className="h-11 w-auto lg:h-12"
            />
          </Link>

          <nav
            aria-label="Main"
            className="hidden items-center gap-0.5 xl:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {NAVBAR_LINKS.map((item) => {
              const href = `/${item.href}`;
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onMouseEnter={() => setHovered(href)}
                  onFocus={() => setHovered(href)}
                  onBlur={() => setHovered(null)}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors duration-300",
                    active ? "text-primary" : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {pillHref === href && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={SPRING_SOFT}
                      className={cn(
                        "absolute inset-0 rounded-full",
                        active && !hovered ? "bg-primary/10" : "bg-accent"
                      )}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/book"
              className={cn(
                buttonVariants({ size: "sm" }),
                "hidden sm:inline-flex",
                isActive("/book") && "ring-4 ring-primary/15"
              )}
            >
              Book Appointment
            </Link>
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card/70 text-foreground/80 transition-colors duration-300 hover:text-foreground xl:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className="relative block h-2.5 w-[18px]">
                <motion.span
                  className="absolute inset-x-0 top-0 h-[1.5px] rounded-full bg-current"
                  animate={isOpen ? { y: 4.25, rotate: 45 } : { y: 0, rotate: 0 }}
                  transition={{ duration: 0.35, ease: EASE_OUT }}
                />
                <motion.span
                  className="absolute inset-x-0 bottom-0 h-[1.5px] rounded-full bg-current"
                  animate={isOpen ? { y: -4.25, rotate: -45 } : { y: 0, rotate: 0 }}
                  transition={{ duration: 0.35, ease: EASE_OUT }}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE_OUT }}
              className="overflow-hidden border-t border-border/70 xl:hidden"
            >
              <motion.nav
                aria-label="Mobile"
                data-lenis-prevent
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={staggerContainer(0.04, 0.06)}
                className="page-container flex max-h-[calc(100svh-7rem)] flex-col gap-1 overflow-y-auto py-5"
              >
                {NAVBAR_LINKS.map((item) => {
                  const href = `/${item.href}`;
                  const active = isActive(href);
                  return (
                    <motion.div key={href} variants={drawerItem}>
                      <Link
                        href={href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-colors duration-300",
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/80 hover:bg-accent hover:text-foreground"
                        )}
                      >
                        {item.label}
                        <ArrowUpRight className="size-4 opacity-40" strokeWidth={1.75} />
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  variants={drawerItem}
                  className="mt-3 grid grid-cols-1 gap-2 border-t border-border/70 pt-4 sm:grid-cols-2"
                >
                  <Link
                    href="/book"
                    onClick={() => setIsOpen(false)}
                    className={cn(buttonVariants(), "sm:hidden")}
                  >
                    Book Appointment
                  </Link>
                  <Link
                    href="/company-certificate"
                    onClick={() => setIsOpen(false)}
                    className={buttonVariants({ variant: "outline" })}
                  >
                    <BadgeCheck strokeWidth={1.75} />
                    Company Certificate
                  </Link>
                </motion.div>

                <motion.div variants={drawerItem} className="mt-3 flex items-center gap-2 px-1">
                  {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-primary/30 hover:text-primary"
                    >
                      <Icon className="size-4" strokeWidth={1.75} />
                    </a>
                  ))}
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
