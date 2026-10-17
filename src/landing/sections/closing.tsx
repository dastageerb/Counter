import { useState } from "react";
import { ArrowRight, Check, Mail } from "lucide-react";
import { Mark, Reveal, Wordmark } from "../primitives";

const FAQ = [
  {
    q: "What actually happens if the internet goes down mid-bill?",
    a: "Nothing visible. The bill is written to the machine's local database before the receipt prints, so a dropped connection only affects the sync queue. Counter keeps a queue depth you can watch on screen, and pushes the backlog in order once the line is back.",
  },
  {
    q: "Two counters sell the last unit while offline. What then?",
    a: "On reconnect Counter compares each queued stock movement against the server's ground truth. If a product went negative, it corrects the quantity and shows you a reconciliation report naming the product, the local figure, the server figure and the difference — so you can decide what to do instead of discovering it a week later.",
  },
  {
    q: "Does it replace my accountant or my tax filing?",
    a: "No. Counter produces clean, complete sales, tax and expense records with printable summaries and Excel exports, which is what your accountant needs. Filing, returns and statutory submissions stay with them.",
  },
  {
    q: "What hardware do I need?",
    a: "Any Windows or Android machine you already own — a laptop, a mini PC or a tablet — plus a thermal printer if you want printed receipts. Barcode scanners and cash drawers work over USB. You do not need new hardware to try it.",
  },
  {
    q: "Can my staff see the profit numbers?",
    a: "Only if you let them. Roles are enforced at the app level: cashiers see the till and stock, managers see purchases and wastage, and margin, payroll and branch comparisons stay with the owner. Every void, discount override and stock edit is written to an audit log with a user and a timestamp.",
  },
  {
    q: "How long does setup take?",
    a: "An afternoon for a single shop: import your product list from Excel or CSV, set tax and receipt details, print a few test bills. Multi-branch rollouts get a migration pass and staff training on site.",
  },
  {
    q: "Who owns the data?",
    a: "You do. Everything lives in your account with export to Excel and PDF on every report, and you can pull a full copy at any time — including if you decide to leave.",
  },
];

