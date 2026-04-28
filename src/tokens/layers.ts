import { color } from "./colors";
import { radius } from "./radius";
import { space } from "./spacing";
import { shadow } from "./shadows";

// gap: 모든 depth에서 자동 적용 (그루핑프레임 포함)
// padding: 시각적 표면(bg 있는 컨테이너)에서만 적용

export const layer = {
  0: {
    bg: color.bg.page,
  },
  1: {
    bg: color.bg.default,
    radius: radius[40],
    padding: space[6],
    gap: space[10],
    shadow: shadow.sm,
  },
  2: {
    bg: color.bg.subtle,
    radius: radius.md,
    padding: space[4],
    gap: space[6],
  },
  3: {
    bg: color.bg.muted,
    radius: radius.sm,
    padding: space[3],
    gap: space[1],
  },
} as const;

export const cssVars = {
  "--iris-layer-0-bg": layer[0].bg,

  "--iris-layer-1-bg": layer[1].bg,
  "--iris-layer-1-radius": `${layer[1].radius}px`,
  "--iris-layer-1-padding": `${layer[1].padding}px`,
  "--iris-layer-1-gap": `${layer[1].gap}px`,
  "--iris-layer-1-shadow": layer[1].shadow,

  "--iris-layer-2-bg": layer[2].bg,
  "--iris-layer-2-radius": `${layer[2].radius}px`,
  "--iris-layer-2-padding": `${layer[2].padding}px`,
  "--iris-layer-2-gap": `${layer[2].gap}px`,

  "--iris-layer-3-bg": layer[3].bg,
  "--iris-layer-3-radius": `${layer[3].radius}px`,
  "--iris-layer-3-padding": `${layer[3].padding}px`,
  "--iris-layer-3-gap": `${layer[3].gap}px`,
} as const;
