"use client";

import { markVisited } from "@/lib/progress";
import { useEffect } from "react";

export function VisitTracker({ id }: { id: string }) {
  useEffect(() => {
    markVisited(id);
  }, [id]);
  return null;
}
