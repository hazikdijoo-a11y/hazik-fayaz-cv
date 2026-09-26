import Link from "next/link";
import { Container } from "../ui/Container";
import { buttonClasses } from "../ui/Button";

const links = [
  { href: "/portfolio/#work", label: "Work" },
  { href: "/portfolio/#services", label: "Services" },
  { href: "/portfolio/#process", label: "Process" },
  { href: "/portfolio/#faq", label: "FAQ" },
];

/* The portfolio's own header: no CV links competing with "Start a Project". */
export function PortfolioNav() {
  return (
    <header className="no-print sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <Container className="flex items-center justify-between gap-4 py-3.5">
        <Link href="/portfolio/" className="font-semibold tracking-tight text-foreground">
          Hazik Fayaz <span className="font-normal text-muted">· Websites &amp; software</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Portfolio">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/portfolio/#start" className={buttonClasses("primary", "!px-5 !py-2.5 text-xs")}>
          Start a Project
        </Link>
      </Container>
    </header>
  );
}
