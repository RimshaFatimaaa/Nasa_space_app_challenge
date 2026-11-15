"use client";

import { Check, Share2 } from "lucide-react";
import { useState } from "react";

export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        return;
      }
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={share}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm hover:border-cyan/60"
    >
      {copied ? <Check aria-hidden="true" size={16} /> : <Share2 aria-hidden="true" size={16} />}
      {copied ? "Link copied" : "Share this machine"}
    </button>
  );
}
