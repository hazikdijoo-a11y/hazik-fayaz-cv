import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export const dynamic = "force-static";

const base = "https://hazikdijoo-a11y.github.io/hazik-fayaz-cv";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/portfolio/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/portfolio/checklist/`, changeFrequency: "yearly", priority: 0.6 },
    ...projects.map((p) => ({ url: `${base}/portfolio/${p.slug}/`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
