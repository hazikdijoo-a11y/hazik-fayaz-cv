import { Container } from "../ui/Container";
import { CountUp } from "../motion/CountUp";
import { highlights } from "@/lib/data";

export function Highlights() {
  return (
    <section className="border-t border-border bg-surface py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {highlights.map((item) => (
            <div data-reveal key={item.label}>
              <p className="font-mono-tight text-3xl text-accent sm:text-4xl"><CountUp value={item.value} /></p>
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
