"use client";

import Link from "next/link";
import { useState } from "react";
import { checklist } from "@/lib/services";
import { buttonClasses } from "../ui/Button";

const total = checklist.reduce((n, g) => n + g.checks.length, 0);

function verdict(n: number) {
  const missing = total - n;
  if (n === 0) return ["Tick each check that’s true for your website.", "Every unticked box is a place enquiries can slip away."];
  if (n >= 17)
    return [
      `${n} of ${total}: in good shape.`,
      missing
        ? `Fix the last ${missing} and your site is doing its job. An audit can check the details you can’t see yourself.`
        : "Your website covers the basics. An audit can look for the next improvements.",
    ];
  if (n >= 11)
    return [
      `${n} of ${total}: likely losing some enquiries.`,
      `${missing} checks are open. Start with the ones under “On a phone” and “Getting in touch”, because they cost the most.`,
    ];
  return [
    `${n} of ${total}: your website is probably costing you work.`,
    `With ${missing} checks open, a focused upgrade or a fresh start will likely do more than small fixes.`,
  ];
}

export function Checklist() {
  const [ticked, setTicked] = useState<Set<string>>(new Set());
  const n = ticked.size;
  const [head, advice] = verdict(n);
  const toggle = (id: string) =>
    setTicked((s) => {
      const next = new Set(s);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.6fr_0.9fr] lg:gap-16">
      <div className="grid gap-10">
        {checklist.map((g, gi) => (
          <fieldset key={g.title}>
            <legend className="font-headline mb-4 flex items-baseline gap-3 text-2xl text-foreground">
              <span className="font-mono-tight text-xs text-accent">{String(gi + 1).padStart(2, "0")}</span>
              {g.title}
            </legend>
            <ul className="border-t border-border">
              {g.checks.map((c, ci) => {
                const id = `c-${gi}-${ci}`;
                return (
                  <li key={id} className="border-b border-border">
                    <label htmlFor={id} className="grid cursor-pointer grid-cols-[24px_1fr] gap-4 rounded-lg px-2 py-4 transition-colors hover:bg-surface">
                      <input
                        id={id}
                        type="checkbox"
                        checked={ticked.has(id)}
                        onChange={() => toggle(id)}
                        className="mt-0.5 h-5 w-5 accent-[#4caf82]"
                      />
                      <span className="text-[15px] leading-relaxed text-foreground">
                        {c.text}
                        {c.why && <small className="mt-1 block text-sm text-muted">{c.why}</small>}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>
        ))}
      </div>

      <aside className="rounded-3xl border border-border bg-surface p-7 lg:sticky lg:top-24" aria-labelledby="score-title">
        <h2 id="score-title" className="h-sub font-mono-tight text-[11px] uppercase text-accent">
          Your score
        </h2>
        <p className="font-headline mt-3 text-6xl leading-none text-foreground tabular-nums">
          {n}
          <small className="text-2xl text-muted"> / {total}</small>
        </p>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-surface-muted" aria-hidden="true">
          <div className="h-full rounded-full bg-accent transition-[width] duration-300" style={{ width: `${(n / total) * 100}%` }} />
        </div>
        <p className="mt-5 font-semibold text-foreground" role="status" aria-live="polite">
          {head}
        </p>
        <div className="no-print mt-5 grid gap-3 border-t border-border pt-5">
          <p className="text-sm text-muted">{advice}</p>
          <Link href="/portfolio/?need=audit#start" className={buttonClasses("primary", "w-full")}>
            Get a Website Audit · ₹999
          </Link>
          <Link href="/portfolio/#services" className="inline-flex min-h-11 items-center justify-center text-sm font-medium text-accent underline underline-offset-4">
            See website services and prices
          </Link>
          <button type="button" onClick={() => window.print()} className="min-h-11 text-sm text-muted hover:text-foreground">
            Print or save as PDF
          </button>
        </div>
      </aside>
    </div>
  );
}
