import type { CSSProperties } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Portrait } from "../Portrait";
import { Magnetic } from "../motion/Magnetic";
import { HeroSpotlight, ParallaxWrap } from "../motion/HeroFX";
import { profile } from "@/lib/data";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden pb-24 pt-8"
    >
      <HeroSpotlight />
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        fill="none"
      >
        <path d="M-40 700 C 300 640, 520 180, 1260 120" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 10" />
        <path d="M-40 780 C 360 700, 640 300, 1260 260" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 10" opacity="0.6" />
      </svg>

      <Container className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p
            className="animate-fade-up font-mono-tight text-xs uppercase text-accent"
            style={delay(0)}
          >
            {profile.title}
          </p>

          <h1
            aria-label={profile.name}
            className="font-headline mt-5 text-[clamp(3.6rem,10.5vw,9rem)] font-medium leading-[0.88] tracking-[-0.03em] text-foreground"
          >
            <span className="mask-line" aria-hidden="true">
              <span style={delay(120)}>Hazik</span>
            </span>
            <span className="mask-line" aria-hidden="true">
              <span style={delay(280)} className="italic text-accent">
                Fayaz
              </span>
            </span>
          </h1>

          <p
            className="animate-fade-up mt-8 max-w-md text-lg leading-relaxed text-muted [animation-delay:520ms]"
          >
            {profile.tagline}. Ten years in the cabin, ready to teach what the line has taught.
          </p>

          <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-4 [animation-delay:680ms]">
            <Magnetic>
              <Button href="#experience">View my experience</Button>
            </Magnetic>
            <Magnetic>
              <Button
                href="/cv/Hazik-Fayaz-Cabin-Crew-Trainer-CV.pdf"
                download
                variant="secondary"
              >
                Download CV
              </Button>
            </Magnetic>
            <Button href="#contact" variant="ghost">
              Contact me →
            </Button>
          </div>

          <div className="animate-fade-up mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 font-mono-tight text-xs uppercase text-muted [animation-delay:820ms]">
            <span>{profile.location}</span>
            <span className="hidden sm:inline">{profile.coordinates}</span>
            <span>{profile.nationality} national</span>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:400ms]">
          <ParallaxWrap>
            <Portrait />
          </ParallaxWrap>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono-tight text-[10px] uppercase text-muted">Scroll</span>
        <span className="scroll-cue block h-8 w-px bg-accent" />
      </div>
    </section>
  );
}
