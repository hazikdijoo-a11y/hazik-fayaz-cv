import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { buttonClasses } from "@/components/ui/Button";
import { WorkSection } from "@/components/portfolio/WorkSection";
import { IntakeForm } from "@/components/portfolio/IntakeForm";
import { NeedLink } from "@/components/portfolio/NeedLink";
import { WaIcon } from "@/components/portfolio/MobileBar";
import { carePlans, faqs, packages, paths, steps, whatsappLink } from "@/lib/services";
import { withBase, cvPath } from "@/lib/paths";

const title = "Websites & Business Software for Small Businesses | Hazik Fayaz";
const description =
  "Business websites, website conversion upgrades and custom business apps, designed and built by Hazik Fayaz. Websites from ₹15,000, a ₹999 website audit, and real projects you can open and check.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "portfolio/" },
  openGraph: {
    title,
    description,
    url: "portfolio/",
    siteName: "Hazik Fayaz",
    images: ["images/work/og-portfolio.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description, images: ["images/work/og-portfolio.jpg"] },
};

const wa = whatsappLink("Hi Hazik, I'd like to talk about a website or app.");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "Hazik Fayaz — websites and business software",
      url: "https://hazikdijoo-a11y.github.io/hazik-fayaz-cv/portfolio/",
      email: "hazikdijoo@gmail.com",
      telephone: "+91 99958 03434",
      areaServed: "IN",
      address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          ...packages.map((p) => ({
            "@type": "Offer",
            name: p.name,
            description: p.forWhom,
            priceSpecification: { "@type": "PriceSpecification", minPrice: Number(p.from.replace(/\D/g, "")), priceCurrency: "INR" },
          })),
          { "@type": "Offer", name: "Website Growth Audit", price: 999, priceCurrency: "INR" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

const eyebrow = "font-mono-tight text-[11px] uppercase text-accent";

export default function PortfolioPage() {
  return (
    <main id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 1. Hero: what I do, for whom, and the two ways in */}
      <section className="pt-14 md:pt-24">
        <Container className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className={eyebrow}>Websites · Business apps · Automation</p>
            <h1 className="font-headline mt-5 text-[clamp(2.4rem,5vw,3.9rem)] leading-[1.02] tracking-tight text-foreground">
              Practical websites and software for <em className="text-accent">growing businesses.</em>
            </h1>
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-foreground/80 md:text-lg">
              I help small businesses turn ideas, manual processes and tired websites into sites and systems that people actually use.
              One person designs, builds and launches it, and is there when you need a change.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#start" className={buttonClasses("primary")}>
                Start a Project <span aria-hidden="true">→</span>
              </Link>
              <NeedLink need="audit" className={buttonClasses("secondary")}>
                Get a Website Audit · ₹999
              </NeedLink>
            </div>
            <p className="mt-4 text-sm text-muted">
              Rather talk first?{" "}
              <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-medium text-accent hover:underline underline-offset-4">
                Message me on WhatsApp<span className="sr-only"> (opens in a new tab)</span>&nbsp;↗
              </a>
            </p>
          </div>

          <div className="animate-fade-up relative pb-8">
            <figure className="overflow-hidden rounded-xl border border-border bg-surface shadow-[0_28px_64px_rgba(0,0,0,0.5)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase("/images/work/dijoo-afghan-cap-house-desktop.webp")}
                width={1200}
                height={750}
                fetchPriority="high"
                alt="Dijoo Afghan Cap House website: “Caps, jackets & leather for Kashmir winters”, with call and directions buttons"
                className="h-auto w-full"
              />
            </figure>
            <figure className="absolute right-3 bottom-0 w-[26%] max-w-[170px] overflow-hidden rounded-[22px] border-[5px] border-[#0a0d16] bg-[#0a0d16] shadow-[0_18px_40px_rgba(0,0,0,0.55)] ring-1 ring-white/15 md:-right-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase("/images/work/farm-ledger-mobile.webp")}
                width={360}
                height={720}
                alt="Farm Ledger on a phone: marking each farmer present or absent"
                className="h-auto w-full rounded-[16px]"
              />
            </figure>
            <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted">
              <span>● A shop’s website</span>
              <span>● A farm’s wage and attendance app</span>
            </p>
          </div>
        </Container>

        {/* Self-selection: each problem leads to one offer */}
        <Container className="mt-16 md:mt-20">
          <h2 className="h-sub font-mono-tight text-[11px] uppercase text-muted">Where are you starting from?</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {paths.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  className="group grid h-full grid-cols-[1fr_auto] items-end gap-x-4 gap-y-3 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent"
                >
                  <span className="font-headline col-span-2 text-xl leading-snug text-foreground">{p.q}</span>
                  <span className="text-sm font-medium text-accent">
                    {p.offer} <span className="ml-1 font-normal text-muted">{p.price}</span>
                  </span>
                  <span className="text-accent transition-transform group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 2. Proof */}
      <section id="work" className="mt-20 scroll-mt-20 border-t border-border py-20 md:mt-28 md:py-28">
        <Container>
          <SectionLabel index="01" title="Proof" />
          <h2 data-reveal>Real projects you can open and check</h2>
          <p className="mt-5 max-w-xl text-foreground/75">
            Each one starts with the problem it solves. The case studies also say plainly what isn’t finished yet.
          </p>
          <WorkSection />
        </Container>
      </section>

      {/* 3. Services and starting prices */}
      <section id="services" className="scroll-mt-20 bg-[#faf8f4] py-20 text-[#3d4452] md:py-28">
        <Container>
          <div className="flex items-center gap-3">
            <span className="font-mono-tight text-xs text-[#8a6a2c]">02</span>
            <span className="h-px w-8 bg-[#d9d4c7]" aria-hidden="true" />
            <span className="font-mono-tight text-xs uppercase text-[#5c6472]">Services &amp; pricing</span>
          </div>
          <h2 data-reveal className="mt-5 text-[#10182a]">Three ways to work together</h2>
          <p className="mt-5 max-w-xl">Prices are starting points, not fixed packages. You get a written quote for your exact scope before any work starts.</p>

          <ol className="mt-12 grid gap-5 lg:grid-cols-3">
            {packages.map((p) => (
              <li
                key={p.id}
                id={p.id}
                className={`flex scroll-mt-24 flex-col rounded-3xl bg-white p-7 ${
                  p.main ? "border-2 border-[#10182a] shadow-[0_12px_40px_rgba(16,24,42,0.12)]" : "border border-[#e4e0d5]"
                }`}
              >
                <p className="font-mono-tight text-[11px] uppercase text-[#8a6a2c]">{p.tier}</p>
                <h3 className="font-headline mt-2 min-h-[2.4em] text-2xl leading-tight text-[#10182a] lg:min-h-[2.5em]">{p.name}</h3>
                <p className="mt-2 text-sm lg:min-h-[4.2em]">{p.forWhom}</p>
                <p className="font-headline mt-5 text-4xl text-[#10182a]">
                  <span className="mr-1 font-sans text-sm text-[#5c6472]">From</span>
                  {p.from}
                </p>
                <p className="mt-1.5 text-xs text-[#5c6472]">{p.range}</p>
                <ul className="mt-6 grid flex-1 content-start gap-2.5 border-t border-[#e4e0d5] pt-6">
                  {p.includes.map((i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="mt-0.5 font-bold text-[#2f7d5a]" aria-hidden="true">
                        ✓
                      </span>
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-[#5c6472]">
                  See:{" "}
                  {p.proof.map((pr, i) => (
                    <span key={pr.slug}>
                      {i > 0 && ", "}
                      <Link href={`/portfolio/${pr.slug}/`} className="font-medium text-[#10182a] underline underline-offset-2">
                        {pr.label}
                      </Link>
                    </span>
                  ))}
                </p>
                <NeedLink
                  need={p.need}
                  className={buttonClasses(
                    "primary",
                    `mt-5 w-full ${p.main ? "!bg-[#10182a] !text-[#faf8f4]" : "!bg-transparent !text-[#10182a] border border-[#c9c3b4] hover:!border-[#10182a]"}`,
                  )}
                >
                  {p.cta}
                </NeedLink>
              </li>
            ))}
          </ol>

          {/* Low-friction entry: visible, but quieter than the packages */}
          <div id="audit" className="mt-8 grid scroll-mt-24 items-center gap-6 rounded-3xl border border-dashed border-[#c9c3b4] bg-[#f3f1ea] p-6 md:grid-cols-[1.6fr_1fr] md:p-8">
            <div>
              <p className="font-mono-tight text-[11px] uppercase text-[#5c6472]">Not ready for a project?</p>
              <h3 className="mt-2 text-xl font-semibold text-[#10182a]">
                Website Growth Audit <span className="font-headline ml-1 font-normal">₹999</span>
              </h3>
              <p className="mt-2 text-sm">A written review of your current website with 5 to 10 specific fixes in priority order, and a short call to go through them.</p>
              <p className="mt-2 text-xs text-[#5c6472]">Covers: design and ease of use · mobile · messaging · calls to action · lead capture</p>
            </div>
            <div>
              <NeedLink need="audit" className={buttonClasses("secondary", "w-full !border-[#10182a] !text-[#10182a] md:w-auto")}>
                Request an audit
              </NeedLink>
              <p className="mt-3 text-xs text-[#5c6472]">I confirm I can help, then send a Razorpay payment link. No payment up front.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. How I work */}
      <section id="process" className="scroll-mt-20 py-20 md:py-28">
        <Container>
          <SectionLabel index="03" title="How I work" />
          <h2 data-reveal>Seven steps, no surprises</h2>
          <p className="mt-5 max-w-xl text-foreground/75">You talk to the person doing the work at every step.</p>
          <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 xl:gap-5">
            {steps.map((s, i) => (
              <li key={s.title} data-reveal className="border-t-2 border-accent pt-4">
                <span className="font-mono-tight text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-headline mt-2 text-xl text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 5. Optional support plans */}
      <section id="care" className="scroll-mt-20 border-t border-border py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.6fr]">
          <div>
            <SectionLabel index="04" title="After launch" />
            <h2 data-reveal>Optional support plans</h2>
            <p className="mt-5 max-w-md text-foreground/75">
              You don’t need one. They’re for businesses that would rather not think about updates, backups and small changes. The price within each
              range depends on the size of the site or app.
            </p>
          </div>
          <ul className="border-t border-border">
            {carePlans.map((c) => (
              <li key={c.name} className="grid gap-4 border-b border-border py-6 sm:grid-cols-[0.9fr_1.3fr]">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {c.price}
                    <span className="font-normal text-muted">/month</span>
                  </p>
                </div>
                <ul className="grid gap-1.5">
                  {c.items.map((i) => (
                    <li key={i} className="flex gap-3 text-sm text-foreground/80">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" aria-hidden="true" />
                      {i}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 6. Lead magnet */}
      <section id="checklist" className="bg-surface py-20 md:py-24">
        <Container className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className={eyebrow}>Free resource</p>
            <h2 data-reveal className="mt-4">Is your website losing enquiries?</h2>
            <p className="mt-5 max-w-lg text-foreground/75">
              The Website Conversion Checklist: 20 checks a small business can run on its own site in about ten minutes, with a score at the end. Free,
              no email needed.
            </p>
            <Link href="/portfolio/checklist/" className={buttonClasses("primary", "mt-8 !bg-accent !text-[#0a0d16]")}>
              Open the free checklist <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="grid gap-3" aria-label="A few of the checks">
            {[
              "Can a visitor tell what you do within five seconds?",
              "Is there a call or WhatsApp button without scrolling on a phone?",
              "Does your contact form confirm that it worked?",
              "Are your prices, or at least a starting price, visible?",
            ].map((q) => (
              <li key={q} className="flex gap-3 rounded-xl border border-border bg-background/40 p-4 text-sm text-foreground/80">
                <span className="font-headline text-lg leading-none text-accent" aria-hidden="true">
                  ?
                </span>
                {q}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* About: the person behind the work, with the CV one click away */}
      <section id="about" className="scroll-mt-20 border-t border-border py-20 md:py-28">
        <Container className="grid items-center gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <figure className="mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-border bg-surface md:max-w-[354px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withBase("/images/hazik-fayaz.jpg")} alt="Hazik Fayaz" width={600} height={800} loading="lazy" className="aspect-[3/4] h-auto w-full object-cover" />
          </figure>
          <div>
            <SectionLabel index="05" title="Who you’ll work with" />
            <h2 data-reveal>Hi, I’m Hazik.</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-foreground/80">
              I’m based in Bengaluru and have spent more than ten years in commercial aviation, currently as Line Check Cabin Crew: a job built on
              checklists, clear procedures and getting details right under pressure.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-foreground/80">
              I bring the same habits to every website and app I build: check everything, keep you informed, and write down plainly what isn’t finished.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className={buttonClasses("secondary")}>
                View my full CV <span aria-hidden="true">→</span>
              </Link>
              <a href={withBase(cvPath)} download className={buttonClasses("ghost", "!px-0 sm:!px-6")}>
                Download CV (PDF)
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="scroll-mt-20 py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.6fr]">
          <div>
            <SectionLabel index="06" title="Questions" />
            <h2 data-reveal>Before you get in touch</h2>
          </div>
          <div className="grid gap-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-surface open:border-accent/50">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-xl text-accent transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-foreground/75">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Qualification form */}
      <section id="start" className="scroll-mt-16 border-t border-border bg-inverse py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel index="07" title="Start a project" />
            <h2 data-reveal>Tell me about your business</h2>
            <p className="mt-5 text-foreground/75">Two minutes is enough. Rough answers are fine.</p>
            <ol className="mt-8 grid gap-4">
              {[
                ["You send the details", "What you need and what isn’t working today."],
                ["I reply personally", "By email or WhatsApp, with questions and an honest view of what it takes."],
                ["A short call", "To agree what the first version should do."],
                ["A written proposal", "Scope, price and timeline. Work starts once you accept it."],
              ].map(([t, d], i) => (
                <li key={t} className="grid grid-cols-[2rem_1fr] gap-x-3 text-sm">
                  <span className="row-span-2 grid h-7 w-7 place-items-center rounded-full border border-accent text-xs font-semibold text-accent">{i + 1}</span>
                  <b className="font-semibold text-foreground">{t}</b>
                  <span className="text-muted">{d}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 border-t border-border pt-7">
              <p className="text-sm font-semibold text-foreground">Prefer to chat?</p>
              <a href={wa} target="_blank" rel="noopener noreferrer" className={buttonClasses("primary", "mt-3 !bg-[#25D366] !text-[#0a0d16]")}>
                <WaIcon /> WhatsApp me<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <p className="mt-4 text-sm text-muted">
                Or email{" "}
                <a href="mailto:hazikdijoo@gmail.com" className="text-accent underline underline-offset-4">
                  hazikdijoo@gmail.com
                </a>
              </p>
            </div>
          </div>
          <IntakeForm />
        </Container>
      </section>
    </main>
  );
}
