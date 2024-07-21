import { css } from "@emotion/react";
import { DEFAULT_WIDTH_SIDEBAR, FlexX } from "../common/Layout";
import { BackgroundColor } from "../common/Color";
import { Bold } from "../common/Text";
import { mq } from "../common/BreakPoint";

export const SidebarContainer = (isOpen: boolean) => {
  const width = `${DEFAULT_WIDTH_SIDEBAR} - 40px`;

  return [
    BackgroundColor("brand60"),
    css`
      position: fixed;
      top: 0;
      z-index: 100;
      height: 100vh;
      display: block;
      padding: 20px;
      transition: left 0.3s ease;
      width: calc(100vw - 40px);
      left: ${isOpen ? "0" : `calc(-100vw - 40px)`};

      ${mq.xl} {
        left: ${isOpen ? "0" : `calc(-${width})`};
        width: calc(${width});
      }
    `,
  ];
};

export const SidebarLogo = [
  Bold,
  css`
    color: #fff;
    font-size: 50px;
    text-align: center;
  `,
];

export const SidebarMenu = (isSelected: boolean) => [
  FlexX("10px"),
  css`
    color: #fff;
    align-items: center;
    padding: 8px 10px;
    border-radius: 500px;
    transition: all 0.15s ease;

    :hover {
      background-color: #00000054;
    }
  `,
  isSelected &&
    css`
      background-color: #00000054;
    `,
];
