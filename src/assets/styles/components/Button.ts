import { css } from "@emotion/react";
import { COLORS } from "../common/Color";
import { Center } from "../common/Layout";
import { FontSize } from "../common/Text";

// variant
const BUTTON_VARIANT = {
  primary: css`
    background-color: ${COLORS["gray80"]};
    border: 1px solid ${COLORS["gray80"]};
    color: #ffff;
  `,
  secondary: css`
    background-color: #ffff;
    border: 1px solid ${COLORS["gray30"]};
    color: ${COLORS["default"]};
  `,

  third: css`
    background-color: ${COLORS["brand60"]};
    border: 1px solid ${COLORS["brand60"]};
    color: #ffff;
  `,
} as const;

// size
const BUTTON_SIZE = {
  md: [
    FontSize("sm"),
    css`
      padding: 10px 16px;
    `,
  ],
  lg: css`
    padding: 12px 20px;
  `,
} as const;

export type ButtonVariantType = keyof typeof BUTTON_VARIANT;
export type ButtonSizeType = keyof typeof BUTTON_SIZE;

export const ButtonStyle = ({
  full,
  type = "primary",
  size = "md",
}: {
  full?: boolean;
  type?: ButtonVariantType;
  size?: ButtonSizeType;
}) => [
  Center(),
  BUTTON_VARIANT[type],
  BUTTON_SIZE[size],
  css`
    border-radius: 500px;
    text-align: center;
    transition: all 0.15s;
    font-weight: 700;
    gap: 10px;

    :hover {
      filter: brightness(55%);
    }

    ${full && "width: 100%;"}
  `,
];
