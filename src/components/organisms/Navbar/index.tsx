/** @jsxImportSource @emotion/react */

import { NavbarMain } from "../../../assets/styles/components/Navbar";
import useScroll from "../../../hooks/useScroll";
import NavbarDesktop from "./Desktop";
import NavbarMobile from "./Mobile";

/**
 * The navigation bar component
 *
 * This component renders the navigation bar at the top of the page, which contains the brand logo, user avatar, and navigation links.
 */
function Navbar() {
  /**
   * The scroll value returned from the useScroll hook.
   * This value indicates whether the user has scrolled past the top of the page.
   */
  const scroll = useScroll();

  return (
    // Container for the navigation bar
    <div css={NavbarMain(scroll > 0)}>
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  );
}

export default Navbar;
