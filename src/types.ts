import type { color } from "./tokens/colors";
import type { typeScale, iconSize } from "./tokens/typography";
import type { space } from "./tokens/spacing";
import type { radius } from "./tokens/radius";
import type { shadow } from "./tokens/shadows";
import type { zIndex } from "./tokens/z-index";
import type { breakpoint } from "./tokens/breakpoints";
import type { borderWidth } from "./tokens/borders";
import type { opacity } from "./tokens/opacity";

type NestedKeys<T, Prefix extends string = ""> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? NestedKeys<T[K], `${Prefix}${K & string}.`>
    : `${Prefix}${K & string}`;
}[keyof T];

export type ColorToken = NestedKeys<typeof color>;
export type TypeScaleKey = keyof typeof typeScale;
export type SpaceKey = keyof typeof space;
export type RadiusKey = keyof typeof radius;
export type ShadowKey = keyof typeof shadow;
export type ZIndexKey = keyof typeof zIndex;
export type BreakpointKey = keyof typeof breakpoint;
export type BorderWidthKey = keyof typeof borderWidth;
export type OpacityKey = keyof typeof opacity;
export type IconSizeKey = keyof typeof iconSize;
