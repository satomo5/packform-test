/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Center, Pointer, Square } from "../../../assets/styles/common/Layout";
import { Bold } from "../../../assets/styles/common/Text";
import { Color } from "../../../assets/styles/common/Color";
import { Icon } from "@iconify/react/dist/iconify.js";
import { NavbarContainer } from "../../../assets/styles/components/Navbar";
import { mq } from "../../../assets/styles/common/BreakPoint";
import { useSidebar } from "../../../hooks/useSidebar";

/**
 * Renders the mobile navbar component.
 * @returns The rendered mobile navbar component.
 */
function NavbarMobile() {
  const { toggleSidebar, setToggleSidebar } = useSidebar();

  console.log(toggleSidebar)

  return (
    <div
      css={[
        NavbarContainer(toggleSidebar),
        css`
          ${mq.xl} {
            display: none;
          }
        `,
      ]}
    >
      {/* User avatar */}
      {/* Image source: https://picsum.photos/200 */}
      <img
        src="/images/avatar.png"
        alt="User Avatar"
        css={Square({ size: "40px", rounded: true })}
      />

      {/* User name */}
      <p
        css={[
          Bold, // Apply bold style
          css`
            font-size: 20px; // Set font size
          `,
        ]}
      >
        {/* Brand name */}
        <span css={Color("brand60")}>In</span>AI
      </p>

      {/* Hamburger icon */}
      {/* Icon source: https://iconify.design/icon-sets/hamburgers */}
      <div
        css={[Square({ size: "40px", rounded: true }), Center(), Pointer]}
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        <Icon icon="quill:hamburger" fontSize={24} />
      </div>
    </div>
  );
}

export default NavbarMobile;
