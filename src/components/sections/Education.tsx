import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { education, certifications } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="border-t border-border py-20 md:py-28">
      <Container>
        <SectionLabel index="07" title="Education & Certifications" />

        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          <div>
            <h2 data-reveal className="h-sub text-xl font-semibold tracking-tight text-foreground">Education</h2>
            <div className="mt-6 space-y-6">
              {education.map((e) => (
                <div data-reveal key={e.institution} className="border-t border-border pt-4">
                  <p className="text-sm font-medium text-foreground">{e.qualification}</p>
                  <p className="mt-1 text-sm text-muted">{e.institution}</p>
                  {e.year && <p className="mt-1 text-xs text-muted">{e.year}</p>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 data-reveal className="h-sub text-xl font-semibold tracking-tight text-foreground">
              Certifications & Training
            </h2>
            <div className="mt-6 space-y-6">
              {certifications.map((c) => (
                <div data-reveal key={c.name} className="border-t border-border pt-4">
                  <p className="text-sm font-medium text-foreground">{c.name}</p>
                  <p className="mt-1 text-sm text-muted">{c.issuer}</p>
                </div>
              ))}
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">
                  DGCA-regulated cabin crew progression
                </p>
                <p className="mt-1 text-sm text-muted">
                  Cabin Crew → Senior Cabin Crew → Line Check Cabin Crew, SpiceJet
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
