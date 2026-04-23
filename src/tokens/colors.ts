// IRIS Design System — Color Tokens
// Consolidated from 94 unique values across the codebase.
// Every token here maps to an actual, high-frequency usage pattern.

// ── Primitive Palette ────────────────────────────────────
// Raw color values. Use semantic tokens below in components.

export const palette = {
  white: "#FFFFFF",
  black: "#000000",

  neutral: {
    950: "#111111",
    900: "#1A1A1A",
    800: "#363636",
    700: "#4A4A4A",
    600: "#6A6A6A",
    500: "#9B9B9B",
    400: "#A4A7AB",
    300: "#E7E7E7",
    200: "#F2F3F5",
    150: "#F2F4F9",
    100: "#FAFAFA",
    50: "#FFFFFF",
  },

  blue: {
    600: "#1A73E8",
    500: "#4C96F5",
    400: "#6AABF7",
    100: "rgba(76, 150, 245, 0.14)",
    50: "rgba(76, 150, 245, 0.08)",
  },

  red: {
    600: "#C62828",
    500: "#E5303A",
    400: "#E85C5C",
    100: "rgba(232, 92, 92, 0.12)",
    50: "rgba(232, 92, 92, 0.06)",
  },

  yellow: {
    600: "#C68A00",
    500: "#E5A519",
    400: "#D8B64A",
    100: "rgba(216, 182, 74, 0.14)",
    50: "rgba(216, 182, 74, 0.06)",
  },

  green: {
    600: "#0B8A42",
    500: "#0EA753",
    400: "#63C58B",
    100: "rgba(14, 167, 83, 0.12)",
    50: "rgba(14, 167, 83, 0.06)",
  },
} as const;

// ── Semantic Tokens ──────────────────────────────────────
// Use these in components. Maps intent → color.

export const color = {
  bg: {
    default: palette.white,
    subtle: palette.neutral[150],
    muted: palette.neutral[200],
    page: palette.neutral[100],
    inverse: palette.neutral[800],
    overlay: "rgba(0, 0, 0, 0.5)",
  },

  text: {
    default: palette.neutral[800],
    subtle: palette.neutral[500],
    muted: palette.neutral[400],
    disabled: palette.neutral[400],
    inverse: palette.white,
    link: palette.blue[500],
  },

  border: {
    default: palette.neutral[300],
    strong: "rgba(54, 54, 54, 0.25)",
    subtle: "rgba(54, 54, 54, 0.06)",
    focus: palette.blue[500],
  },

  icon: {
    default: palette.neutral[500],
    subtle: palette.neutral[400],
    inverse: palette.white,
  },

  primary: {
    default: palette.blue[500],
    hover: palette.blue[600],
    subtle: palette.blue[100],
    text: palette.white,
  },

  error: {
    default: palette.red[500],
    hover: palette.red[600],
    subtle: palette.red[100],
    text: palette.red[500],
  },

  warning: {
    default: palette.yellow[500],
    hover: palette.yellow[600],
    subtle: palette.yellow[100],
    text: palette.yellow[500],
  },

  success: {
    default: palette.green[500],
    hover: palette.green[600],
    subtle: palette.green[100],
    text: palette.green[500],
  },
} as const;

// ── Protocol / Venue Brand Colors ────────────────────────
// Canonical brand color per protocol. One source of truth.

export const venue = {
  aave: "#2EBAC6",
  spark: "#F5AC3D",
  morpho: "#5B5FEF",
  fluid: "#0A6B6B",
} as const;

export const protocol = {
  keyrock: "#627EEA",
  apostro: "#D17A2B",
  gauntlet: "#1A73E8",
  circle: "#2775CA",
  re7: "#20C3A5",
  steakhouse: "#A04B3F",
} as const;

// ── Token (Asset) Brand Colors ───────────────────────────

export const asset = {
  eth: "#627EEA",
  usdc: "#2775CA",
  usdt: "#26A17B",
  wsteth: "#00A3FF",
  steth: "#00A3FF",
} as const;

// ── Rate Risk Tiers ──────────────────────────────────────

export const riskTier = {
  tight: "#FF9385",
  mid: "#F2CC64",
  wide: "#24CB6F",
} as const;

// ── CSS Custom Property Map ──────────────────────────────
// For generating CSS variables from tokens.

export const cssVars = {
  "--iris-bg-default": color.bg.default,
  "--iris-bg-subtle": color.bg.subtle,
  "--iris-bg-muted": color.bg.muted,
  "--iris-bg-page": color.bg.page,
  "--iris-bg-inverse": color.bg.inverse,
  "--iris-bg-overlay": color.bg.overlay,

  "--iris-text-default": color.text.default,
  "--iris-text-subtle": color.text.subtle,
  "--iris-text-muted": color.text.muted,
  "--iris-text-disabled": color.text.disabled,
  "--iris-text-inverse": color.text.inverse,

  "--iris-border-default": color.border.default,
  "--iris-border-strong": color.border.strong,
  "--iris-border-subtle": color.border.subtle,
  "--iris-border-focus": color.border.focus,

  "--iris-primary": color.primary.default,
  "--iris-primary-hover": color.primary.hover,
  "--iris-primary-subtle": color.primary.subtle,

  "--iris-error": color.error.default,
  "--iris-warning": color.warning.default,
  "--iris-success": color.success.default,
} as const;
