/** @jsxImportSource @emotion/react */
import React, { useState, useRef, useEffect } from "react";
import { css } from "@emotion/react";

// Types for dropdown options and component props
type Option = {
  value: string;
  label: string;
};

type PositionDropdown =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

type DropdownProps = {
  options?: Option[];
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  position?: PositionDropdown;
};

// Styled components
const DropdownContainer = css`
  position: relative;
  display: inline-block;
`;

const DropdownButton = css`
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

/**
 * DropdownContent component
 * @param isOpen - Boolean to indicate if the dropdown is open
 * @param position - Position of the dropdown
 * @returns CSS styling for the dropdown content
 */
const DropdownContent = ({
  isOpen,
  position,
}: {
  isOpen: boolean;
  position?: PositionDropdown;
}) => {
  // Initialize positionDropdown variable
  let positionDropdown = "";

  // Set position styles based on dropdown position
  switch (position) {
    case "top":
      positionDropdown =
        "bottom: 100%; left: 50%; transform: translateX(-50%);";
      break;
    case "top-left":
      positionDropdown = "bottom: 100%; left: 0;";
      break;
    case "top-right":
      positionDropdown = "bottom: 100%; right: 0;";
      break;
    case "left":
      positionDropdown = "right: 100%; top: 50%; transform: translateY(-50%);";
      break;
    case "right":
      positionDropdown = "left: 100%; top: 50%; transform: translateY(-50%);";
      break;
    case "bottom":
      positionDropdown = "top: 100%; left: 50%; transform: translateX(-50%);";
      break;
    case "bottom-left":
      positionDropdown = "top: 100%; left: 0;";
      break;
    case "bottom-right":
      positionDropdown = "top: 100%; right: 0;";
      break;
    default:
      positionDropdown = "top: 100%; left: 0;"; // default to bottom-left
      break;
  }

  // Return CSS styling for the dropdown content
  return css`
    display: ${isOpen ? "block" : "none"};
    position: absolute;
    background-color: white;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    z-index: 1;
    min-width: 150px;
    padding: 10px;
    ${positionDropdown}
  `;
};

const DropdownItem = css`
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

/**
 * Dropdown component
 * @param {DropdownProps} props - Dropdown component props
 * @returns {JSX.Element} The rendered dropdown component
 */
function Dropdown({
  options,
  position = "bottom",
  children,
  trigger,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /**
   * Toggles the dropdown state on button click
   */
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Closes the dropdown if clicked outside
   * @param {MouseEvent} event - The click event
   */
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to close dropdown if clicked outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove event listener when component is unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} css={DropdownContainer}>
      <button onClick={toggleDropdown} css={DropdownButton}>
        {trigger ? trigger : "Dropdown"}
      </button>
      <div css={DropdownContent({ isOpen, position })}>
        {children
          ? children
          : options
          ? options.map((option) => (
              <div css={DropdownItem} key={option.value}>
                {option.label}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default Dropdown;
