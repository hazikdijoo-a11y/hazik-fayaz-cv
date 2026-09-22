import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { RouteMotif } from "./RouteMotif";
import { withBase } from "@/lib/paths";

const PHOTO_PATH = "images/hazik-fayaz.jpg";

export function Portrait() {
  const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", PHOTO_PATH));

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -right-3 -top-3 h-full w-full rounded-2xl border border-accent/40"
      />
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
        {hasPhoto ? (
          <Image
            src={withBase(`/${PHOTO_PATH}`)}
            alt="Hazik Fayaz, aviation professional"
            fill
            sizes="(max-width: 768px) 80vw, 384px"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-primary">
            <span className="font-mono-tight text-4xl text-primary-foreground/80">HF</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
      </div>
      </div>
      <div className="mt-6 px-1">
        <RouteMotif />
      </div>
    </div>
  );
}
