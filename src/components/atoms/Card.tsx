/** @jsxImportSource @emotion/react */

import React from "react";
import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "../../assets/styles/common/Color";

/**
 * The `Card` component wraps a children component
 * with a white background and a gray border.
 *
 * @example
 * <Card>
 *   <p>Hello World!</p>
 * </Card>
 *
 * @param {ReactNode} children The children component
 * @param {string} color The background color of the card
 * @param {SerializedStyles} style Additional styles
 * @returns {ReactElement}
 */
function Card({
  children,
  color = "#fff",
  style,
}: {
  children: React.ReactNode;
  color?: string;
  style?: SerializedStyles;
}) {
  return (
    <div
      css={[
        // Common styles for the card
        css`
          background-color: ${color};
          border: 1px solid ${COLORS["gray30"]};
          padding: 16px;
          border-radius: 24px;
        `,
        // Additional styles
        style,
      ]}
    >
      {children}
    </div>
  );
}

export default Card;
