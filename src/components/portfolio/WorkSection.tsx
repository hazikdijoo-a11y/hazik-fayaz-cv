"use client";

import Link from "next/link";
import { useState } from "react";
import { projects, type Project } from "@/lib/projects";
import { groups, groupLabel } from "@/lib/services";
import { Shots } from "./Shots";
import { StatusBadge } from "./StatusBadge";
import { buttonClasses } from "../ui/Button";

type Filter = (typeof groups)[number]["key"];
const RANK = { live: 0, built: 1, "in-development": 2, prototype: 3 };

const featured = projects.filter((p) => p.featured).sort((a, b) => a.featured! - b.featured!);
const rest = projects.filter((p) => !p.featured).sort((a, b) => RANK[a.status] - RANK[b.status]);

function FeatureRow({ p, index }: { p: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <li className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.2fr_1fr] md:gap-14">
      <div className={flip ? "md:order-2" : ""}>
        <Shots project={p} eager={index === 0} flip={flip} />
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={p.status} />
          <span className="text-xs text-muted">{groupLabel[p.group]}</span>
        </div>
        <h3 className="font-headline mt-4 text-3xl leading-tight tracking-tight text-foreground md:text-4xl">{p.name}</h3>
        <p className="mt-3 text-base leading-relaxed text-foreground/85 md:text-lg">{p.tagline}</p>
        <p className="mt-5 max-w-[46ch] text-sm leading-relaxed text-muted">
          <span className="mb-1 block font-mono-tight text-[11px] uppercase text-accent">The problem</span>
          {p.problem}
        </p>
        {p.highlights && (
          <ul className="mt-5 grid gap-2.5" aria-label="What it does">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                <span className="mt-2 h-1.5 w-1.5 flex-none rotate-45 bg-accent" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className={buttonClasses("primary")}>
              {p.liveLabel ?? "Open live"}
              <span className="sr-only"> (opens in a new tab)</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
          <Link
            href={`/portfolio/${p.slug}/`}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            Read the case study <span aria-hidden="true">→</span>
            <span className="sr-only">: {p.name}</span>
          </Link>
        </div>
      </div>
    </li>
  );
}

export function WorkSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const show = (p: Project) => filter === "all" || p.group === filter;
  const shownFeatured = featured.filter(show);
  const shownRest = rest.filter(show);
  const count = shownFeatured.length + shownRest.length;

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Show projects">
        {groups.map((g) => (
          <button
            key={g.key}
            type="button"
            aria-pressed={filter === g.key}
            onClick={() => setFilter(g.key)}
            className={`min-h-11 rounded-full border px-4 text-sm font-medium transition-colors ${
              filter === g.key
                ? "border-accent bg-accent text-[#0a0d16]"
                : "border-border text-foreground/85 hover:border-accent hover:text-foreground"
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        {filter === "all" ? "" : `${count} ${count === 1 ? "project" : "projects"} shown`}
      </p>

      {shownFeatured.length > 0 && (
        <ol className="mt-14 grid gap-20 md:gap-28">
          {shownFeatured.map((p, i) => (
            <FeatureRow key={p.slug} p={p} index={i} />
          ))}
        </ol>
      )}

      {shownRest.length > 0 && (
        <div className="mt-24 border-t border-border pt-10">
          <h3 className="font-headline text-2xl text-foreground md:text-3xl">Also built</h3>
          <p className="mt-2 text-sm text-muted">Private business systems, working builds and projects still in progress.</p>
          <ul className="mt-6 border-t border-border">
            {shownRest.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/portfolio/${p.slug}/`}
                  className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 border-b border-border px-1 py-5 transition-colors hover:bg-surface md:grid-cols-[1fr_2fr_9rem_1.25rem] md:px-3"
                >
                  <span>
                    <b className="block font-semibold text-foreground">{p.name}</b>
                    <small className="text-xs text-muted">{groupLabel[p.group]}</small>
                  </span>
                  <span className="col-span-2 row-start-2 text-sm text-foreground/80 md:col-span-1 md:row-start-auto">{p.tagline}</span>
                  <span className="justify-self-end">
                    <StatusBadge status={p.status} />
                  </span>
                  <span className="hidden text-accent transition-transform group-hover:translate-x-1 md:block" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
