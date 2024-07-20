/** @jsxImportSource @emotion/react */

import React from "react";
import {
  BadgeStyle,
  BadgeVariantType,
} from "../../assets/styles/components/Badge";
import { SemiBold } from "../../assets/styles/common/Text";
import { SerializedStyles } from "@emotion/react";

/**
 * Badge component.
 * Renders a badge with the provided children and optional styling.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content of the badge.
 * @param {BadgeVariantType} [props.type] - The variant of the badge.
 * @param {SerializedStyles} [props.style] - Additional styles for the badge.
 * @returns {JSX.Element} The badge component.
 */
function Badge({
  children,
  type,
  style,
}: {
  children: React.ReactNode;
  type?: BadgeVariantType;
  style?: SerializedStyles;
}): JSX.Element {
  // Apply the badge style with the provided variant and additional styles
  const badgeStyle = [BadgeStyle({ type }), SemiBold, style];

  return (
    <div css={badgeStyle}>
      {/* Render the badge content */}
      {children}
    </div>
  );
}

export default Badge;
