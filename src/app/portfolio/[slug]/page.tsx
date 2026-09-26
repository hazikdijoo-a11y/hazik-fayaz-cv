import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";
import { StatusBadge, statusLabel } from "@/components/portfolio/StatusBadge";
import { projects } from "@/lib/projects";
import { groupLabel, needForGroup } from "@/lib/services";
import { withBase } from "@/lib/paths";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

const find = (slug: string) => projects.find((p) => p.slug === slug);

export async function generateMetadata({ params }: PageProps<"/portfolio/[slug]">): Promise<Metadata> {
  const p = find((await params).slug);
  if (!p) return {};
  const title = `${p.name}: case study | Hazik Fayaz`;
  const image = p.image?.src.replace(/^\//, "") ?? "images/work/og-portfolio.jpg";
  return {
    title,
    description: p.tagline,
    alternates: { canonical: `portfolio/${p.slug}/` },
    openGraph: { title, description: p.tagline, url: `portfolio/${p.slug}/`, siteName: "Hazik Fayaz", images: [image], type: "article" },
    twitter: { card: "summary_large_image", title, description: p.tagline, images: [image] },
  };
}

const LAYER_ORDER = ["Frontend", "Backend", "Database", "Authentication", "Payments", "Admin", "Integrations", "Deployment"];
const label = "font-mono-tight text-[11px] uppercase text-accent";

export default async function CaseStudy({ params }: PageProps<"/portfolio/[slug]">) {
  const p = find((await params).slug);
  if (!p) notFound();

  const story = [
    { t: "The problem", d: p.problem },
    { t: "The approach", d: p.solution },
    ...(p.experience ? [{ t: "How it’s used", d: p.experience }] : []),
  ];
  const layers = LAYER_ORDER.filter((k) => p.layers[k]);
  const index = projects.indexOf(p);
  const next = projects[(index + 1) % projects.length];

  return (
    <main id="top">
      <Container className="pt-10 md:pt-16">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/portfolio/#work" className="hover:text-accent">
            ← All work
          </Link>
        </nav>

        <header className="mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={p.status} />
            <span className="text-sm text-muted">{p.statusNote}</span>
          </div>
          <p className="mt-6 text-sm text-muted">{[groupLabel[p.group], ...p.categories].join(" · ")}</p>
          <h1 className="font-headline mt-2 text-[clamp(2.4rem,5.4vw,4rem)] leading-[1.04] tracking-tight text-foreground">{p.name}</h1>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">{p.tagline}</p>
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className={buttonClasses("primary", "mt-7")}>
              {p.liveLabel ?? "Open live"}
              <span className="sr-only"> (opens in a new tab)</span> <span aria-hidden="true">↗</span>
            </a>
          )}
        </header>

        {p.gallery?.length ? (
          <div className="mt-12 grid items-end gap-5 md:grid-cols-[1fr_auto]">
            {p.gallery.map((g) => (
              <figure key={g.src} className={g.kind === "mobile" ? "hidden md:block" : ""}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBase(g.src)}
                  alt={g.alt}
                  width={g.w}
                  height={g.h}
                  className={`h-auto border border-border bg-surface ${g.kind === "mobile" ? "w-[200px] rounded-[20px]" : "w-full rounded-xl"}`}
                />
                <figcaption className="mt-2 text-xs text-muted">{g.kind === "mobile" ? "Phone" : "Desktop"}</figcaption>
              </figure>
            ))}
          </div>
        ) : null}
        {p.previewNote && (
          <p className="mt-6 rounded-xl border border-dashed border-border px-5 py-4 text-sm text-muted">{p.previewNote}</p>
        )}

        <div className={`mt-14 grid gap-4 ${story.length === 3 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}>
          {story.map((s, i) => (
            <section key={s.t} className="rounded-2xl border border-border bg-surface p-6">
              <h2 className={`h-sub ${label}`}>
                {i + 1} · {s.t}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/85">{s.d}</p>
            </section>
          ))}
        </div>

        {p.decisions?.length ? (
          <section className="mt-14">
            <h2 className={`h-sub ${label}`}>Design decisions</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {p.decisions.map((d) => (
                <li key={d} className="flex gap-3 rounded-xl border border-border px-5 py-4 text-sm leading-relaxed text-foreground/85">
                  <span className="mt-1.5 h-2 w-2 flex-none rotate-45 bg-accent" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-14">
          <h2 className={`h-sub ${label}`}>Key features</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f) => (
              <li key={f.title} className="rounded-xl border border-border bg-surface p-5">
                <b className="block text-[15px] font-semibold text-foreground">{f.title}</b>
                <span className="mt-1.5 block text-sm leading-relaxed text-muted">{f.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <details className="group mt-14 rounded-2xl border border-border">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between px-5 [&::-webkit-details-marker]:hidden">
            <span className={label}>Technology</span>
            <span className="text-xl text-accent transition-transform group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          {layers.length > 0 && (
            <dl className="border-t border-border">
              {layers.map((k) => (
                <div key={k} className="grid gap-1 border-b border-border px-5 py-3.5 last:border-b-0 sm:grid-cols-[170px_1fr] sm:gap-4">
                  <dt className="text-sm font-semibold text-foreground">{k}</dt>
                  <dd className="text-sm text-muted">{p.layers[k]}</dd>
                </div>
              ))}
            </dl>
          )}
          <ul className="flex flex-wrap gap-2 border-t border-border px-5 py-4">
            {p.tech.map((t) => (
              <li key={t} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/85">
                {t}
              </li>
            ))}
          </ul>
        </details>

        <section className="mt-14">
          <h2 className={`h-sub ${label}`}>Where it stands</h2>
          <p className="mt-4 rounded-xl bg-surface-muted px-5 py-4 text-sm leading-relaxed text-foreground/85">
            <b className="text-foreground">{statusLabel[p.status]}.</b> {p.statusNote ? `${p.statusNote}. ` : ""}
            {p.notYet}
          </p>
        </section>

        <section className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl border border-accent/30 bg-accent-soft p-7 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="h-sub font-headline text-3xl text-foreground">Have a similar problem?</h2>
            <p className="mt-2 text-foreground/75">Tell me about it and I’ll tell you honestly what it would take.</p>
          </div>
          <Link href={`/portfolio/?need=${needForGroup[p.group] ?? "unsure"}#start`} className={buttonClasses("primary", "!bg-accent !text-[#0a0d16]")}>
            Let’s discuss it <span aria-hidden="true">→</span>
          </Link>
        </section>

        <nav aria-label="More work" className="mt-12 mb-20 flex flex-wrap justify-between gap-4 border-t border-border pt-8 text-sm">
          <Link href="/portfolio/#work" className="min-h-11 text-muted hover:text-accent">
            ← All work
          </Link>
          <Link href={`/portfolio/${next.slug}/`} className="min-h-11 font-medium text-accent hover:underline underline-offset-4">
            Next: {next.name} →
          </Link>
        </nav>
      </Container>
    </main>
  );
}
