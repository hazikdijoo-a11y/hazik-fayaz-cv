"use client";

import type { ReactNode } from "react";
import type { NeedKey } from "@/lib/services";

/* A link to the enquiry form that also preselects "What do you need?". */
export const NEED_EVENT = "portfolio:need";

export function NeedLink({
  need,
  className = "",
  children,
}: {
  need: NeedKey;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href="#start"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent<NeedKey>(NEED_EVENT, { detail: need }))}
    >
      {children}
    </a>
  );
}
