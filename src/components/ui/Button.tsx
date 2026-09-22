import { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:opacity-90",
  secondary:
    "border border-border text-foreground hover:border-accent hover:text-accent bg-transparent",
  ghost: "text-foreground hover:text-accent",
};

export function Button({
  children,
  href,
  variant = "primary",
  onClick,
  download,
  className = "",
  type = "button",
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  onClick?: () => void;
  download?: boolean | string;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    if (download) {
      return (
        <a href={href} download={download} className={classes} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
