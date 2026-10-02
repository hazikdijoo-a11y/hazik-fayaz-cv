import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://hazikdijoo-a11y.github.io/hazik-fayaz-cv";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
