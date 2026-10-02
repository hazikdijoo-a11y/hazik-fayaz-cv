import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";
import { Checklist } from "@/components/portfolio/Checklist";
import { whatsappLink } from "@/lib/services";

const title = "Website Conversion Checklist for Small Businesses | Hazik Fayaz";
const description = "A free 20-point checklist to find out why your website isn't bringing enquiries. Tick through it in ten minutes and get a score. No email needed.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "portfolio/checklist/" },
  openGraph: { title, description, url: "portfolio/checklist/", siteName: "Hazik Fayaz", images: ["images/work/og-portfolio.jpg"], type: "article" },
  twitter: { card: "summary_large_image", title, description, images: ["images/work/og-portfolio.jpg"] },
};

export default function ChecklistPage() {
  return (
    <main id="top">
      <Container className="pt-10 md:pt-16">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/portfolio/" className="hover:text-accent">
            Websites &amp; software
          </Link>{" "}
          / Free checklist
        </nav>
        <p className="mt-8 font-mono-tight text-[11px] uppercase text-accent">Free resource</p>
        <h1 className="font-headline mt-4 max-w-[18ch] text-[clamp(2.3rem,5vw,3.6rem)] leading-[1.04] tracking-tight text-foreground">
          Website Conversion Checklist <em className="text-accent">for small businesses</em>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/80">
          Twenty checks you can run on your own website in about ten minutes. Open your site on your phone, tick what’s true, and see your score at the
          end. Nothing you tick is saved or sent anywhere.
        </p>
        <Checklist />
      </Container>

      <section className="no-print mt-20 border-t border-border bg-surface py-16 md:py-20">
        <Container>
          <h2 data-reveal>Want someone to go through it with you?</h2>
          <p className="mt-5 max-w-2xl text-foreground/75">
            The Website Growth Audit covers these checks and more, on your actual site, with 5 to 10 fixes in priority order and a short call to go through
            them.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/portfolio/?need=audit#start" className={buttonClasses("primary", "!bg-accent !text-[#0a0d16]")}>
              Request an audit · ₹999
            </Link>
            <a
              href={whatsappLink("Hi Hazik, I just went through your website checklist.")}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses("secondary")}
            >
              Ask on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
