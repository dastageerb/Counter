import { ArrowRight, Barcode, Menu, Moon, Play, Search, Sun, UserPlus, WifiOff, X } from "lucide-react";
import { useState } from "react";
import { Mark, Wordmark } from "../primitives";

const NAV = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#workflow" },
  { label: "Coverage", href: "#coverage" },
  { label: "Pricing", href: "#pricing" },
  { label: "Questions", href: "#faq" },
];

export function Nav({
  dark = false,
  onToggleTheme,
}: {
  dark?: boolean;
  onToggleTheme?: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-200"
      style={{
        borderColor: "var(--cnt-line)",
        background: "color-mix(in oklab, var(--cnt-bg) 78%, transparent)",
      }}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-6 px-5 sm:px-8">
        <a href="#top" className="shrink-0">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-[13px] transition-colors"
              style={{ color: "var(--cnt-ink-soft)" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          {onToggleTheme && (
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={dark ? "Switch to white mode" : "Switch to dark mode"}
              title={dark ? "Switch to white mode" : "Switch to dark mode"}
              className="cnt-btn cnt-btn--ghost !h-9 !w-9 !px-0 flex items-center justify-center rounded-lg"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
          <a href="/login" className="cnt-btn cnt-btn--ghost !h-9 !text-[13px]">
            Sign in
          </a>
          <a href="#pricing" className="cnt-btn cnt-btn--primary !h-9 !text-[13px]">
            Start free
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          {onToggleTheme && (
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={dark ? "Switch to white mode" : "Switch to dark mode"}
              title={dark ? "Switch to white mode" : "Switch to dark mode"}
              className="cnt-btn cnt-btn--ghost !h-9 !w-9 !px-0 flex items-center justify-center rounded-lg"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="cnt-btn cnt-btn--ghost !h-9 !w-9 !px-0"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          className="border-t px-5 pb-5 pt-3 md:hidden"
          style={{ borderColor: "var(--cnt-line)", background: "var(--cnt-bg)" }}
        >
          <div className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b py-3 text-sm"
                style={{ borderColor: "var(--cnt-line)", color: "var(--cnt-ink-soft)" }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <a href="/login" className="cnt-btn cnt-btn--ghost flex-1">
              Sign in
            </a>
            <a
              href="#pricing"
              className="cnt-btn cnt-btn--primary flex-1"
              onClick={() => setOpen(false)}
            >
              Start free
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

/* --------------------------------------------------------------------------
   Hero
   -------------------------------------------------------------------------- */

export function Hero() {
  return (
    <div id="top" className="relative">
      <div className="relative px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-10">
          {/* Copy column */}
          <div>
            <h1 className="cnt-display text-[2.5rem] sm:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight">
              Your till keeps ringing when the internet{" "}
              <span
                className="rounded-lg px-2 py-0.5"
                style={{
                  background: "color-mix(in oklab, var(--cnt-accent) 14%, transparent)",
                  color: "var(--cnt-accent)",
                }}
              >
                doesn&apos;t.
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl text-base leading-relaxed sm:text-[17px]"
              style={{ color: "var(--cnt-ink-soft)" }}
            >
              Counter is the modern cashier, inventory, and{" "}
              <strong style={{ color: "var(--cnt-ink)" }}>khata ledger</strong> platform built for supermarkets and retail marts that can&apos;t afford queue downtime. Runs 100% locally on your counter hardware first, syncing to cloud PostgreSQL second.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="cnt-btn cnt-btn--primary !h-11 !px-5 text-sm"
              >
                Start 14-day trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="cnt-btn cnt-btn--ghost !h-11 !px-5 text-sm"
              >
                Explore POS Features
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Architecture & Reliability Matrix */}
            <div
              className="mt-8 grid grid-cols-3 gap-3 rounded-xl border p-4"
              style={{ borderColor: "var(--cnt-line)", background: "var(--cnt-panel-2)" }}
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "var(--cnt-ink-dim)" }}>
                  Architecture
                </div>
                <div className="text-lg font-bold font-mono tracking-tight sm:text-xl" style={{ color: "var(--cnt-accent-2)" }}>
                  Local-First
                </div>
                <div className="text-[11px] leading-tight" style={{ color: "var(--cnt-ink-dim)" }}>
                  instant in-browser billing
                </div>
              </div>

              <div className="border-l pl-3" style={{ borderColor: "var(--cnt-line)" }}>
                <div className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "var(--cnt-ink-dim)" }}>
                  Connectivity
                </div>
                <div className="text-lg font-bold font-mono tracking-tight sm:text-xl" style={{ color: "var(--cnt-accent)" }}>
                  Offline-Ready
                </div>
                <div className="text-[11px] leading-tight" style={{ color: "var(--cnt-ink-dim)" }}>
                  uninterrupted sales queue
                </div>
              </div>

              <div className="border-l pl-3" style={{ borderColor: "var(--cnt-line)" }}>
                <div className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "var(--cnt-ink-dim)" }}>
                  Hardware
                </div>
                <div className="text-lg font-bold font-mono tracking-tight sm:text-xl" style={{ color: "var(--cnt-ink)" }}>
                  Standard USB
                </div>
                <div className="text-[11px] leading-tight" style={{ color: "var(--cnt-ink-dim)" }}>
                  scanners, printers & scales
                </div>
              </div>
            </div>

            <p
              className="mt-4 flex items-center gap-2 text-xs"
              style={{ color: "var(--cnt-ink-dim)" }}
            >
              <WifiOff className="h-3.5 w-3.5" />
              Plug-and-play with existing hardware · Windows, Android, Linux & Web
            </p>
          </div>

          {/* Product visual column */}
          <HeroVisual />
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
   The hero visual: a faithful POS touchscreen terminal with live thermal
   receipt slip and physical hotkey control strip.
   -------------------------------------------------------------------------- */

const TILES = [
  { sku: "SKU-1042", name: "Basmati Rice 5kg", price: 2450, stock: 38 },
  { sku: "SKU-0871", name: "Sunflower Oil 1L", price: 640, stock: 12 },
  { sku: "SKU-2318", name: "Tea Leaves 950g", price: 1180, stock: 26 },
  { sku: "SKU-0094", name: "Wheat Flour 10kg", price: 1320, stock: 7 },
  { sku: "SKU-0455", name: "Sugar 1kg", price: 165, stock: 9 },
  { sku: "SKU-0782", name: "Cooking Oil 5L", price: 2980, stock: 4 },
];

/** Which tiles get "added" by the scan sweep, and in what order. */
const ADD_ORDER = [0, 1, 2];

const rs = (n: number) => `Rs ${n.toLocaleString("en-PK")}`;

export function HeroVisual() {
  const lines = ADD_ORDER.map((i, seq) => {
    const tile = TILES[i];
    return { ...tile, qty: seq === 1 ? 2 : 1 };
  });

  const subtotal = lines.reduce((sum, l) => sum + l.qty * l.price, 0);
  const tax = Math.round(subtotal * 0.05);
  const billDiscount = 150;
  const total = subtotal - billDiscount + tax;
  // Partial payment, so the "Paid / Due" pair reads like a real khata bill.
  const paid = 3500;

  // index → the order it lands in the cart, used to stagger the row animation
  const addedAt = new Map(ADD_ORDER.map((tileIndex, seq) => [tileIndex, seq]));

  return (
    <div id="see-it" className="relative">
      {/* soft accent bloom behind the panel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(60% 50% at 30% 0%, color-mix(in oklab, var(--cnt-accent) 20%, transparent), transparent 70%)",
        }}
      />

      {/* Floating Thermal Receipt Tape Spooling Out */}
      <div
        className="hidden xl:block absolute -top-8 -right-4 z-20 w-44 rounded-t-sm shadow-xl p-3 border font-mono text-[10px] transform rotate-1 select-none pointer-events-none"
        style={{
          background: "var(--cnt-panel)",
          borderColor: "var(--cnt-line)",
          boxShadow: "0 18px 40px -15px rgba(0,0,0,0.35)",
        }}
      >
        <div className="flex items-center justify-between pb-1 border-b" style={{ borderColor: "var(--cnt-line)" }}>
          <span className="font-bold tracking-widest text-[10px]" style={{ color: "var(--cnt-ink)" }}>GREEN MART</span>
          <span className="text-[8.5px] uppercase rounded px-1" style={{ background: "color-mix(in oklab, var(--cnt-accent-2) 18%, transparent)", color: "var(--cnt-accent-2)" }}>TILL-01</span>
        </div>
        <div className="mt-1 text-[8.5px]" style={{ color: "var(--cnt-ink-dim)" }}>
          04:15 PM · Inv #8491
        </div>
        <div className="my-1.5 border-b border-dashed" style={{ borderColor: "var(--cnt-line)" }} />
        <div className="space-y-1 text-[9px]">
          <div className="flex justify-between" style={{ color: "var(--cnt-ink-soft)" }}>
            <span>Rice 5kg x1</span>
            <span className="font-medium" style={{ color: "var(--cnt-ink)" }}>2,450</span>
          </div>
          <div className="flex justify-between" style={{ color: "var(--cnt-ink-soft)" }}>
            <span>Oil 1L x2</span>
            <span className="font-medium" style={{ color: "var(--cnt-ink)" }}>1,280</span>
          </div>
          <div className="flex justify-between" style={{ color: "var(--cnt-ink-soft)" }}>
            <span>Tea 950g x1</span>
            <span className="font-medium" style={{ color: "var(--cnt-ink)" }}>1,180</span>
          </div>
        </div>
        <div className="my-1.5 border-b border-dashed" style={{ borderColor: "var(--cnt-line)" }} />
        <div className="flex justify-between font-bold text-[10.5px]" style={{ color: "var(--cnt-accent)" }}>
          <span>TOTAL:</span>
          <span>Rs 5,006</span>
        </div>
        <div className="mt-1 text-[8px] text-center tracking-widest" style={{ color: "var(--cnt-ink-dim)" }}>
          ||| | ||||| || |||||| |
        </div>
      </div>

      {/* POS Terminal Chassis */}
      <div className="cnt-term rounded-2xl overflow-hidden border shadow-2xl" style={{ borderColor: "var(--cnt-line-strong)" }}>
        {/* Hardware POS Terminal Bezel Header */}
        <div
          className="flex items-center justify-between border-b px-4 py-2.5 font-mono text-[11px]"
          style={{
            borderColor: "var(--cnt-line)",
            background: "color-mix(in oklab, var(--cnt-bg-2) 95%, transparent)",
          }}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full animate-pulse" style={{ background: "var(--cnt-accent-2)" }} />
            <span className="font-bold tracking-wider text-[11px]" style={{ color: "var(--cnt-ink)" }}>
              TILL #01 · EXPRESS LANE
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10.5px]">
            <span
              className="rounded px-1.5 py-0.5 font-medium"
              style={{
                background: "color-mix(in oklab, var(--cnt-accent) 15%, transparent)",
                color: "var(--cnt-accent)",
              }}
            >
              SCANNER 2D
            </span>
            <span
              className="rounded px-1.5 py-0.5 font-medium"
              style={{
                background: "color-mix(in oklab, var(--cnt-accent-2) 15%, transparent)",
                color: "var(--cnt-accent-2)",
              }}
            >
              DEXIE OK
            </span>
          </div>
        </div>

        {/* LEFT: search + product tiles (mirrors billing.tsx) */}
        <div
          className="flex flex-col border-b sm:flex-row"
          style={{ borderColor: "var(--cnt-line)" }}
        >
          <div
            className="relative flex-1 order-2 border-t p-3 sm:order-1 sm:border-t-0"
            style={{ borderColor: "var(--cnt-line)" }}
          >
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2"
                style={{ color: "var(--cnt-ink-dim)" }}
              />
              <div
                className="cnt-caret flex h-9 items-center rounded-md border pl-8 text-[12px]"
                style={{
                  borderColor: "var(--cnt-line-strong)",
                  color: "var(--cnt-ink-dim)",
                  background: "var(--cnt-bg-2)",
                }}
              >
                Search name, SKU or scan barcode…
              </div>
            </div>

            <div className="cnt-tiles relative mt-2.5 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
              <div className="cnt-scan" aria-hidden="true" />
              {TILES.map((tile, i) => {
                const low = tile.stock <= 10;
                return (
                  <div
                    key={tile.sku}
                    className={`flex flex-col gap-1 rounded-lg border p-2 ${
                      addedAt.has(i) ? "cnt-tile--hit" : ""
                    }`}
                    style={
                      {
                        borderColor: "var(--cnt-line)",
                        background: "var(--cnt-panel)",
                        "--hit": addedAt.get(i) ?? 0,
                      } as React.CSSProperties
                    }
                  >
                    <div className="flex items-start justify-between gap-1">
                      <span
                        className="text-[11.5px] font-medium leading-tight"
                        style={{ color: "var(--cnt-ink)" }}
                      >
                        {tile.name}
                      </span>
                      {low ? (
                        <span
                          className="shrink-0 rounded-full px-1.5 py-0.5 text-[8.5px] uppercase"
                          style={{
                            background: "color-mix(in oklab, var(--cnt-warn) 18%, transparent)",
                            color: "color-mix(in oklab, var(--cnt-warn) 80%, var(--cnt-ink))",
                          }}
                        >
                          low
                        </span>
                      ) : null}
                    </div>
                    <span
                      className="font-mono text-[9.5px]"
                      style={{ color: "var(--cnt-ink-dim)" }}
                    >
                      {tile.sku}
                    </span>
                    <div className="mt-0.5 flex items-center justify-between">
                      <span
                        className="num text-[11.5px] font-semibold"
                        style={{ color: "var(--cnt-accent)" }}
                      >
                        {rs(tile.price)}
                      </span>
                      <span className="num text-[9.5px]" style={{ color: "var(--cnt-ink-dim)" }}>
                        stk {tile.stock}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT: cart aside (mirrors billing.tsx) */}
        <div className="grid sm:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div
            className="border-b sm:border-b-0 sm:border-r"
            style={{ borderColor: "var(--cnt-line)" }}
          >
            <div className="flex items-center justify-between px-3.5 py-2.5">
              <div>
                <div
                  className="text-[10px] uppercase tracking-wider"
                  style={{ color: "var(--cnt-ink-dim)" }}
                >
                  Current bill
                </div>
                <div className="text-[12.5px] font-semibold" style={{ color: "var(--cnt-ink)" }}>
                  Walk-in customer
                </div>
              </div>
              <span
                className="flex items-center gap-1 rounded-md border px-2 py-1 text-[10.5px]"
                style={{ borderColor: "var(--cnt-line-strong)", color: "var(--cnt-ink-soft)" }}
              >
                <UserPlus className="h-3 w-3" />
                Pick
              </span>
            </div>

            <ul className="border-t" style={{ borderColor: "var(--cnt-line)" }}>
              {lines.map((line, seq) => (
                <li
                  key={line.sku}
                  className="cnt-row flex items-center gap-2.5 border-b px-3.5 py-2"
                  style={{ borderColor: "var(--cnt-line)", "--i": seq } as React.CSSProperties}
                >
                  <div className="min-w-0 flex-1">
                    <div
                      className="truncate text-[12.5px] font-medium"
                      style={{ color: "var(--cnt-ink)" }}
                    >
                      {line.name}
                    </div>
                    <div className="font-mono text-[9.5px]" style={{ color: "var(--cnt-ink-dim)" }}>
                      {line.sku}
                    </div>
                  </div>
                  <div
                    className="num grid h-6 min-w-6 place-items-center rounded-md border px-1 text-[10.5px]"
                    style={{
                      borderColor: "var(--cnt-line-strong)",
                      color: "var(--cnt-ink-soft)",
                      background: "var(--cnt-panel-2)",
                    }}
                  >
                    {line.qty}
                  </div>
                  <div
                    className="num w-[62px] text-right text-[12.5px] font-semibold"
                    style={{ color: "var(--cnt-ink)" }}
                  >
                    {rs(line.qty * line.price)}
                  </div>
                </li>
              ))}
            </ul>

            {/* payment tabs, as in the real aside */}
            <div className="px-3.5 py-3">
              <div
                className="mb-2.5 flex gap-1 rounded-md p-0.5"
                style={{ background: "var(--cnt-panel-2)" }}
              >
                <span
                  className="flex-1 rounded py-1 text-center text-[11px] font-medium"
                  style={{ background: "var(--cnt-panel)", color: "var(--cnt-accent)" }}
                >
                  Discount
                </span>
                <span
                  className="flex-1 rounded py-1 text-center text-[11px]"
                  style={{ color: "var(--cnt-ink-dim)" }}
                >
                  Payment
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {["cash", "card", "bank", "credit"].map((m) => (
                  <span
                    key={m}
                    className="rounded-md border px-2 py-1 text-[10.5px] capitalize"
                    style={
                      m === "cash"
                        ? {
                            borderColor: "var(--cnt-accent)",
                            background: "color-mix(in oklab, var(--cnt-accent) 10%, transparent)",
                            color: "var(--cnt-accent)",
                          }
                        : { borderColor: "var(--cnt-line)", color: "var(--cnt-ink-dim)" }
                    }
                  >
                    {m}
                  </span>
                ))}
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {["F2 new · F4 checkout", "F8 Pay", "Esc Clear"].map((k) => (
                  <span key={k} className="cnt-kbd">
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* totals column */}
          <div className="flex flex-col">
            <div className="space-y-1.5 px-3.5 py-3 text-[12px]">
              <Line label="Subtotal" value={rs(subtotal)} />
              <Line label="Bill discount" value={`− ${rs(billDiscount)}`} accent />
              <Line label="Tax" value={rs(tax)} />
            </div>

            <div className="px-3.5">
              {/* the accent Total box from the real screen */}
              <div
                className="flex items-baseline justify-between rounded-md px-2.5 py-2"
                style={{ background: "color-mix(in oklab, var(--cnt-accent) 12%, transparent)" }}
              >
                <span
                  className="text-[10.5px] font-medium uppercase tracking-wider"
                  style={{ color: "var(--cnt-accent)" }}
                >
                  Total
                </span>
                <span
                  className="cnt-total num text-xl font-bold"
                  style={{ color: "var(--cnt-accent)" }}
                >
                  {rs(total)}
                </span>
              </div>
              <div className="mt-1.5 flex justify-between text-[10.5px]">
                <span style={{ color: "var(--cnt-ink-dim)" }}>Paid {rs(paid)}</span>
                <span className="num" style={{ color: "var(--cnt-warn)" }}>
                  Due {rs(total - paid)}
                </span>
              </div>
            </div>

            <div className="mt-auto px-3.5 pb-3.5 pt-3">
              <div
                className="flex h-10 items-center justify-center gap-2 rounded-md text-[12.5px] font-semibold"
                style={{ background: "var(--cnt-accent)", color: "var(--cnt-accent-ink)" }}
              >
                Checkout · {rs(total)}
                <span className="cnt-kbd !h-5 !border-current/40 !bg-transparent !text-[9.5px]">
                  F4
                </span>
              </div>

              {/* offline queue */}
              <div
                className="mt-2.5 flex items-center gap-2 text-[10.5px]"
                style={{ color: "var(--cnt-ink-dim)" }}
              >
                <span
                  className="relative grid h-4 w-4 place-items-center rounded-full"
                  style={{ background: "color-mix(in oklab, var(--cnt-warn) 22%, transparent)" }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--cnt-warn)" }}
                  />
                </span>
                <span>
                  <span className="cnt-ticker num font-mono" style={{ color: "var(--cnt-warn)" }}>
                    3
                  </span>{" "}
                  bills queued locally · syncs on reconnect
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hardware Hotkey Strip */}
        <div
          className="flex items-center justify-between border-t px-3.5 py-2 font-mono text-[10px] select-none"
          style={{
            borderColor: "var(--cnt-line)",
            background: "color-mix(in oklab, var(--cnt-bg-2) 90%, transparent)",
          }}
        >
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-semibold" style={{ color: "var(--cnt-ink-dim)" }}>HOTKEYS:</span>
            <span className="rounded border px-1.5 py-0.5 font-bold shadow-xs" style={{ borderColor: "var(--cnt-line)", background: "var(--cnt-panel)", color: "var(--cnt-ink)" }}>[F2] New</span>
            <span className="rounded border px-1.5 py-0.5 font-bold shadow-xs" style={{ borderColor: "var(--cnt-line)", background: "var(--cnt-panel)", color: "var(--cnt-ink)" }}>[F4] Bill</span>
            <span className="rounded border px-1.5 py-0.5 font-bold shadow-xs" style={{ borderColor: "var(--cnt-line)", background: "var(--cnt-panel)", color: "var(--cnt-ink)" }}>[F8] Split</span>
            <span className="rounded border px-1.5 py-0.5 font-bold shadow-xs" style={{ borderColor: "var(--cnt-line)", background: "var(--cnt-panel)", color: "var(--cnt-ink)" }}>[Esc] Void</span>
          </div>
          <span className="hidden sm:inline text-[9.5px]" style={{ color: "var(--cnt-ink-dim)" }}>Dexie.js Cache: Active</span>
        </div>
      </div>

      {/* Floating annotation, anchored clear of the panel. */}
      <div
        className="cnt-card cnt-card--sheen absolute -right-4 -bottom-10 hidden w-[212px] p-3.5 lg:block"
        style={{
          background: "linear-gradient(180deg, var(--cnt-panel), var(--cnt-panel-2))",
          boxShadow: "0 24px 60px -30px oklch(0 0 0 / 55%)",
        }}
      >
        <div className="flex items-center justify-between">
          <span
            className="text-[10.5px] uppercase tracking-wider"
            style={{ color: "var(--cnt-ink-dim)" }}
          >
            Today
          </span>
          <span
            className="rounded-full px-1.5 py-0.5 text-[9.5px] uppercase"
            style={{
              background: "color-mix(in oklab, var(--cnt-warn) 18%, transparent)",
              color: "color-mix(in oklab, var(--cnt-warn) 80%, var(--cnt-ink))",
            }}
          >
            2 low
          </span>
        </div>
        <div
          className="num mt-1.5 text-lg font-semibold tracking-tight"
          style={{ color: "var(--cnt-ink)" }}
        >
          Rs 184,300
        </div>
        <div className="mt-2 flex h-8 items-end gap-1">
          {[38, 52, 44, 66, 58, 81, 72].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background:
                  i === 5
                    ? "var(--cnt-accent)"
                    : "color-mix(in oklab, var(--cnt-accent) 26%, transparent)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Line({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <dt style={{ color: "var(--cnt-ink-dim)" }}>{label}</dt>
      <dd
        className="num font-medium"
        style={{
          color: accent ? "var(--cnt-success, var(--cnt-accent-2))" : "var(--cnt-ink-soft)",
        }}
      >
        {value}
      </dd>
    </div>
  );
}
