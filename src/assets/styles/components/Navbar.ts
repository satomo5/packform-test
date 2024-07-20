import { css } from "@emotion/react";
import { SpaceBetween } from "../common/Layout";

export const NavbarMain = (isScrolled: boolean) => [
  css`
    padding: 16px; // Set padding
    position: fixed; // Set fixed position
    top: 0; // Align to top
    left: 0; // Align to left
    right: 0; // Align to right
    background-color: #fff; // Set background color
    transition: all 0.2s ease-in-out; // Add transition
  `,
  isScrolled &&
    css`
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // Add box shadow
    `,
];

export const NavbarContainer = [
  SpaceBetween(),
  css`
    max-width: 600px;
    margin: 0 auto;
  `,
];
