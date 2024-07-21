/** @jsxImportSource @emotion/react */

import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "../../assets/styles/common/Color";

/**
 * Create CSS styles for separator component based on the size.
 *
 * @param {string} size - The size of the separator.
 * @returns {Record<"vertical" | "horizontal", SerializedStyles>} - The styles for the separator.
 */
const SEPARATOR_VARIANT = (size: string, length: string) => ({
  /**
   * Styles for vertical separator.
   */
  vertical: css`
    width: ${size};
    height: ${length};
    background-color: ${COLORS["gray30"]};
  `,
  /**
   * Styles for horizontal separator.
   */
  horizontal: css`
    height: ${size};
    width: ${length};
    background-color: ${COLORS["gray30"]};
  `,
});

/**
 * Separator component.
 *
 * @param {Object} props - The props for the separator component.
 * @param {string} [props.type="horizontal"] - The type of the separator (vertical or horizontal).
 * @param {SerializedStyles} [props.style] - The additional styles for the separator.
 * @param {string} [props.size="1px"] - The size of the separator.
 * @returns {JSX.Element} - The separator component.
 */
function Separator({
  type = "horizontal",
  style,
  size = "1px",
  length = "100%",
}: {
  type?: "vertical" | "horizontal";
  style?: SerializedStyles;
  size?: string;
  length?: string;
}): JSX.Element {
  // Apply the styles based on the type and size
  return <div css={[SEPARATOR_VARIANT(size, length)[type], style]} />;
}

export default Separator;
