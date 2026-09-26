import type { Project } from "@/lib/projects";
import { withBase } from "@/lib/paths";

/* A desktop screenshot with the phone screenshot overlapping its corner. */
export function Shots({ project, eager = false, flip = false }: { project: Project; eager?: boolean; flip?: boolean }) {
  const desktop = project.gallery?.find((g) => g.kind === "desktop");
  const mobile = project.gallery?.find((g) => g.kind === "mobile");
  if (!desktop) return null;
  return (
    <div className="relative pb-6">
      <figure className="overflow-hidden rounded-xl border border-border bg-surface shadow-[0_28px_64px_rgba(0,0,0,0.45)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase(desktop.src)}
          alt={desktop.alt}
          width={desktop.w}
          height={desktop.h}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="h-auto w-full"
        />
      </figure>
      {mobile && (
        <figure
          className={`absolute bottom-0 w-[22%] max-w-[150px] overflow-hidden rounded-[20px] border-[5px] border-[#0a0d16] bg-[#0a0d16] shadow-[0_18px_40px_rgba(0,0,0,0.55)] ring-1 ring-white/15 ${
            flip ? "left-3 md:-left-5" : "right-3 md:-right-5"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(mobile.src)}
            alt={mobile.alt}
            width={mobile.w}
            height={mobile.h}
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-[14px]"
          />
        </figure>
      )}
    </div>
  );
}
