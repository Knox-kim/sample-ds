// IRIS Design System — Spacing Tokens
// 4px base grid. Consolidated from 29+ inline padding combinations.

export const space = {
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
} as const;

// ── Named Spacing ────────────────────────────────────────
// Semantic aliases for common layout roles.

export const layout = {
  pageInset: space[6],       // 24px — page-level horizontal padding
  sectionGap: space[8],      // 32px — gap between major sections
  cardPadding: space[5],     // 20px — inner padding of card containers
  cardGap: space[4],         // 16px — gap between cards in a grid
  fieldGap: space[2],        // 8px  — gap between form fields
  inlineGap: space[1],       // 4px  — gap between inline elements (icon + text)
  stackGap: space[3],        // 12px — gap in vertical stacks
} as const;

// ── Container Widths ─────────────────────────────────────
// Consolidated from 7 different max-width values.

export const container = {
  sm: 440,     // modals, narrow dialogs
  md: 640,     // form cards, medium panels
  lg: 1080,    // content sections
  xl: 1440,    // full-width layouts
} as const;

// ── CSS Custom Property Map ──────────────────────────────

export const cssVars = {
  "--iris-space-0": "0px",
  "--iris-space-0-5": "2px",
  "--iris-space-1": "4px",
  "--iris-space-1-5": "6px",
  "--iris-space-2": "8px",
  "--iris-space-3": "12px",
  "--iris-space-4": "16px",
  "--iris-space-5": "20px",
  "--iris-space-6": "24px",
  "--iris-space-8": "32px",
  "--iris-space-10": "40px",
  "--iris-space-12": "48px",
  "--iris-space-16": "64px",
  "--iris-space-20": "80px",

  "--iris-container-sm": "440px",
  "--iris-container-md": "640px",
  "--iris-container-lg": "1080px",
  "--iris-container-xl": "1440px",
} as const;
