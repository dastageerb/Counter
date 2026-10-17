import "./landing.css";
import { Nav, Hero } from "./sections/hero";
import { Proof } from "./sections/proof";
import { Features } from "./sections/features";
import { Workflow } from "./sections/workflow";
import { Coverage } from "./sections/coverage";
import { Pricing } from "./sections/pricing";
import { Faq, FinalCta, Footer } from "./sections/closing";

/**
 * Counter — public landing page.
 *
 * Self-contained: it renders its own chrome, so it is intentionally excluded
 * from the app shell and the auth guard in `src/routes/__root.tsx`.
 *
 * White is the default canvas. The dark variant (optical mesh + grid + grain,
 * all CSS — no image assets) is opt-in via the `dark` prop, which the route
 * drives from `?dark=1`.
 */
export function LandingPage({
  dark = false,
  onToggleTheme,
}: {
  dark?: boolean;
  onToggleTheme?: () => void;
}) {
  return (
    <div
      className={`cnt cnt-grain ${dark ? "" : "cnt-light"}`}
      data-theme={dark ? "dark" : "light"}
    >
      {/* decorative backdrop layers — sit behind all content */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[900px] overflow-hidden"
        aria-hidden="true"
      >
        <div className="cnt-mesh" />
        <div className="cnt-grid" />
      </div>

      <Nav dark={dark} onToggleTheme={onToggleTheme} />
      <Hero />

      <Proof />
      <Features />
      <Workflow />
      <Coverage />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}
