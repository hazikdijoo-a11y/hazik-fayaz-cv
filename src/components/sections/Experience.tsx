import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-20 md:py-28">
      <Container>
        <SectionLabel index="03" title="Professional Experience" />
        <h2 data-reveal className="max-w-xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Career history
        </h2>

        <div className="mt-14 space-y-14">
          {experience.map((job, i) => (
            <article
              data-reveal
              key={`${job.company}-${job.title}`}
              className="grid grid-cols-1 gap-6 border-t border-border pt-8 md:grid-cols-[200px_1fr]"
            >
              <div>
                <p className="font-mono-tight text-xs uppercase text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-mono-tight text-xs uppercase text-muted">{job.dates}</p>
                <p className="mt-1 text-xs text-muted">{job.location}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                <p className="text-sm text-muted">{job.company}</p>

                <ul className="mt-4 space-y-2.5">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.transferable.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
