import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { profile } from "@/lib/data";
import { withBase, cvPath } from "@/lib/paths";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-20 md:py-28">
      <Container>
        <SectionLabel index="11" title="Contact" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 data-reveal className="max-w-md text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Let&apos;s talk about crew trainer roles
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Open to relocation. Reach out directly — I typically respond
              within a day.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-2xl border border-border p-6 transition-colors hover:border-accent"
            >
              <p className="font-mono-tight text-[11px] uppercase text-muted">Email</p>
              <p className="mt-2 text-sm font-medium text-foreground break-all">{profile.email}</p>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="rounded-2xl border border-border p-6 transition-colors hover:border-accent"
            >
              <p className="font-mono-tight text-[11px] uppercase text-muted">Phone</p>
              <p className="mt-2 text-sm font-medium text-foreground">{profile.phone}</p>
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border p-6 transition-colors hover:border-accent"
            >
              <p className="font-mono-tight text-[11px] uppercase text-muted">LinkedIn</p>
              <p className="mt-2 text-sm font-medium text-foreground">{profile.linkedin}</p>
            </a>
            <a
              href={withBase(cvPath)}
              download
              className="rounded-2xl border border-border p-6 transition-colors hover:border-accent"
            >
              <p className="font-mono-tight text-[11px] uppercase text-muted">CV</p>
              <p className="mt-2 text-sm font-medium text-foreground">Download PDF</p>
            </a>
          </div>
        </div>

        <div className="mt-12">
          <Button href={`mailto:${profile.email}`} variant="primary">
            Email me directly
          </Button>
        </div>
      </Container>
    </section>
  );
}
