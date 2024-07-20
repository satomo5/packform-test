import { css } from "@emotion/react";
import { COLORS } from "../common/Color";
import { Center } from "../common/Layout";

// variant
const TAB_VARIANT = {
  default: {
    normal: css`
      color: ${COLORS["default"]};
      border: 1px solid #ffff;

      :hover {
        background-color: ${COLORS["brand5"]};
        color: ${COLORS["brand60"]};
        border-color: ${COLORS["brand5"]};
      }
    `,
    selected: css`
      background-color: ${COLORS["brand5"]};
      color: ${COLORS["brand60"]};
    `,
  },
  border: {
    normal: css`
      color: ${COLORS["default"]};
      border: 1px solid #ffff;

      :hover {
        background-color: #dfdfdf;
        border-color: #dfdfdf;
        color: #fff;
      }
    `,
    selected: css`
      border: 1px solid ${COLORS["brand60"]} !important;
    `,
  },

  pill: {
    normal: css`
      color: ${COLORS["gray60"]};

      :hover {
        color: ${COLORS["brand60"]};
        background-color: #fff;
      }
    `,
    selected: css`
      color: ${COLORS["brand60"]};
      background-color: #fff;
    `,
  },
} as const;

export type TabVariantType = keyof typeof TAB_VARIANT;

/**
 * Styles for the tab menu item component.
 *
 * @param isSelected - Flag indicating if the tab menu item is selected.
 * @param type - Type of the tab menu item.
 * @returns An array containing the CSS styles for the tab menu item.
 */
export const TabMenuItemStyle = ({
  isSelected,
  type,
}: {
  isSelected?: boolean;
  type?: TabVariantType;
}) => [
  Center(), // Function to center the content
  css`
    gap: 12px;
    padding: 8px 12px;
    border-radius: 500px;
    cursor: pointer;
    transition: all 0.15s;
  `, // Common styling for all tab menu items
  TAB_VARIANT[type || "default"]["normal"], // Normal styling based on the tab variant type
  isSelected && TAB_VARIANT[type || "default"]["selected"], // Selected styling based on the tab variant type
];
