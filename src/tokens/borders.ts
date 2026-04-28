export const borderWidth = {
  none: 0,
  thin: 1,
  medium: 1.5,
  thick: 2,
} as const;

export const focusRing = {
  width: 2,
  offset: 2,
} as const;

export const cssVars = {
  "--iris-border-w-none": "0px",
  "--iris-border-w-thin": "1px",
  "--iris-border-w-medium": "1.5px",
  "--iris-border-w-thick": "2px",
  "--iris-focus-ring-width": "2px",
  "--iris-focus-ring-offset": "2px",
} as const;
