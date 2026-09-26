import Link from "next/link";
import { Container } from "../ui/Container";
import { profile } from "@/lib/data";
import { whatsappLink } from "@/lib/services";

export function PortfolioFooter() {
  const col = "grid content-start gap-2.5 text-sm";
  const a = "text-muted transition-colors hover:text-accent";
  return (
    <footer className="no-print border-t border-border py-12 pb-28 md:pb-12">
      <Container className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-semibold text-foreground">{profile.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted">Websites, business apps and internal tools for small businesses. Based in Bengaluru, India.</p>
        </div>
        <div className={col}>
          <p className="font-mono-tight text-[11px] uppercase text-foreground/70">Work with me</p>
          <Link className={a} href="/portfolio/#services">Services &amp; pricing</Link>
          <Link className={a} href="/portfolio/#audit">Website audit</Link>
          <Link className={a} href="/portfolio/checklist/">Free checklist</Link>
          <Link className={a} href="/portfolio/#start">Start a project</Link>
        </div>
        <div className={col}>
          <p className="font-mono-tight text-[11px] uppercase text-foreground/70">Contact</p>
          <a className={a} href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className={a} href={whatsappLink("Hi Hazik, I'd like to talk about a website or app.")} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a className={a} href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className={col}>
          <p className="font-mono-tight text-[11px] uppercase text-foreground/70">Also</p>
          <Link className={a} href="/">My aviation CV</Link>
        </div>
      </Container>
      <Container className="mt-10 border-t border-border pt-6">
        <p className="text-xs text-muted">© 2026 Hazik Fayaz. Every project shown is real; unfinished parts are stated in each case study.</p>
      </Container>
    </footer>
  );
}
