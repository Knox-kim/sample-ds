// IRIS Design System — Animation Tokens
// Consolidated from transition values across the codebase.

export const duration = {
  instant: "80ms",
  fast: "120ms",
  normal: "200ms",
  slow: "300ms",
} as const;

export const easing = {
  linear: "linear",
  ease: "cubic-bezier(0.2, 0.9, 0.25, 1.1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

export const transition = {
  fast: `${duration.instant} ${easing.linear}`,
  normal: `${duration.normal} ${easing.ease}`,
  slow: `${duration.slow} ${easing.easeInOut}`,
} as const;

// ── CSS Custom Property Map ──────────────────────────────

export const cssVars = {
  "--iris-duration-instant": duration.instant,
  "--iris-duration-fast": duration.fast,
  "--iris-duration-normal": duration.normal,
  "--iris-duration-slow": duration.slow,
} as const;
