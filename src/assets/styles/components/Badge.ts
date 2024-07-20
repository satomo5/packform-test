import { css } from "@emotion/react";
import { COLORS } from "../common/Color";
import { Center } from "../common/Layout";
import { FontSize } from "../common/Text";

// variant
const BADGE_VARIANT = {
  primary: css`
    background-color: ${COLORS["gray80"]};
    color: #ffff;
  `,
  secondary: css`
    background-color: #ffff;
    color: ${COLORS["default"]};
  `,
  success: css`
    background-color: ${COLORS["success50"]};
    color: #ffff;
  `,
  successSecondary: css`
    background-color: ${COLORS["success10"]};
    color: ${COLORS["success50"]};
  `,
  danger: css`
    background-color: ${COLORS["destructive50"]};
    color: #ffff;
  `,
  dangerSecondary: css`
    background-color: ${COLORS["destructive10"]};
    color: ${COLORS["destructive50"]};
  `,
} as const;

export type BadgeVariantType = keyof typeof BADGE_VARIANT;

export const BadgeStyle = ({
  type = "primary",
}: {
  type?: BadgeVariantType;
}) => [
  Center(),
  BADGE_VARIANT[type],
  FontSize("xs"),
  css`
    padding: 4px 8px;
    border-radius: 500px;
    gap: 4px;
    display: inline-flex;
  `,
];
