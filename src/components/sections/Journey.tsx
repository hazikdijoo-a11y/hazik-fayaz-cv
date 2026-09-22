"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { journey } from "@/lib/data";

const PATH = "M30 300 C 220 340, 300 110, 500 190 S 780 310, 970 70";
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

export function Journey() {
  const steps = journey;
  const n = steps.length;
  const wrap = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [scrollMode, setScrollMode] = useState(false);
  const [p, setP] = useState(0);
  const [len, setLen] = useState(0);
  const [pts, setPts] = useState<{ x: number; y: number }[]>([]);
  const [plane, setPlane] = useState({ x: 30, y: 300, a: 0 });

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setScrollMode(wide.matches && !calm.matches);
    update();
    wide.addEventListener("change", update);
    calm.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      calm.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    if (!scrollMode || !path) return;
    const total = path.getTotalLength();
    setLen(total);
    setPts(
      steps.map((_, i) => {
        const pt = path.getPointAtLength(total * (i / (n - 1)));
        return { x: pt.x, y: pt.y };
      }),
    );

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = wrap.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const span = r.height - window.innerHeight;
        const prog = clamp(-r.top / span, 0, 1);
        const at = total * prog;
        const a = path.getPointAtLength(at);
        const b = path.getPointAtLength(Math.min(total, at + 2));
        setP(prog);
        setPlane({ x: a.x, y: a.y, a: (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI + 90 });
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [scrollMode, steps, n]);

  if (!scrollMode) {
    return (
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionLabel index="05" title="Career Journey" />
          <h2 data-reveal>The flight path</h2>
          <ol className="mt-12 space-y-8 border-l border-border pl-6">
            {steps.map((s) => (
              <li key={s.year} data-reveal className="relative">
                <span
                  className={`absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent ${
                    s.year === "Next" ? "bg-background" : "bg-accent"
                  }`}
                  aria-hidden="true"
                />
                <p className="font-mono-tight text-xs uppercase text-accent">{s.year}</p>
                <p className="font-headline mt-1 text-2xl text-foreground">{s.label}</p>
                <p className="text-sm text-muted">{s.org}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    );
  }

  const active = steps.reduce((acc, _, i) => (p >= i / (n - 1) - 0.001 ? i : acc), 0);
  const current = steps[active];

  return (
    <section
      ref={wrap}
      className="relative border-t border-border"
      style={{ height: `${n * 75 + 40}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-16">
        <Container className="w-full">
          <SectionLabel index="05" title="Career Journey" />
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2>The flight path</h2>
            <div key={active} className="animate-fade-up max-w-sm text-right">
              <p className="font-mono-tight text-xs uppercase text-accent">{current.year}</p>
              <p className="font-headline text-3xl leading-tight text-foreground">{current.label}</p>
              <p className="text-sm text-muted">{current.org}</p>
            </div>
          </div>

          <svg
            viewBox="0 0 1000 380"
            className="mt-6 h-auto w-full"
            role="img"
            aria-label={`Career path from ${steps[0].label} to ${steps[n - 1].label}`}
          >
            <path d={PATH} fill="none" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="2 8" />
            <path
              ref={pathRef}
              d={PATH}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={len || 2000}
              strokeDashoffset={len ? len * (1 - p) : 2000}
            />
            {pts.map((pt, i) => {
              const on = i <= active;
              const up = i % 2 === 0;
              const anchor = i === 0 ? "start" : i === n - 1 ? "end" : "middle";
              return (
                <g key={steps[i].year}>
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={on ? 7 : 5}
                    fill={on ? "var(--accent)" : "var(--background)"}
                    stroke="var(--accent)"
                    strokeWidth="2"
                    style={{ transition: "all .4s var(--ease-out)" }}
                  />
                  <text
                    x={pt.x}
                    y={pt.y + (up ? -26 : 40)}
                    textAnchor={anchor}
                    className="font-mono-tight"
                    fontSize="13"
                    fill={on ? "var(--accent)" : "var(--muted)"}
                  >
                    {steps[i].year}
                  </text>
                  <text
                    x={pt.x}
                    y={pt.y + (up ? -44 : 58)}
                    textAnchor={anchor}
                    fontSize="15"
                    fill={on ? "var(--foreground)" : "var(--muted)"}
                    style={{ transition: "fill .4s" }}
                  >
                    {steps[i].label}
                  </text>
                </g>
              );
            })}
            <g transform={`translate(${plane.x} ${plane.y}) rotate(${plane.a}) scale(2.6)`}>
              <path
                d="M0 -5 L1.6 0 L0 5 L-1.6 3 L-4.5 3.6 L-3 0 L-4.5 -3.6 L-1.6 -3 Z"
                fill="var(--accent)"
              />
            </g>
          </svg>
        </Container>
      </div>
    </section>
  );
}
