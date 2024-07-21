/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";

// Type for component props
type CollapseProps = {
  isOpenInitially?: boolean;
  onToggle?: (isOpen: boolean) => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
};

// CSS styles
const collapseContainerStyle = css`
  overflow: hidden;
  width: 100%;
`;

const collapseHeaderStyle = css`
  cursor: pointer;
`;

const collapseContentStyle = (isOpen: boolean) => css`
  max-height: ${isOpen ? "100%" : "0"};
  overflow: hidden;
  transition: max-height 0.2s ease;
`;

/**
 * Collapse component.
 * Renders a collapsible content with a trigger button.
 *
 * @param {Object} props - The component props.
 * @param {boolean} [props.isOpenInitially] - Whether the content should be open initially.
 * @param {(isOpen: boolean) => void} [props.onToggle] - Callback function to toggle the collapse state.
 * @param {React.ReactNode} props.children - The content to be collapsed.
 * @param {React.ReactNode} props.trigger - The trigger button.
 * @returns {JSX.Element} The collapse component.
 */
function Collapse({
  isOpenInitially = false,
  onToggle,
  children,
  trigger,
}: CollapseProps) {
  // State to track the collapse state
  const [isOpen, setIsOpen] = useState(isOpenInitially);

  /**
   * Toggles the collapse state.
   * Updates the isOpen state and calls the onToggle callback if provided.
   */
  function handleToggle() {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (onToggle) {
      onToggle(newIsOpen);
    }
  }

  return (
    <div css={collapseContainerStyle}>
      {/* Trigger button */}
      <div css={collapseHeaderStyle} onClick={handleToggle}>
        {trigger}
      </div>
      {/* Collapsible content */}
      <div css={collapseContentStyle(isOpen)}>{children}</div>
    </div>
  );
}

export default Collapse;
