import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { whatIBring } from "@/lib/data";

export function WhatIBring() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container>
        <SectionLabel index="09" title="What I Bring" />
        <h2 data-reveal className="max-w-xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          The value I add on day one
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {whatIBring.map((point, i) => (
            <div data-reveal key={point} className="flex gap-4">
              <span className="font-mono-tight text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-muted">{point}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
