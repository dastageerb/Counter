import { Check, CloudUpload, Receipt, Share2 } from "lucide-react";
import { Reveal, Section, SectionHead } from "../primitives";

const STEPS = [
  {
    n: "01",
    icon: <Receipt className="h-4 w-4" />,
    title: "Bill on the counter machine",
    body: "Scan, pick the customer, take cash, card or khata. The bill is written to local storage the instant you press pay — receipt prints whether or not there is a signal.",
    meta: ["~0.4s per bill", "58/80mm + A4", "Hold & resume bills"],
  },
  {
    n: "02",
    icon: <CloudUpload className="h-4 w-4" />,
    title: "Sync whenever the line is back",
    body: "Queued bills push up in order. If two branches sold the last unit while offline, Counter reconciles the quantity and shows you the exact correction — no silent negative stock.",
    meta: ["Ordered replay", "Conflict report", "Nothing lost"],
  },
  {
    n: "03",
    icon: <Share2 className="h-4 w-4" />,
    title: "Close the day in one screen",
    body: "Cash in hand, card and online totals, credit given, wastage, top items and margin. Send the summary to the owner's phone or export it for accounts.",
    meta: ["Day close sheet", "Excel / PDF", "Owner summary"],
  },
];

export function Workflow() {
  return (
    <Section id="workflow">
      <SectionHead
        eyebrow="How a day runs"
        title="Built around the counter, not around a dashboard"
        body="Three moments decide whether a retail system survives contact with a real shop: the bill, the sync, and the close."
      />

      <ol className="mt-14 space-y-4">
        {STEPS.map((step, i) => (
          <Reveal as="li" key={step.n} delay={i * 80}>
            <article className="cnt-card grid gap-6 p-6 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-start sm:p-7">
              <div className="flex items-center gap-3 sm:w-[104px] sm:flex-col sm:items-start">
                <span className="num font-mono text-[11px]" style={{ color: "var(--cnt-accent)" }}>
                  {step.n}
                </span>
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{
                    background: "color-mix(in oklab, var(--cnt-accent) 14%, transparent)",
                    color: "var(--cnt-accent)",
                  }}
                >
                  {step.icon}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                <p
                  className="mt-2 max-w-2xl text-[14.5px] leading-relaxed"
                  style={{ color: "var(--cnt-ink-soft)" }}
                >
                  {step.body}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2 sm:w-[180px] sm:flex-col sm:gap-2.5">
                {step.meta.map((m) => (
                  <li
                    key={m}
                    className="flex items-center gap-2 text-[12.5px]"
                    style={{ color: "var(--cnt-ink-soft)" }}
                  >
                    <Check
                      className="h-3.5 w-3.5 shrink-0"
                      style={{ color: "var(--cnt-accent-2)" }}
                    />
                    {m}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={120}>
        <div
          className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-xl border px-6 py-4 text-[13px]"
          style={{
            borderColor: "var(--cnt-line)",
            background: "color-mix(in oklab, var(--cnt-panel) 45%, transparent)",
            color: "var(--cnt-ink-dim)",
          }}
        >
          <span style={{ color: "var(--cnt-ink-soft)" }}>Also covered as you grow:</span>
          {[
            "Multi-branch stock transfer",
            "Purchase orders & vendors",
            "Staff shifts & payroll",
            "Returns & exchanges",
            "Discount rules",
            "Barcode label design",
          ].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full" style={{ background: "var(--cnt-accent)" }} />
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
