import { css } from "@emotion/react";
import {
  DEFAULT_MAX_WIDTH,
  DEFAULT_WIDTH_SIDEBAR,
  SpaceBetween,
} from "../common/Layout";
import { mq } from "../common/BreakPoint";

export const NavbarMain = (isScrolled: boolean) => [
  css`
    padding: 16px; // Set padding
    position: fixed; // Set fixed position
    top: 0; // Align to top
    left: 0; // Align to left
    right: 0; // Align to right
    background-color: #fff; // Set background color
    transition: all 0.2s ease-in-out; // Add transition
    z-index: 10; // Set z-index
  `,
  isScrolled &&
    css`
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // Add box shadow
    `,
];

export const NavbarContainer = (isOpen: boolean) => [
  SpaceBetween(),
  css`
    max-width: ${DEFAULT_MAX_WIDTH};
    margin: 0 auto;
    transition: padding-left 0.3s ease;

    ${mq.xl} {
      padding-left: ${isOpen ? DEFAULT_WIDTH_SIDEBAR : "0px"};
    }
  `,
];
