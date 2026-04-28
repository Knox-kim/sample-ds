// IRIS Design System
// Independent token system for iris-frontend.

// ── Tokens ───────────────────────────────────────────────
export { palette, color, venue, protocol, asset, riskTier } from "./tokens/colors";
export { fontFamily, fontWeight, typeScale, textStyle, iconSize } from "./tokens/typography";
export { space, layout, container } from "./tokens/spacing";
export { radius } from "./tokens/radius";
export { shadow } from "./tokens/shadows";
export { duration, easing, transition } from "./tokens/animation";
export { zIndex } from "./tokens/z-index";
export { breakpoint, mq } from "./tokens/breakpoints";
export { borderWidth, focusRing } from "./tokens/borders";
export { opacity } from "./tokens/opacity";

// ── CSS Variable Generation ──────────────────────────────
export { generateCssVars } from "./css-vars";

// ── Types ────────────────────────────────────────────────
export type {
  ColorToken,
  TypeScaleKey,
  SpaceKey,
  RadiusKey,
  ShadowKey,
  ZIndexKey,
  BreakpointKey,
  BorderWidthKey,
  OpacityKey,
  IconSizeKey,
} from "./types";
