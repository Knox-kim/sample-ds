import { cssVars as colorVars } from "./tokens/colors";
import { cssVars as typographyVars } from "./tokens/typography";
import { cssVars as spacingVars } from "./tokens/spacing";
import { cssVars as radiusVars } from "./tokens/radius";
import { cssVars as shadowVars } from "./tokens/shadows";
import { cssVars as animationVars } from "./tokens/animation";

const allVars = {
  ...colorVars,
  ...typographyVars,
  ...spacingVars,
  ...radiusVars,
  ...shadowVars,
  ...animationVars,
} as const;

export function generateCssVars(): string {
  return Object.entries(allVars)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n");
}

export function generateCssBlock(): string {
  return `:root {\n${generateCssVars()}\n}`;
}
