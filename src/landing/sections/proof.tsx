import { Reveal } from "../primitives";

const SEGMENTS = [
  "Kiryana & general stores",
  "Pharmacies",
  "Supermarkets",
  "Wholesale & distribution",
  "Bakeries",
  "Hardware stores",
  "Cosmetics & personal care",
  "Mobile & electronics",
  "Apparel",
  "Stationery",
  "Frozen & dairy",
  "Building material",
];

export function Proof() {
  return (
    <div className="relative px-5 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-12">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="text-center text-[13px]" style={{ color: "var(--cnt-ink-dim)" }}>
            Built for the shops that keep the street moving — one counter or thirty.
          </p>
        </Reveal>

        <div className="cnt-fade-x mt-7 overflow-hidden">
          <div className="cnt-marquee gap-3">
            {[0, 1].map((pass) => (
              <div key={pass} className="flex shrink-0 gap-3 pr-3" aria-hidden={pass === 1}>
                {SEGMENTS.map((s) => (
                  <span
                    key={s}
                    className="whitespace-nowrap rounded-full border px-4 py-2 text-[13px]"
                    style={{
                      borderColor: "var(--cnt-line)",
                      color: "var(--cnt-ink-soft)",
                      background: "color-mix(in oklab, var(--cnt-panel) 40%, transparent)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
