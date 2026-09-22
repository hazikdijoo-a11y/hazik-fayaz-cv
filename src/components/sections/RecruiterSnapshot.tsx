import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { recruiterSnapshot } from "@/lib/data";

const rows: [string, string][] = [
  ["Target Role", recruiterSnapshot.targetRole],
  ["Experience", recruiterSnapshot.experience],
  ["Industry", recruiterSnapshot.industry],
  ["Location", recruiterSnapshot.location],
  ["Nationality", recruiterSnapshot.nationality],
  ["Availability", recruiterSnapshot.availability],
  ["Languages", recruiterSnapshot.languages],
  ["Key Strengths", recruiterSnapshot.strengths],
];

export function RecruiterSnapshot() {
  return (
    <section className="border-t border-border bg-inverse py-20 text-inverse-foreground md:py-28">
      <Container>
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono-tight text-xs text-accent">10</span>
          <span className="h-px w-8 bg-white/15" aria-hidden="true" />
          <span className="font-mono-tight text-xs uppercase text-inverse-foreground/50">
            Recruiter Snapshot
          </span>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto]">
          <dl className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {rows.map(([label, value]) => (
              <div data-reveal key={label} className="border-t border-white/15 pt-4">
                <dt className="font-mono-tight text-[11px] uppercase text-inverse-foreground/50">
                  {label}
                </dt>
                <dd className="mt-1.5 text-sm text-inverse-foreground">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col justify-end gap-4">
            <Button
              href="/cv/Hazik-Fayaz-Cabin-Crew-Trainer-CV.pdf"
              download
              variant="secondary"
              className="!border-inverse-foreground/30 !text-inverse-foreground hover:!border-accent hover:!text-accent"
            >
              Download full CV
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
