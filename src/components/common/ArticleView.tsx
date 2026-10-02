"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import {
  AlertCircle,
  ArrowLeft,
  FolderOpen,
  Share2,
  Tag,
  type LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { cn } from "@/lib/utils";

export interface ArticleMeta {
  icon: LucideIcon;
  label: string;
  iconClassName?: string;
}

interface ArticleViewProps {
  title: string;
  contents: string;
  image?: string | null;
  category?: string;
  tags: string[];
  meta: ArticleMeta[];
  backHref: string;
  backLabel: string;
  shareLabel: string;
  onShare: () => void;
}

function ArticleBackdrop() {
  return (
    <>
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-fade-radial" />
      <div
        aria-hidden
        className="absolute left-1/2 top-[-30%] -z-10 h-[420px] w-[min(900px,100%)] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />
    </>
  );
}

/** Long-form article layout shared by blog posts and news articles. */
export function ArticleView({
  title,
  contents,
  image,
  category,
  tags,
  meta,
  backHref,
  backLabel,
  shareLabel,
  onShare
}: ArticleViewProps) {
  return (
    <article className="pb-20">
      {/* Header */}
      <header className="relative isolate overflow-hidden border-b border-border/60">
        <ArticleBackdrop />
        <div className="page-container py-14 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal blur={false} distance={8}>
              <Link
                href={backHref}
                className="group mb-8 inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
                {backLabel}
              </Link>
            </Reveal>

            {(category || tags.length > 0) && (
              <Reveal blur={false} distance={10} className="mb-6 flex flex-wrap items-center justify-center gap-2">
                {category && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <FolderOpen className="size-3.5" strokeWidth={1.75} />
                    {category}
                  </span>
                )}
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-ink"
                  >
                    <Tag className="size-3" strokeWidth={1.75} />
                    {tag}
                  </span>
                ))}
              </Reveal>
            )}

            <TextReveal
              as="h1"
              text={title}
              stagger={0.04}
              className="font-display text-[2.2rem] font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-[3.4rem]"
            />

            <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {meta.map(({ icon: Icon, label, iconClassName }) => (
                <span key={label} className="inline-flex items-center gap-2">
                  <Icon className={cn("size-4", iconClassName)} strokeWidth={1.75} />
                  {label}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </header>

      <div className="page-container">
        {/* Featured image */}
        {image && (
          <Reveal blur={false} distance={32} className="mx-auto mt-12 max-w-5xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem] border border-border bg-muted shadow-floating sm:aspect-[2/1]">
              <Image src={image} alt={title} fill priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </Reveal>
        )}

        {/* Body */}
        <Reveal blur={false} delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <div
            className={cn(
              "prose prose-lg prose-theme max-w-none",
              "prose-headings:font-display prose-headings:font-medium prose-headings:tracking-[-0.015em]",
              "prose-p:leading-[1.85] prose-li:my-1.5",
              "prose-blockquote:rounded-r-2xl prose-blockquote:bg-muted/60 prose-blockquote:py-1 prose-blockquote:font-display prose-blockquote:font-normal prose-blockquote:not-italic",
              "prose-code:rounded-md prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
              "prose-pre:rounded-2xl prose-pre:border prose-pre:border-border",
              "prose-img:rounded-2xl prose-hr:my-12"
            )}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
              components={{
                // Custom image component
                img: ({ node, ...props }) => {
                  const src = typeof props.src === "string" ? props.src : "";
                  const alt = typeof props.alt === "string" ? props.alt : "";

                  return (
                    <Image
                      src={src || ""}
                      alt={alt || ""}
                      width={800}
                      height={400}
                      className="my-8 rounded-2xl shadow-elevated"
                      style={{ width: "auto", height: "auto" }}
                    />
                  );
                },
                // Custom link component
                a: ({ node, ...props }) => {
                  const href = typeof props.href === "string" ? props.href : "";

                  return (
                    <a
                      {...props}
                      href={href}
                      className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                      target={href?.startsWith("http") ? "_blank" : undefined}
                      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    />
                  );
                }
              }}
            >
              {contents}
            </ReactMarkdown>
          </div>

          {/* Footer */}
          <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/70 pt-8 sm:flex-row">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{shareLabel}</span>
              <Button onClick={onShare} variant="outline" size="sm">
                <Share2 strokeWidth={1.75} />
                Share
              </Button>
            </div>
            <Button asChild variant="ghost" className="group">
              <Link href={backHref}>
                <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-0.5" />
                {backLabel}
              </Link>
            </Button>
          </footer>
        </Reveal>
      </div>
    </article>
  );
}

/** Placeholder shown while an article is loading. */
export function ArticleSkeleton() {
  return (
    <div className="pb-20" aria-busy="true" aria-label="Loading article">
      <div className="relative isolate overflow-hidden border-b border-border/60">
        <ArticleBackdrop />
        <div className="page-container py-14 lg:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
            <div className="skeleton h-7 w-32 rounded-full" />
            <div className="skeleton h-10 w-full rounded-2xl" />
            <div className="skeleton h-10 w-3/4 rounded-2xl" />
            <div className="skeleton mt-3 h-4 w-72 rounded-full" />
          </div>
        </div>
      </div>
      <div className="page-container">
        <div className="skeleton mx-auto mt-12 aspect-[2/1] max-w-5xl rounded-[1.75rem]" />
        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={cn("skeleton h-4 rounded-full", i % 3 === 2 ? "w-2/3" : "w-full")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Shown when an article can't be loaded. */
export function ArticleError({
  title,
  message,
  backHref,
  backLabel
}: {
  title: string;
  message: string;
  backHref: string;
  backLabel: string;
}) {
  return (
    <div className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden px-5 py-20">
      <ArticleBackdrop />
      <Reveal className="mx-auto max-w-md text-center">
        <span className="mx-auto mb-6 inline-flex size-16 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-soft">
          <AlertCircle className="size-7" strokeWidth={1.5} />
        </span>
        <h1 className="font-display text-3xl font-medium text-foreground">{title}</h1>
        <p className="mt-3 text-muted-foreground">{message}</p>
        <Button asChild className="group mt-8">
          <Link href={backHref}>
            <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-0.5" />
            {backLabel}
          </Link>
        </Button>
      </Reveal>
    </div>
  );
}
