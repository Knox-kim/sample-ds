// IRIS Design System
// Independent token system for iris-frontend.

// ── Tokens ───────────────────────────────────────────────
export { palette, color, venue, protocol, asset, riskTier } from "./tokens/colors";
export { fontFamily, fontWeight, typeScale, textStyle } from "./tokens/typography";
export { space, layout, container } from "./tokens/spacing";
export { radius } from "./tokens/radius";
export { shadow } from "./tokens/shadows";
export { duration, easing, transition } from "./tokens/animation";

// ── CSS Variable Generation ──────────────────────────────
export { generateCssVars } from "./css-vars";

// ── Types ────────────────────────────────────────────────
export type { ColorToken, TypeScaleKey, SpaceKey, RadiusKey, ShadowKey } from "./types";
