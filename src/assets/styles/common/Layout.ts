import { css } from "@emotion/react";

const DEFAULT_GAP = "16px";

// layout position
export const FlexX = (gap?: string) => css`
  display: flex;
  gap: ${gap || DEFAULT_GAP};
`;

export const FlexY = (gap?: string) => css`
  display: flex;
  flex-direction: column;
  gap: ${gap || DEFAULT_GAP};
`;

export const SpaceBetween = (gap?: string) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${gap || DEFAULT_GAP};
`;

export const Center = (gap?: string) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${gap || DEFAULT_GAP};
`;

export const FlexEnd = (gap?: string) => css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${gap || DEFAULT_GAP};
`;

export const ScrollX = (gap?: string) => css`
  display: flex;
  align-items: center;
  gap: ${gap || DEFAULT_GAP};
  overflow-x: scroll;
`;

// height/width
export const Width100 = css`
  width: 100%;
`;

// layout shape
export const Square = ({
  size,
  rounded,
}: {
  size: string;
  rounded?: boolean;
}) => css`
  aspect-ratio: 1 / 1;
  min-width: ${size};
  width: ${size};
  ${rounded && `border-radius: 500px;`}
`;

// layout container
export const Container = css`
  max-width: 600px;
  margin: 0 auto;
  padding: 88px 12px 40px;
`;
