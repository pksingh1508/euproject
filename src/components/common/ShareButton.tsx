"use client";

import toast from "react-hot-toast";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonProps {
  title: string;
  text: string;
}

/** Opens the native share sheet, falling back to copying the page URL. */
export function ShareButton({ title, text }: ShareButtonProps) {
  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch {
        // The user closed the share sheet — nothing to do.
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard");
    } catch {
      toast.error("Couldn't copy the link");
    }
  };

  return (
    <Button onClick={handleShare} variant="outline" size="sm">
      <Share2 strokeWidth={1.75} />
      Share
    </Button>
  );
}