const FOOTER = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "#product" },
      { label: "How it works", href: "#workflow" },
      { label: "Coverage", href: "#coverage" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "App",
    links: [
      { label: "Sign in", href: "/login" },
      { label: "Create account", href: "/signup" },
      { label: "Subscription", href: "/subscription" },
      { label: "Customer portal", href: "/portal" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact sales", href: "mailto:hello@swiftretailsuite.com" },
      { label: "Support", href: "mailto:support@swiftretailsuite.com" },
      { label: "Status", href: "#faq" },
      { label: "Privacy", href: "#faq" },
    ],
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <Reveal>
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6" style={{ background: "var(--cnt-accent)" }} />
              <span className="cnt-eyebrow">Straight answers</span>
            </div>
            <h2 className="cnt-display mt-5 text-3xl sm:text-4xl">
              The questions
              <br />
              shop owners
              <br />
              actually ask
            </h2>
            <p
              className="mt-4 text-[14.5px] leading-relaxed"
              style={{ color: "var(--cnt-ink-soft)" }}
            >
              If something here is still unclear, write to us — you will get a person who has stood
              behind a counter, not a ticket number.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <a
                href="https://wa.me/923170319398?text=Hi%20Dastageer,%20I%20have%20a%20question%20about%20Counter%20POS."
                target="_blank"
                rel="noopener noreferrer"
                className="cnt-btn cnt-btn--primary !h-10 !px-4 text-xs"
              >
                WhatsApp +92 317 0319398
              </a>
              <a
                href="mailto:dastageerb44@gmail.com?subject=Question%20about%20Counter"
                className="cnt-btn cnt-btn--ghost !h-10 !px-4 text-xs flex items-center gap-1.5"
              >
                <Mail className="h-4 w-4" />
                dastageerb44@gmail.com
              </a>
            </div>
          </div>
        </Reveal>

        <div className="divide-y" style={{ borderColor: "var(--cnt-line)" }}>
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={i * 40}>
              <details className="cnt-faq group py-5" style={{ borderColor: "var(--cnt-line)" }}>
                <summary className="flex items-start justify-between gap-6">
                  <span className="text-[15.5px] font-medium leading-snug">{item.q}</span>
                  <span
                    className="cnt-faq-plus mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border text-base leading-none transition-transform duration-200"
                    style={{ borderColor: "var(--cnt-line-strong)", color: "var(--cnt-accent)" }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div
                  className="cnt-faq-body mt-3 max-w-2xl pr-10 text-[14px] leading-relaxed"
                  style={{ color: "var(--cnt-ink-soft)" }}
                >
                  {item.a}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="relative px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div
            className="cnt-grain relative overflow-hidden rounded-3xl border px-6 py-12 text-center sm:px-14 sm:py-16"
            style={{
              borderColor: "color-mix(in oklab, var(--cnt-accent) 28%, transparent)",
              background:
                "radial-gradient(90% 120% at 50% -10%, color-mix(in oklab, var(--cnt-accent) 16%, transparent), transparent 60%), linear-gradient(180deg, var(--cnt-panel), var(--cnt-bg-2))",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.5]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--cnt-line) 1px, transparent 1px), linear-gradient(to bottom, var(--cnt-line) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                maskImage: "radial-gradient(circle 40vw at 50% 0%, #000, transparent 75%)",
                WebkitMaskImage: "radial-gradient(circle 40vw at 50% 0%, #000, transparent 75%)",
              }}
            />

            <div className="relative">
              <div className="flex justify-center">
                <Mark className="h-10 w-10" />
              </div>
              <h2 className="cnt-display mx-auto mt-6 max-w-2xl text-3xl sm:text-[2.6rem]">
                Put Counter on one till this week.
              </h2>
              <p
                className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed"
                style={{ color: "var(--cnt-ink-soft)" }}
              >
                Fourteen days, no card, no migration risk. If it does not survive your busiest hour,
                walk away and keep your data.
              </p>

              <form
                className="mx-auto mt-8 flex w-full max-w-md flex-col gap-2 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!email.trim()) return;
                  setSent(true);
                }}
              >
                <label className="sr-only" htmlFor="cta-email">
                  Work email
                </label>
                <input
                  id="cta-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourshop.com"
                  className="h-11 flex-1 rounded-[10px] border px-3.5 text-sm outline-none transition-colors"
                  style={{
                    borderColor: "var(--cnt-line-strong)",
                    background: "color-mix(in oklab, var(--cnt-bg) 55%, transparent)",
                    color: "var(--cnt-ink)",
                  }}
                />
                <button type="submit" className="cnt-btn cnt-btn--primary">
                  {sent ? (
                    <>
                      <Check className="h-4 w-4" /> Request received
                    </>
                  ) : (
                    <>
                      Get started
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              <p
                className="mt-4 text-[12.5px]"
                style={{ color: sent ? "var(--cnt-accent-2)" : "var(--cnt-ink-dim)" }}
              >
                {sent
                  ? "Thanks — we'll be in touch shortly with your trial details."
                  : "Prefer to look first? Create an account and bill a test sale in two minutes."}
              </p>

              <div className="mt-3 text-[12.5px]" style={{ color: "var(--cnt-ink-dim)" }}>
                <a
                  href="https://wa.me/923170319398?text=Hi%20Dastageer,%20I%20want%20to%20get%20started%20with%20Counter%20POS."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-dotted underline-offset-4"
                  style={{ color: "var(--cnt-ink-soft)" }}
                >
                  Or chat directly on WhatsApp: +92 317 0319398
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      className="relative border-t px-5 pb-10 pt-14 sm:px-8"
      style={{ borderColor: "var(--cnt-line)" }}
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
          <div>
            <Wordmark />
            <p
              className="mt-4 max-w-xs text-[13px] leading-relaxed"
              style={{ color: "var(--cnt-ink-dim)" }}
            >
              Offline-first billing, inventory and khata for retail shops. Runs on the counter
              machine you already own.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span
                className="cnt-pulse h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--cnt-accent-2)" }}
              />
              <span className="text-[12px]" style={{ color: "var(--cnt-ink-soft)" }}>
                All systems operational
              </span>
            </div>
          </div>

          {FOOTER.map((col) => (
            <div key={col.title}>
              <h3
                className="text-[11px] font-medium uppercase tracking-[0.14em]"
                style={{ color: "var(--cnt-ink-dim)" }}
              >
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] transition-colors"
                      style={{ color: "var(--cnt-ink-soft)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-12 flex flex-col gap-3 border-t pt-6 text-[12px] sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--cnt-line)", color: "var(--cnt-ink-dim)" }}
        >
          <span>
            © {new Date().getFullYear()} Swift Retail Suite. Counter is a product of Swift Retail
            Suite.
          </span>
          <span className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a href="#faq">Privacy</a>
            <a href="#faq">Terms</a>
            <a href="#faq">Data handling</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
