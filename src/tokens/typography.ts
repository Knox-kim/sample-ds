// IRIS Design System — Typography Tokens
// Consolidated from 30+ font sizes and 20+ letter-spacing values.
// Scale based on prime-design-system's proven t10–t36 steps.

export const fontFamily = {
  sans: 'var(--font-sans), ui-sans-serif, system-ui, sans-serif',
  mono: 'var(--font-mono), ui-monospace, SFMono-Regular, monospace',
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

// ── Type Scale ───────────────────────────────────────────
// Each step: { fontSize, lineHeight, letterSpacing }
// Usage: style={typeScale.t14} or spread into CSSProperties.

export const typeScale = {
  t10: {
    fontSize: 10,
    lineHeight: "12px",
    letterSpacing: "-0.25px",
  },
  t12: {
    fontSize: 12,
    lineHeight: "14px",
    letterSpacing: "-0.25px",
  },
  t14: {
    fontSize: 14,
    lineHeight: "16px",
    letterSpacing: "-0.35px",
  },
  t16: {
    fontSize: 16,
    lineHeight: "18px",
    letterSpacing: "-0.4px",
  },
  t20: {
    fontSize: 20,
    lineHeight: "24px",
    letterSpacing: "-0.5px",
  },
  t24: {
    fontSize: 24,
    lineHeight: "28px",
    letterSpacing: "-0.6px",
  },
  t36: {
    fontSize: 36,
    lineHeight: "48px",
    letterSpacing: "-0.6px",
  },
} as const;

// ── Composite Text Styles ────────────────────────────────
// Common pairings of scale + weight, ready to spread.

export const textStyle = {
  caption: { ...typeScale.t10, fontWeight: fontWeight.medium },
  label: { ...typeScale.t12, fontWeight: fontWeight.medium },
  body: { ...typeScale.t14, fontWeight: fontWeight.medium },
  bodyLarge: { ...typeScale.t16, fontWeight: fontWeight.medium },
  heading3: { ...typeScale.t20, fontWeight: fontWeight.bold },
  heading2: { ...typeScale.t24, fontWeight: fontWeight.bold },
  heading1: { ...typeScale.t36, fontWeight: fontWeight.medium },
} as const;

// ── CSS Custom Property Map ──────────────────────────────

export const cssVars = {
  "--iris-font-sans": fontFamily.sans,
  "--iris-font-mono": fontFamily.mono,

  "--iris-t10-size": "10px",
  "--iris-t10-line": "12px",
  "--iris-t10-ls": "-0.25px",

  "--iris-t12-size": "12px",
  "--iris-t12-line": "14px",
  "--iris-t12-ls": "-0.25px",

  "--iris-t14-size": "14px",
  "--iris-t14-line": "16px",
  "--iris-t14-ls": "-0.35px",

  "--iris-t16-size": "16px",
  "--iris-t16-line": "18px",
  "--iris-t16-ls": "-0.4px",

  "--iris-t20-size": "20px",
  "--iris-t20-line": "24px",
  "--iris-t20-ls": "-0.5px",

  "--iris-t24-size": "24px",
  "--iris-t24-line": "28px",
  "--iris-t24-ls": "-0.6px",

  "--iris-t36-size": "36px",
  "--iris-t36-line": "48px",
  "--iris-t36-ls": "-0.6px",
} as const;
