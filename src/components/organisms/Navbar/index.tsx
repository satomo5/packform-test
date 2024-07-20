/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Square } from "../../../assets/styles/common/Layout";
import { Bold } from "../../../assets/styles/common/Text";
import { Color } from "../../../assets/styles/common/Color";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  NavbarContainer,
  NavbarMain,
} from "../../../assets/styles/components/Navbar";
import useScroll from "../../../hooks/useScroll";

/**
 * Navbar component.
 *
 * Renders the navigation bar at the top of the page.
 *
 * @returns {JSX.Element} The rendered Navbar component.
 */
function Navbar() {
  const scroll = useScroll();

  return (
    // Container for the navigation bar
    <div css={NavbarMain(scroll > 0)}>
      <div css={NavbarContainer}>
        {/* User avatar */}
        <img
          src="/images/avatar.png"
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
        <Icon icon="quill:hamburger" fontSize={24} />
      </div>
    </div>
  );
}

export default Navbar;
