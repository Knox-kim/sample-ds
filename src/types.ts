import type { color } from "./tokens/colors";
import type { typeScale } from "./tokens/typography";
import type { space } from "./tokens/spacing";
import type { radius } from "./tokens/radius";
import type { shadow } from "./tokens/shadows";

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
