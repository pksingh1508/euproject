import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Heart } from "lucide-react";
import { formatDate, type BlogSummary } from "@/lib/content";

interface SingleBlogProps {
  post: BlogSummary;
}

export function SingleBlog({ post }: SingleBlogProps) {
  const href = `/blog/${post.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-primary/25 hover:shadow-elevated">
      {/* Image */}
      <Link
        href={href}
        className="relative block aspect-[16/10] overflow-hidden bg-muted"
        tabIndex={-1}
        aria-hidden
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-card/85 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
          <Calendar className="size-3.5" strokeWidth={1.75} />
          {formatDate(post.publishedAt)}
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <Link href={href}>
          <h3 className="line-clamp-2 font-display text-[1.3rem] font-medium leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
            {post.title}
          </h3>
        </Link>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between border-t border-border/70 pt-5 text-sm">
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 font-medium text-primary"
            >
              Read More
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Heart className="size-4 fill-flag-red/80 text-flag-red" strokeWidth={1.5} />
              {post.likes}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
