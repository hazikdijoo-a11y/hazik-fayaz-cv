import Link from "next/link";
import { whatsappLink } from "@/lib/services";
import { buttonClasses } from "../ui/Button";

const waIcon =
  "M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.05-1.32A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.24c-.22.62-1.28 1.19-1.77 1.24-.45.05-.9.24-3.04-.63-2.58-1.05-4.24-3.68-4.37-3.85-.13-.17-1.04-1.38-1.04-2.63 0-1.25.66-1.86.89-2.11.23-.25.5-.31.67-.31.17 0 .34 0 .48.01.16.01.36-.06.56.43.22.53.73 1.83.8 1.96.07.13.11.28.02.45-.09.17-.13.28-.26.43-.13.15-.28.34-.4.46-.13.13-.27.27-.12.53.16.27.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.27.13.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.25.09 1.56.74 1.83.87.27.13.45.2.51.31.07.11.07.62-.15 1.24z";

export function WaIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d={waIcon} />
    </svg>
  );
}

/* Phones: the two ways in stay within thumb reach. Desktop: a floating WhatsApp button. */
export function MobileBar() {
  const wa = whatsappLink("Hi Hazik, I'd like to talk about a website or app.");
  return (
    <>
      <div className="no-print fixed inset-x-0 bottom-0 z-50 flex gap-2.5 border-t border-border bg-background/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <Link href="/portfolio/#start" className={buttonClasses("primary", "flex-1")}>
          Start a Project
        </Link>
        <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="Message on WhatsApp" className="grid w-12 place-items-center rounded-full bg-[#25D366] text-[#0a0d16]">
          <WaIcon />
        </a>
      </div>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message on WhatsApp"
        className="no-print fixed right-6 bottom-6 z-50 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-[#0a0d16] shadow-lg transition-transform hover:scale-105 md:grid"
      >
        <WaIcon className="h-7 w-7" />
      </a>
    </>
  );
}
