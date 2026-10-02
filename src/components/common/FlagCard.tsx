import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface FlagCardProps {
  flagImageUrl: string;
  countryName: string;
}

const FlagCard: React.FC<FlagCardProps> = ({ flagImageUrl, countryName }) => {
  return (
    <Link
      href={"/contact"}
      className="group relative flex h-full flex-col items-center gap-3.5 rounded-2xl border border-border bg-card px-3 py-5 text-center shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
    >
      <ArrowUpRight
        aria-hidden
        className="absolute right-3 top-3 size-3.5 text-primary opacity-0 transition-all duration-400 ease-premium group-hover:rotate-45 group-hover:opacity-100"
        strokeWidth={2}
      />
      <div className="relative h-12 w-[4.5rem] overflow-hidden rounded-md shadow-soft ring-1 ring-black/5 dark:ring-white/10">
        <Image
          src={flagImageUrl}
          alt={`${countryName} flag`}
          fill
          sizes="72px"
          className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
        />
      </div>
      <h3 className="text-sm font-semibold leading-snug text-foreground/90 transition-colors duration-300 group-hover:text-primary">
        {countryName}
      </h3>
    </Link>
  );
};

export default FlagCard;
