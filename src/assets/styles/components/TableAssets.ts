import { css } from "@emotion/react";
import { Center, SpaceBetween, Square } from "../common/Layout";
import { Bold, FontSize } from "../common/Text";
import { BackgroundColor, Color, COLORS } from "../common/Color";

export const TableMainHeader = (color?: string) => [
  SpaceBetween("12px"),
  css`
    background-color: ${color || "#fff"};
    padding: 6px;
    border-radius: 500px;
  `,
];

export const TableIcon = css`
  background-color: #fff;
  width: 15px;
  height: 1.5px;
`;

export const TableMainHeaderLeft = [
  SpaceBetween(),
  css`
    flex: 1;
  `,
];

export const TableMainHeaderLeftTitle = [
  Bold,
  FontSize("sm"),
  css`
    color: #fff;
  `,
];

export const TableHeaderRow = [
  BackgroundColor("gray5"),
  css`
    border-bottom: 1px solid ${COLORS[`gray30`]};
  `,
];
export const TableHeaderData = [
  Bold,
  FontSize("sm"),
  css`
    padding: 14px 8px;
  `,
];

export const TableHeaderNet = [FontSize("sm"), Bold, Color("brand60")];
export const TableContent = [
  css`
    border-bottom: 1px solid ${COLORS["gray30"]};
  `,
  FontSize("sm"),
];
export const TableContentNet = [
  Bold,
  css`
    padding: 14px 8px;
    align-items: flex-end;
  `,
];
export const TableContentAction = [
  Square({ size: "40px", rounded: true }),
  Center(),
  Color("brand60"),
  css`
    cursor: pointer;
    background-color: #fff;
    transition: all 0.15s;

    :hover {
      filter: brightness(85%);
    }
  `,
];
