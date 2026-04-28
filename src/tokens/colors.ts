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
    700: "#1557B0",
    600: "#1A73E8",
    500: "#4C96F5",
    400: "#6AABF7",
    100: "rgba(76, 150, 245, 0.14)",
    50: "rgba(76, 150, 245, 0.08)",
  },

  red: {
    700: "#A52020",
    600: "#C62828",
    500: "#E5303A",
    400: "#E85C5C",
    100: "rgba(232, 92, 92, 0.12)",
    50: "rgba(232, 92, 92, 0.06)",
  },

  yellow: {
    700: "#A17200",
    600: "#C68A00",
    500: "#E5A519",
    400: "#D8B64A",
    100: "rgba(216, 182, 74, 0.14)",
    50: "rgba(216, 182, 74, 0.06)",
  },

  green: {
    700: "#086E35",
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
    disabled: palette.neutral[200],
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
    disabled: palette.neutral[300],
  },

  icon: {
    default: palette.neutral[500],
    subtle: palette.neutral[400],
    inverse: palette.white,
    primary: palette.blue[500],
    error: palette.red[500],
    warning: palette.yellow[500],
    success: palette.green[500],
  },

  primary: {
    default: palette.blue[500],
    hover: palette.blue[600],
    active: palette.blue[700],
    subtle: palette.blue[100],
    text: palette.white,
  },

  error: {
    default: palette.red[500],
    hover: palette.red[600],
    active: palette.red[700],
    subtle: palette.red[100],
    text: palette.red[500],
  },

  warning: {
    default: palette.yellow[500],
    hover: palette.yellow[600],
    active: palette.yellow[700],
    subtle: palette.yellow[100],
    text: palette.yellow[500],
  },

  success: {
    default: palette.green[500],
    hover: palette.green[600],
    active: palette.green[700],
    subtle: palette.green[100],
    text: palette.green[500],
  },

  risk: {
    tight: palette.red[400],
    mid: palette.yellow[400],
    wide: palette.green[400],
  },
} as const;

// ── CSS Custom Property Map ──────────────────────────────

export const cssVars = {
  // bg
  "--iris-bg-default": color.bg.default,
  "--iris-bg-subtle": color.bg.subtle,
  "--iris-bg-muted": color.bg.muted,
  "--iris-bg-page": color.bg.page,
  "--iris-bg-inverse": color.bg.inverse,
  "--iris-bg-overlay": color.bg.overlay,
  "--iris-bg-disabled": color.bg.disabled,

  // text
  "--iris-text-default": color.text.default,
  "--iris-text-subtle": color.text.subtle,
  "--iris-text-muted": color.text.muted,
  "--iris-text-disabled": color.text.disabled,
  "--iris-text-inverse": color.text.inverse,
  "--iris-text-link": color.text.link,

  // border
  "--iris-border-default": color.border.default,
  "--iris-border-strong": color.border.strong,
  "--iris-border-subtle": color.border.subtle,
  "--iris-border-focus": color.border.focus,
  "--iris-border-disabled": color.border.disabled,

  // icon
  "--iris-icon-default": color.icon.default,
  "--iris-icon-subtle": color.icon.subtle,
  "--iris-icon-inverse": color.icon.inverse,
  "--iris-icon-primary": color.icon.primary,
  "--iris-icon-error": color.icon.error,
  "--iris-icon-warning": color.icon.warning,
  "--iris-icon-success": color.icon.success,

  // primary
  "--iris-primary": color.primary.default,
  "--iris-primary-hover": color.primary.hover,
  "--iris-primary-active": color.primary.active,
  "--iris-primary-subtle": color.primary.subtle,

  // error
  "--iris-error": color.error.default,
  "--iris-error-hover": color.error.hover,
  "--iris-error-active": color.error.active,
  "--iris-error-subtle": color.error.subtle,
  "--iris-error-text": color.error.text,

  // warning
  "--iris-warning": color.warning.default,
  "--iris-warning-hover": color.warning.hover,
  "--iris-warning-active": color.warning.active,
  "--iris-warning-subtle": color.warning.subtle,
  "--iris-warning-text": color.warning.text,

  // success
  "--iris-success": color.success.default,
  "--iris-success-hover": color.success.hover,
  "--iris-success-active": color.success.active,
  "--iris-success-subtle": color.success.subtle,
  "--iris-success-text": color.success.text,

  // risk
  "--iris-risk-tight": color.risk.tight,
  "--iris-risk-mid": color.risk.mid,
  "--iris-risk-wide": color.risk.wide,
} as const;
