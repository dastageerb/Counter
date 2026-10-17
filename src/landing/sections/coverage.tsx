import { Reveal, Section, SectionHead } from "../primitives";

/* Deliberately a capability inventory, not invented customer quotes.
   Swap in real logos/quotes once you have them — but never fake them on a
   page that is trying to earn trust from shop owners. */

const GROUPS = [
  {
    title: "Billing",
    items: [
      "Fast keyboard-first bill screen",
      "Barcode scan & weighable items",
      "Hold, resume & split bills",
      "Line and bill-level discounts",
      "Cash, card, bank, credit & split payment",
      "Returns and exchanges with stock restore",
    ],
  },
  {
    title: "Inventory",
    items: [
      "Real-time stock on every sale or return",
      "Low-stock and reorder alerts",
      "Expiry tracking with near-expiry flags",
      "Wastage & damage with reasons",
      "Batch and warehouse movement",
      "Stock reconciliation after offline use",
    ],
  },
  {
    title: "Khata & credit",
    items: [
      "Customer ledger with running balance",
      "Partial payments and settlements",
      "Credit limits per customer",
      "Ageing view of outstanding dues",
      "Balance printed on the receipt",
      "Reminder-ready customer list",
    ],
  },
  {
    title: "Money",
    items: [
      "Day open and day close cash counts",
      "Cash in / cash out with reasons",
      "Expense and vendor payment records",
      "Profit and margin per item",
      "Sales tax summary on every bill",
      "Accounts and cashflow view",
    ],
  },
  {
    title: "People & operations",
    items: [
      "Role-based access (counter, manager, owner)",
      "Staff shifts and payroll inputs",
      "Purchase orders to vendors",
      "Production / assembly jobs",
      "Audit log of voids and edits",
      "Discount approval limits",
    ],
  },
  {
    title: "Control & reach",
    items: [
      "Multi-branch with per-branch stock",
      "Branch transfers between locations",
      "Thermal, barcode and A4 printing",
      "Excel and PDF exports",
      "Per-tenant packages and limits",
      "Super-admin tenant management",
    ],
  },
];

export function Coverage() {
  return (
    <Section id="coverage">
      <SectionHead
        eyebrow="What's in the box"
        title="The whole shop, not a billing demo"
        body="One subscription covers the counter, the stockroom, the ledger and the owner's reports — with no add-on modules to buy later."
      />

      <div
        className="mt-14 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3"
        style={{ borderColor: "var(--cnt-line)", background: "var(--cnt-line)" }}
      >
        {GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={i * 50} className="h-full">
            <div className="h-full p-6" style={{ background: "var(--cnt-bg-2)" }}>
              <h3
                className="flex items-center gap-2.5 text-[12px] font-medium uppercase tracking-[0.14em]"
                style={{ color: "var(--cnt-ink-dim)" }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--cnt-accent)" }}
                />
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[13.5px] leading-snug"
                    style={{ color: "var(--cnt-ink-soft)" }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="mt-[3px] h-3.5 w-3.5 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.5 8.5l3 3 6-7"
                        fill="none"
                        stroke="var(--cnt-accent-2)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
