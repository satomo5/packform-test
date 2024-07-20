import { css } from "@emotion/react";

export const COLORS = {
  brand5: "#EEF2FF",
  brand30: "#CBD5E1",
  brand60: "#4F46E5",

  // success
  success10: "#DCFCE7",
  success50: "#22C55E",

  // gray
  gray5: "#F8FAFC",
  gray10: "#F1F5F9",
  gray30: "#E2E8F0",
  gray60: "#475569",
  gray80: "#1E293B",

  // purple
  purple70: "#7E22CE",

  // clay
  clay50: "#06B6D4",

  // orange
  orange50: "#F97316",

  // destructive
  destructive10: "#FFE4E6",
  destructive30: "#FDA4AF",
  destructive50: "#F43F5E",
  destructive90: "#881337",

  default: "#334155",
} as const;

type ColorType = keyof typeof COLORS;

export const Color = (color?: ColorType) => css`
  color: ${COLORS[color || "default"]};
`;

export const BackgroundColor = (color?: ColorType) => css`
  background-color: ${COLORS[color || "default"]};
`;
