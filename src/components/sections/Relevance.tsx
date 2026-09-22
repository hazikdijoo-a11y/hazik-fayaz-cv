import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { relevance, gaps, secondaryRoles } from "@/lib/data";

export function Relevance() {
  return (
    <section id="relevance" className="border-t border-border bg-surface py-20 md:py-28">
      <Container>
        <SectionLabel index="04" title="Why My Experience Is Relevant" />
        <h2 data-reveal className="max-w-2xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Mapping my experience to crew trainer roles
        </h2>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-background">
          <div className="hidden grid-cols-3 gap-4 border-b border-border bg-surface-muted px-6 py-4 md:grid">
            <p className="font-mono-tight text-xs uppercase text-muted">My Experience</p>
            <p className="font-mono-tight text-xs uppercase text-muted">Relevant Capability</p>
            <p className="font-mono-tight text-xs uppercase text-muted">Role Relevance</p>
          </div>

          {relevance.map((row) => (
            <div
              key={row.experience}
              className="grid grid-cols-1 gap-3 border-b border-border px-6 py-6 last:border-b-0 md:grid-cols-3 md:gap-4"
            >
              <div>
                <p className="font-mono-tight text-[10px] uppercase text-muted md:hidden">
                  My experience
                </p>
                <p className="text-sm leading-relaxed text-foreground">{row.experience}</p>
              </div>
              <div>
                <p className="font-mono-tight text-[10px] uppercase text-muted md:hidden">
                  Relevant capability
                </p>
                <p className="text-sm leading-relaxed text-muted">{row.capability}</p>
              </div>
              <div>
                <p className="font-mono-tight text-[10px] uppercase text-muted md:hidden">
                  Role relevance
                </p>
                <p className="text-sm leading-relaxed text-accent">{row.airline}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border p-6 md:p-8">
            <h3 className="font-mono-tight text-xs uppercase text-muted">Honest gaps to note</h3>
            <ul className="mt-4 space-y-2.5">
              {gaps.map((g) => (
                <li key={g} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border" aria-hidden="true" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border p-6 md:p-8">
            <h3 className="font-mono-tight text-xs uppercase text-muted">Also open to</h3>
            <ul className="mt-4 space-y-4">
              {secondaryRoles.map((r) => (
                <li key={r.role}>
                  <p className="text-sm font-medium text-foreground">{r.role}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{r.why}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
