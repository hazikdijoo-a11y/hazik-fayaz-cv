"use client";

import { useEffect, useState } from "react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { withBase, cvPath } from "@/lib/paths";

const links = [
  { href: "#summary", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#relevance", label: "Role Fit" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
  { href: withBase("/portfolio/"), label: "Portfolio" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      setScrolled(scrollTop > 8);
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 no-print transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="h-0.5 bg-transparent">
        <div
          className="h-0.5 bg-accent transition-[width] duration-150"
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />
      </div>
      <Container className="flex items-center justify-between py-4">
        <a href="#top" className="font-semibold tracking-tight text-foreground">
          Hazik Fayaz
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={withBase(cvPath)} download variant="secondary" className="!py-2.5 !px-5 text-xs">
            Download CV
          </Button>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-foreground transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-4 bg-foreground transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-foreground hover:bg-surface-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button
                href={withBase(cvPath)}
                download
                variant="primary"
                className="w-full"
              >
                Download CV
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
