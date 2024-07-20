import { css } from "@emotion/react";

// font weight
export const Medium = css`
  font-weight: 500;
`;

export const SemiBold = css`
  font-weight: 600;
`;

export const Bold = css`
  font-weight: 700;
`;

// font style
export const Italic = css`
  font-style: italic;
`;

// font size
const FONT_SIZE_VARIANT = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export type FontSizeVariantType = keyof typeof FONT_SIZE_VARIANT;

export const FontSize = (size: FontSizeVariantType) => css`
  font-size: ${FONT_SIZE_VARIANT[size]}px;
`;

export const CustomFontSize = (size: number) => css`
  font-size: ${size}px;
`;
