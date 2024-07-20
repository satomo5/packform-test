/** @jsxImportSource @emotion/react */

import React from "react";
import {
  ButtonSizeType,
  ButtonStyle,
  ButtonVariantType,
} from "../../assets/styles/components/Button";
import { SerializedStyles } from "@emotion/react";

/**
 * Button component.
 *
 * @param {Object} props - The props for the component.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {SerializedStyles} [props.style] - Additional styling for the component.
 * @param {boolean} [props.full] - Whether the button should take up the full width.
 * @param {ButtonVariantType} [props.type] - The variant of the button.
 * @param {ButtonSizeType} [props.size] - The size of the button.
 * @returns {JSX.Element} The button component.
 */
function Button({
  children,
  style,
  full,
  type,
  size,
}: {
  children: React.ReactNode;
  style?: SerializedStyles;
  full?: boolean;
  type?: ButtonVariantType;
  size?: ButtonSizeType;
}) {
  // Render the button with the passed props
  return (
    <button css={[ButtonStyle({ full, type, size }), style]}>
      {/* Render the children */}
      {children}
    </button>
  );
}

export default Button;
