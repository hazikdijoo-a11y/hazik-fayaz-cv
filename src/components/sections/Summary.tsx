import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { summary } from "@/lib/data";

export function Summary() {
  return (
    <section id="summary" className="border-t border-border py-20 md:py-28">
      <Container>
        <SectionLabel index="01" title="Professional Summary" />
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <h2 data-reveal className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Who I am
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">{summary}</p>
        </div>
      </Container>
    </section>
  );
}
