export const breakpoint = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const mq = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
} as const;

export const cssVars = {
  "--iris-bp-sm": "640px",
  "--iris-bp-md": "768px",
  "--iris-bp-lg": "1024px",
  "--iris-bp-xl": "1280px",
  "--iris-bp-2xl": "1536px",
} as const;
