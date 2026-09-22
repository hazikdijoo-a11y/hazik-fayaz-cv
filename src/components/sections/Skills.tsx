import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { skills } from "@/lib/data";

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-t border-border pt-5">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-surface py-20 md:py-28">
      <Container>
        <SectionLabel index="08" title="Skills" />
        <h2 data-reveal className="max-w-xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Capabilities at a glance
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          <SkillGroup title="Professional Skills" items={skills.professional} />
          <SkillGroup title="Aviation Skills" items={skills.aviation} />
          <SkillGroup title="Digital Skills" items={skills.digital} />
          <div className="border-t border-border pt-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Languages
            </h3>
            <div className="mt-4 space-y-3">
              {skills.languages.map((l) => (
                <div data-reveal key={l.name} className="flex items-center justify-between text-sm">
                  <span className="text-foreground">{l.name}</span>
                  <span className="text-muted">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
