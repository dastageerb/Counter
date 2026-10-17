import { useEffect, useRef, useState, type ReactNode } from "react";

/* --------------------------------------------------------------------------
   Brand mark — drawn, not an icon font, so it stays crisp at any size.
   -------------------------------------------------------------------------- */

/**
 * Gradient stops live in CSS custom properties so the mark deepens on the
 * white canvas and brightens on the dark one. The literal values here are the
 * dark-canvas fallback for contexts where landing.css hasn't loaded.
 */
export function Mark({
  className = "h-7 w-7",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 32 32" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="cnt-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--cnt-mark-a, oklch(0.86 0.14 196))" />
          <stop offset="100%" stopColor="var(--cnt-mark-b, oklch(0.68 0.16 170))" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="29" height="29" rx="9" fill="url(#cnt-mark)" />
      <path
        d="M9 21.5V10.5h6.2c3.1 0 5.1 1.7 5.1 4.3 0 2.1-1.2 3.6-3.1 4.1l3.6 2.6"
        fill="none"
        stroke="var(--cnt-mark-ink, oklch(0.16 0.04 220))"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="23.4" cy="10.6" r="1.9" fill="var(--cnt-mark-ink, oklch(0.16 0.04 220))" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Mark />
      <span
        className="text-[15px] font-semibold tracking-tight"
        style={{ color: "var(--cnt-ink)" }}
      >
        Counter
      </span>
    </span>
  );
}

/* --------------------------------------------------------------------------
   Scroll reveal — one IntersectionObserver per node, self-cleaning.
   -------------------------------------------------------------------------- */

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={`cnt-reveal ${shown ? "is-in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}

/* --------------------------------------------------------------------------
   Small shared pieces
   -------------------------------------------------------------------------- */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="h-px w-6" style={{ background: "var(--cnt-accent)" }} />
      <span className="cnt-eyebrow">{children}</span>
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className={align === "center" ? "flex justify-center" : ""}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 className="cnt-display mt-5 text-3xl sm:text-4xl">{title}</h2>
      {body ? (
        <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--cnt-ink-soft)" }}>
          {body}
        </p>
      ) : null}
    </div>
  );
}

/** Container with the marketing rhythm baked in. */
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
