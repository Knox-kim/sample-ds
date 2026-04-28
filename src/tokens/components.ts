import { radius } from "./radius";
import { space } from "./spacing";

export const button = {
  height: { 32: 32, 40: 40, 48: 48 },
  paddingX: { 32: space[3], 40: space[4], 48: space[5] },
  radius: radius.md,
  iconGap: space[1.5],
} as const;

export const input = {
  height: { 32: 32, 40: 40, 48: 48 },
  paddingX: space[3],
  radius: radius.sm,
} as const;

export const badge = {
  height: { 18: 18, 22: 22, 26: 26 },
  paddingX: space[1.5],
  radius: radius.full,
} as const;

export const avatar = {
  size: { 20: 20, 24: 24, 32: 32, 40: 40, 48: 48 },
  radius: radius.full,
} as const;

export const modal = {
  maxWidth: { 440: 440, 640: 640 },
  padding: space[6],
  radius: radius.xl,
} as const;

export const tooltip = {
  maxWidth: 240,
  paddingX: space[3],
  paddingY: space[2],
  radius: radius.sm,
} as const;
