import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { testimonials } from "@/lib/testimonials";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-accent" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.3}>
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.3 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7z" />
        </svg>
      ))}
    </div>
  );
}

/* Hidden until there's at least one real testimonial — see src/lib/testimonials.ts. */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <Container>
        <SectionLabel index="02" title="What clients say" />
        <h2 data-reveal>In their own words</h2>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name} className="flex flex-col rounded-3xl border border-border bg-surface p-7">
              {t.rating && <Stars rating={t.rating} />}
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted">
                  {t.role ? `${t.role}, ` : ""}
                  {t.business}
                </p>
                {t.slug && (
                  <Link href={`/portfolio/${t.slug}/`} className="mt-2 inline-block text-xs font-medium text-accent underline underline-offset-2">
                    See the case study →
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* Only emitted into JSON-LD once there's real data to report. */
export function testimonialsJsonLd() {
  if (testimonials.length === 0) return [];
  const rated = testimonials.filter((t) => t.rating);
  const reviews = testimonials.map((t) => ({
    "@type": "Review",
    reviewBody: t.quote,
    author: { "@type": "Person", name: t.name },
    ...(t.rating ? { reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 } } : {}),
  }));
  const aggregate = rated.length
    ? [
        {
          "@type": "AggregateRating",
          ratingValue: (rated.reduce((sum, t) => sum + (t.rating ?? 0), 0) / rated.length).toFixed(1),
          reviewCount: rated.length,
        },
      ]
    : [];
  return [...reviews, ...aggregate];
}
