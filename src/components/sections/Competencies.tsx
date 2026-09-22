import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { competencies } from "@/lib/data";

export function Competencies() {
  return (
    <section id="competencies" className="border-t border-border py-20 md:py-28">
      <Container>
        <SectionLabel index="02" title="Core Competencies" />
        <h2 data-reveal className="max-w-xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          What I do well, in practice
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((group) => (
            <div data-reveal key={group.category} className="border-t border-border pt-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
