import React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  review: string;
}

export function SingleTestimonial({ name, role, image, review }: TestimonialProps) {
  return (
    <figure className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-primary/25 hover:shadow-elevated">
      <Quote
        aria-hidden
        className="absolute right-6 top-6 size-10 text-primary/10 transition-colors duration-500 group-hover:text-primary/20"
        strokeWidth={1.25}
      />

      <div className="flex gap-0.5 text-gold" aria-label="Rated 5 out of 5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="size-4 fill-current" strokeWidth={0} />
        ))}
      </div>

      <blockquote className="mt-5 flex-1 font-display text-[1.15rem] leading-relaxed text-foreground/85">
        “{review}”
      </blockquote>

      <figcaption className="mt-7 flex items-center gap-3.5 border-t border-border/70 pt-5">
        <div className="relative size-11 shrink-0 overflow-hidden rounded-full ring-2 ring-background shadow-soft">
          <Image src={image} alt={name} fill sizes="44px" className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
