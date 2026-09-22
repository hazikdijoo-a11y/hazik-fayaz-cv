import { Container } from "./ui/Container";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="no-print border-t border-border py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-foreground">{profile.name}</p>
          <p className="text-sm text-muted">
            {profile.title} · {profile.targetRole}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={`mailto:${profile.email}`} className="text-muted hover:text-accent transition-colors">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-muted hover:text-accent transition-colors">
            {profile.phone}
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <a
          href="#top"
          className="font-mono-tight text-xs uppercase text-muted hover:text-accent transition-colors"
        >
          Back to top ↑
        </a>
      </Container>
      <Container className="mt-8 pt-6 border-t border-border">
        <p className="text-xs text-muted max-w-2xl">
          This is an independent personal career website. All content reflects the candidate&apos;s own
          professional experience.
        </p>
      </Container>
    </footer>
  );
}
