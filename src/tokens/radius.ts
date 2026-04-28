// IRIS Design System — Border Radius Tokens
// Consolidated from 10+ distinct values (2, 3, 4, 6, 8, 10, 12, 16, 20, 9999).

export const radius = {
  none: 0,
  xs: 4,      // chips, tags, small badges
  sm: 6,      // inputs, inline controls
  md: 8,      // cards, dropdowns
  lg: 12,     // modals, large cards
  xl: 16,     // hero panels, feature cards
  40: 40,     // large cards, pill buttons
  full: 9999, // circular buttons
} as const;

// ── CSS Custom Property Map ──────────────────────────────

export const cssVars = {
  "--iris-radius-none": "0px",
  "--iris-radius-xs": "4px",
  "--iris-radius-sm": "6px",
  "--iris-radius-md": "8px",
  "--iris-radius-lg": "12px",
  "--iris-radius-xl": "16px",
  "--iris-radius-40": "40px",
  "--iris-radius-full": "9999px",
} as const;
