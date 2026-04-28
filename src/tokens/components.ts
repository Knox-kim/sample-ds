import { radius } from "./radius";
import { space } from "./spacing";

export const button = {
  height: { sm: 32, md: 40, lg: 48 },
  paddingX: { sm: space[3], md: space[4], lg: space[5] },
  radius: radius.md,
  iconGap: space[1.5],
} as const;

export const input = {
  height: { sm: 32, md: 40, lg: 48 },
  paddingX: space[3],
  radius: radius.sm,
} as const;

export const badge = {
  height: { sm: 18, md: 22, lg: 26 },
  paddingX: space[1.5],
  radius: radius.full,
} as const;

export const avatar = {
  size: { xs: 20, sm: 24, md: 32, lg: 40, xl: 48 },
  radius: radius.full,
} as const;

export const modal = {
  maxWidth: { sm: 440, md: 640 },
  padding: space[6],
  radius: radius.xl,
} as const;

export const tooltip = {
  maxWidth: 240,
  paddingX: space[3],
  paddingY: space[2],
  radius: radius.sm,
} as const;
