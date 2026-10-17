import { ArrowRight, Check, MessageSquare, Sparkles, Tag, Mail } from "lucide-react";
import { Reveal, Section, SectionHead } from "../primitives";

type Tier = {
  name: string;
  originalPrice?: string;
  price: string;
  discountBadge?: string;
  period: string;
  blurb: string;
  features: string[];
  cta: string;
  href: string;
  emailSubject: string;
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Counter",
    originalPrice: "Rs 4,500",
    price: "Rs 2,250",
    discountBadge: "50% OFF",
    period: "/ month",
    blurb: "One till, one shop. Everything a single-counter store needs to stop billing on paper.",
    features: [
      "1 counter / 1 branch",
      "Unlimited bills & products",
      "Khata ledger for customers",
      "Offline billing + sync",
      "Day close & basic reports",
      "Thermal receipt printing",
    ],
    cta: "Start Trial on WhatsApp",
    href: "https://wa.me/923170319398?text=Hi%20Dastageer,%20I%20would%20like%20to%20start%20the%2014-day%20trial%20for%20the%20Counter%20plan%20(Rs%202,250/mo)%20for%20my%20store.",
    emailSubject: "Counter Plan (Rs 2,250/mo) Trial Request",
  },
  {
    name: "Store",
    originalPrice: "Rs 9,500",
    price: "Rs 4,500",
    discountBadge: "53% OFF",
    period: "/ month",
    blurb: "For shops with staff, multiple counters and stock that actually moves.",
    features: [
      "Up to 4 counters / 1 branch",
      "Roles: cashier, manager, owner",
      "Purchase orders & vendors",
      "Wastage, expiry & returns control",
      "Discount rules with approval limits",
      "Excel / PDF exports + audit log",
    ],
    cta: "Start Trial on WhatsApp",
    href: "https://wa.me/923170319398?text=Hi%20Dastageer,%20I%20would%20like%20to%20start%20the%2014-day%20trial%20for%20the%20Store%20plan%20(Rs%204,500/mo)%20for%20my%20store.",
    emailSubject: "Store Plan (Rs 4,500/mo) Trial Request",
    featured: true,
  },
  {
    name: "Multi-branch",
    price: "Custom",
    discountBadge: "50% Setup Waiver",
    period: "",
    blurb: "Chain pricing with branch transfers, consolidated reporting and onboarding help.",
    features: [
      "Unlimited branches & counters",
      "Branch transfers & consolidated P&L",
      "Warehouse and production modules",
      "Data migration from your old system",
      "Priority support & training on site",
      "Invoice on company letterhead",
    ],
    cta: "Talk on WhatsApp",
    href: "https://wa.me/923170319398?text=Hi%20Dastageer,%20I%20am%20interested%20in%20custom%20Multi-branch%20pricing%20for%20my%20retail%20chain.",
    emailSubject: "Multi-branch Custom Pricing Inquiry",
  },
];

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHead
        align="center"
        eyebrow="Pricing · 50% Discount"
        title="Priced per shop, not per bill"
        body="Every plan includes offline billing, khata, inventory and reports. Special 50%+ discount applied on current rates. To start your trial or make an enquiry, connect via WhatsApp or email."
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {TIERS.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 70} className={tier.featured ? "lg:-mt-4" : ""}>
            <article
              className={`cnt-card relative flex h-full flex-col p-6 sm:p-7 ${tier.featured ? "cnt-card--sheen" : ""}`}
              style={
                tier.featured
                  ? {
                      borderColor: "color-mix(in oklab, var(--cnt-accent) 42%, transparent)",
                      background:
                        "linear-gradient(180deg, color-mix(in oklab, var(--cnt-accent) 9%, var(--cnt-panel)), var(--cnt-bg-2))",
                    }
                  : undefined
              }
            >
              {tier.featured ? (
                <span
                  className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-wider"
                  style={{
                    background: "color-mix(in oklab, var(--cnt-accent) 18%, transparent)",
                    color: "var(--cnt-accent)",
                  }}
                >
                  <Sparkles className="h-3 w-3" />
                  Most shops pick this
                </span>
              ) : null}

              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-semibold tracking-tight">{tier.name}</h3>
                {!tier.featured && tier.discountBadge && (
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold font-mono tracking-wider uppercase"
                    style={{
                      background: "color-mix(in oklab, var(--cnt-accent-2) 16%, transparent)",
                      color: "var(--cnt-accent-2)",
                    }}
                  >
                    <Tag className="h-2.5 w-2.5" />
                    {tier.discountBadge}
                  </span>
                )}
              </div>

              {/* Price row with slashed original rate */}
              <div className="mt-3 flex flex-col justify-end min-h-[58px]">
                {tier.originalPrice && (
                  <div className="flex items-center gap-2 mb-0.5">
                    <span
                      className="text-[13px] font-mono line-through opacity-70"
                      style={{ color: "var(--cnt-ink-dim)" }}
                    >
                      {tier.originalPrice}
                    </span>
                    <span
                      className="rounded px-1.5 py-0.2 text-[9.5px] font-bold font-mono uppercase"
                      style={{
                        background: "color-mix(in oklab, var(--cnt-accent-2) 20%, transparent)",
                        color: "var(--cnt-accent-2)",
                      }}
                    >
                      {tier.discountBadge}
                    </span>
                  </div>
                )}
                <div className="flex items-baseline gap-1.5">
                  <span className="num text-3xl font-bold tracking-tight" style={{ color: "var(--cnt-ink)" }}>
                    {tier.price}
                  </span>
                  <span className="text-[13px]" style={{ color: "var(--cnt-ink-dim)" }}>
                    {tier.period}
                  </span>
                </div>
              </div>

              <p
                className="mt-3 text-[13.5px] leading-relaxed"
                style={{ color: "var(--cnt-ink-soft)" }}
              >
                {tier.blurb}
              </p>

              <ul
                className="mt-6 space-y-2.5 border-t pt-5"
                style={{ borderColor: "var(--cnt-line)" }}
              >
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-2.5 text-[13.5px]"
                    style={{ color: "var(--cnt-ink-soft)" }}
                  >
                    <Check
                      className="mt-[3px] h-3.5 w-3.5 shrink-0"
                      style={{ color: "var(--cnt-accent-2)" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-2">
                <a
                  href={tier.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`cnt-btn w-full flex items-center justify-center gap-2 ${
                    tier.featured ? "cnt-btn--primary" : "cnt-btn--ghost"
                  }`}
                >
                  <MessageSquare className="h-4 w-4" />
                  {tier.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:dastageerb44@gmail.com?subject=${encodeURIComponent(tier.emailSubject)}`}
                  className="text-center text-[12px] transition-colors hover:underline"
                  style={{ color: "var(--cnt-ink-dim)" }}
                >
                  or email dastageerb44@gmail.com
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Direct Contact & Inquiries Bar */}
      <div
        className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border p-5"
        style={{ borderColor: "var(--cnt-line)", background: "var(--cnt-panel-2)" }}
      >
        <div className="text-center sm:text-left">
          <div className="text-sm font-semibold" style={{ color: "var(--cnt-ink)" }}>
            Need a custom onboarding or have questions before starting?
          </div>
          <div className="text-xs" style={{ color: "var(--cnt-ink-dim)" }}>
            Chat directly with Ghulam Dastageer for 1-on-1 setup assistance.
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <a
            href="https://wa.me/923170319398?text=Hi%20Dastageer,%20I'm%20inquiring%20about%20Counter%20POS."
            target="_blank"
            rel="noopener noreferrer"
            className="cnt-btn cnt-btn--primary !h-10 !px-4 text-xs flex items-center gap-2"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            WhatsApp: +92 317 0319398
          </a>
          <a
            href="mailto:dastageerb44@gmail.com?subject=Counter%20POS%20Enquiry"
            className="cnt-btn cnt-btn--ghost !h-10 !px-4 text-xs flex items-center gap-1.5"
          >
            <Mail className="h-3.5 w-3.5" />
            dastageerb44@gmail.com
          </a>
        </div>
      </div>

      <div
        className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px]"
        style={{ color: "var(--cnt-ink-dim)" }}
      >
        <span>14-day trial on every plan</span>
        <span>•</span>
        <span>No setup fee</span>
        <span>•</span>
        <span>Your data exports any time</span>
        <span>•</span>
        <span>Cancel at the end of the month</span>
      </div>
    </Section>
  );
}
