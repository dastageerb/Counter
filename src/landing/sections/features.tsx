import {
  BookUser,
  Boxes,
  CloudOff,
  Keyboard,
  PackageX,
  Printer,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Reveal, Section, SectionHead } from "../primitives";

export function Features() {
  return (
    <Section id="features" className="scroll-mt-12 relative">
      <span id="product" className="absolute -top-20 pointer-events-none" aria-hidden="true" />
      <SectionHead
        eyebrow="Reliable Retail Architecture"
        title={
          <>
            Engineered for continuous checkout,
            <br className="hidden sm:block" /> online or offline.
          </>
        }
        body="Counter writes sales, stock adjustments, and khata entries locally first. Your cash registers keep moving smoothly, syncing automatically with cloud reporting when connected."
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {/* Hero feature — offline architecture */}
        <Reveal className="lg:col-span-2">
          <article className="cnt-card cnt-card--sheen h-full overflow-hidden p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-md">
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{
                    background: "color-mix(in oklab, var(--cnt-accent) 16%, transparent)",
                    color: "var(--cnt-accent)",
                  }}
                >
                  <CloudOff className="h-4 w-4" />
                </span>
                <h3 className="cnt-display mt-4 text-2xl">Responsive billing with local storage</h3>
                <p
                  className="mt-3 text-[14.5px] leading-relaxed"
                  style={{ color: "var(--cnt-ink-soft)" }}
                >
                  Bills are committed locally on your terminal so ringing never pauses during network drops.
                  When an internet connection is available, Counter reconciles transactions with the central database in the background, updating live stock counts and balances.
                </p>
              </div>

              {/* Status indicators */}
              <div className="w-full max-w-[260px] shrink-0 space-y-3">
                <PathRow tone="ok" label="Online Mode" note="instant cloud & stock sync" />
                <PathRow tone="ok" label="Offline Mode" note="uninterrupted register billing" />
                <div
                  className="rounded-lg border px-3 py-2.5 text-[11.5px]"
                  style={{
                    borderColor: "color-mix(in oklab, var(--cnt-accent) 30%, transparent)",
                    background: "color-mix(in oklab, var(--cnt-accent) 8%, transparent)",
                    color: "var(--cnt-ink-soft)",
                  }}
                >
                  Seamless background reconciliation the moment network connectivity is restored.
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <FeatureCard
          icon={<Keyboard className="h-4 w-4" />}
          title="Keyboard-first, mouse-optional"
          body="Scan, quantity, discount, pay. A full bill from the scanner to the receipt without leaving the home row."
          delay={60}
        />

        <FeatureCard
          icon={<BookUser className="h-4 w-4" />}
          title="Khata that balances itself"
          body="Customer credit ledger with running balance, partial payments and an ageing view of who owes what — printed on the receipt in one line."
          delay={0}
        />

        <FeatureCard
          icon={<Boxes className="h-4 w-4" />}
          title="Stock moves as you sell"
          body="Every bill, return, wastage entry and purchase order updates on-hand quantity and cost. No nightly import, no spreadsheet."
          delay={60}
        />

        <Reveal delay={120}>
          <article className="cnt-card h-full p-6">
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
              style={{
                background: "color-mix(in oklab, var(--cnt-ink) 8%, transparent)",
                color: "var(--cnt-ink-soft)",
              }}
            >
              <TrendingUp className="h-4 w-4" />
            </span>
            <h3 className="mt-4 text-[15px] font-semibold tracking-tight">
              Reports you can act on
            </h3>
            <p
              className="mt-2 text-[13.5px] leading-relaxed"
              style={{ color: "var(--cnt-ink-soft)" }}
            >
              Day close, profit by item, dead stock, staff-wise sales. Export to Excel or PDF before
              you leave the counter.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                { l: "Gross", v: "+18.4%" },
                { l: "Margin", v: "22.1%" },
                { l: "Bills", v: "412" },
              ].map((m) => (
                <div
                  key={m.l}
                  className="rounded-lg border px-2.5 py-2"
                  style={{
                    borderColor: "var(--cnt-line)",
                    background: "color-mix(in oklab, var(--cnt-panel-2) 60%, transparent)",
                  }}
                >
                  <div
                    className="text-[10px] uppercase tracking-wider"
                    style={{ color: "var(--cnt-ink-dim)" }}
                  >
                    {m.l}
                  </div>
                  <div className="num mt-0.5 text-[13px] font-semibold">{m.v}</div>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
          <FeatureCard
            icon={<PackageX className="h-4 w-4" />}
            title="Expiry & wastage, tracked"
            body="Flag near-expiry stock, record wastage with a reason, and see the cost of spoilage instead of guessing."
            delay={0}
          />
          <FeatureCard
            icon={<Printer className="h-4 w-4" />}
            title="Thermal, barcode, A4"
            body="58mm and 80mm receipt printers, barcode label design, A5/A4 invoices — with your logo and tax details."
            delay={60}
          />
          <FeatureCard
            icon={<ShieldCheck className="h-4 w-4" />}
            title="Roles, branches, audit"
            body="Cashiers see the till, managers see margins, you see everything. Every void, discount and stock edit is logged."
            delay={120}
          />
        </div>
      </div>
    </Section>
  );
}

function FeatureCard({
  icon,
  title,
  body,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <article className="cnt-card h-full p-6">
        <span
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
          style={{
            background: "color-mix(in oklab, var(--cnt-ink) 8%, transparent)",
            color: "var(--cnt-ink-soft)",
          }}
        >
          {icon}
        </span>
        <h3 className="mt-4 text-[15px] font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "var(--cnt-ink-soft)" }}>
          {body}
        </p>
      </article>
    </Reveal>
  );
}

function PathRow({ tone, label, note }: { tone: "danger" | "ok"; label: string; note: string }) {
  const color = tone === "ok" ? "var(--cnt-accent-2)" : "var(--cnt-danger)";
  return (
    <div
      className="rounded-lg border px-3 py-2.5"
      style={{
        borderColor: "var(--cnt-line)",
        background: "color-mix(in oklab, var(--cnt-panel-2) 55%, transparent)",
      }}
    >
      <div className="flex items-center gap-2 text-[12px] font-medium">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color }} />
        {label}
      </div>
      <div className="mt-1 text-[11px]" style={{ color: "var(--cnt-ink-dim)" }}>
        {note}
      </div>
      <div
        className="mt-2 h-1 overflow-hidden rounded-full"
        style={{ background: "color-mix(in oklab, var(--cnt-ink) 8%, transparent)" }}
      >
        <span
          className="block h-full rounded-full"
          style={{ width: tone === "ok" ? "100%" : "34%", background: color, opacity: 0.75 }}
        />
      </div>
    </div>
  );
}
