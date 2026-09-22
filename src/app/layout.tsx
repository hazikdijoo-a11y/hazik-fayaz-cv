import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { withBase } from "@/lib/paths";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = "https://hazikdijoo-a11y.github.io" + withBase("/");
const title = "Hazik Fayaz | Aviation Professional — Cabin Leadership";
const description =
  "Hazik Fayaz is an aviation professional with 10+ years of commercial cabin crew experience, specializing in onboard safety leadership and service excellence.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Hazik Fayaz",
    "aviation professional",
    "cabin crew trainer",
    "airline professional",
    "cabin crew instructor",
    "aviation operations professional",
    "aviation jobs Middle East",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Hazik Fayaz",
    images: ["images/og-cover.jpg"],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["images/og-cover.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
