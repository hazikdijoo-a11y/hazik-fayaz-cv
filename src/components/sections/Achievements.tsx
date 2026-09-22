import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="border-t border-border bg-surface py-20 md:py-28">
      <Container>
        <SectionLabel index="06" title="Achievements" />
        <h2 data-reveal className="max-w-xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Recognised for the standard I hold
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {achievements.map((a) => (
            <div data-reveal key={a.title} className="rounded-2xl border border-border bg-background p-6">
              <h3 className="text-base font-semibold text-foreground">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{a.description}</p>
              <p className="mt-4 border-t border-border pt-4 text-xs font-medium uppercase tracking-wide text-accent">
                {a.impact}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
