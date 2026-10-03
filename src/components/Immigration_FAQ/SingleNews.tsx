import React from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, Eye } from "lucide-react";
import { formatDate, type NewsSummary } from "@/lib/content";

export function SingleNews({ news }: { news: NewsSummary }) {
  return (
    <article className="group">
      <Link href={`/immigration-news/${news.slug}`} className="block py-5">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="size-3.5" strokeWidth={1.75} />
            {formatDate(news.publishedAt)}
          </span>
          <span aria-hidden className="size-1 rounded-full bg-border" />
          <span className="inline-flex items-center gap-1.5">
            <Eye className="size-3.5" strokeWidth={1.75} />
            {news.views.toLocaleString("en-US")} views
          </span>
        </div>

        <h3 className="mt-2.5 flex items-start justify-between gap-4 text-[1.05rem] font-semibold leading-snug text-foreground/90 transition-colors duration-300 group-hover:text-primary">
          <span className="line-clamp-2">{news.title}</span>
          <ArrowUpRight
            className="mt-0.5 size-4 shrink-0 -translate-x-1 translate-y-1 opacity-0 transition-all duration-400 ease-premium group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
            strokeWidth={1.75}
          />
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {news.excerpt}
        </p>
      </Link>
    </article>
  );
}
