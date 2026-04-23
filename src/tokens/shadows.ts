// IRIS Design System — Shadow Tokens
// Currently the codebase uses almost no shadows (only 1x shadow-sm).
// These establish a minimal elevation scale for future use.

export const shadow = {
  none: "none",
  xs: "0 1px 2px rgba(0, 0, 0, 0.04)",
  sm: "0 2px 4px rgba(0, 0, 0, 0.06)",
  md: "0 4px 12px rgba(0, 0, 0, 0.08)",
  lg: "0 8px 24px rgba(0, 0, 0, 0.12)",
  xl: "0 16px 48px rgba(0, 0, 0, 0.16)",
} as const;

// ── CSS Custom Property Map ──────────────────────────────

export const cssVars = {
  "--iris-shadow-none": shadow.none,
  "--iris-shadow-xs": shadow.xs,
  "--iris-shadow-sm": shadow.sm,
  "--iris-shadow-md": shadow.md,
  "--iris-shadow-lg": shadow.lg,
  "--iris-shadow-xl": shadow.xl,
} as const;
