/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import { mq } from "../../assets/styles/common/BreakPoint";
import { DEFAULT_WIDTH_SIDEBAR } from "../../assets/styles/common/Layout";
import { useSidebar } from "../../hooks/useSidebar";

function LayoutContainer({ children }: { children: React.ReactNode }) {
  const { toggleSidebar } = useSidebar();

  return (
    <div
      css={css`
        transition: padding-left 0.3s ease;

        ${mq.xl} {
          padding-left: ${toggleSidebar ? DEFAULT_WIDTH_SIDEBAR : "0px"};
        }
      `}
    >
      {children}
    </div>
  );
}

export default LayoutContainer;
