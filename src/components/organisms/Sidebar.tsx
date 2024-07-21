/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { FlexY, Pointer, Square } from "../../assets/styles/common/Layout";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import Separator from "../atoms/Separator";
import {
  SidebarContainer,
  SidebarLogo,
  SidebarMenu,
} from "../../assets/styles/components/Sidebar";
import { useSidebar } from "../../hooks/useSidebar";
import useBreakpoint from "../../hooks/useBreakpoint";

const MENU_SIDEBAR = [
  {
    type: "menu",
    title: "Dashboard",
    icon: "ph:graph",
    path: "/",
  },
  {
    type: "menu",
    title: "Assets",
    icon: "ph:notebook-light",
    path: "/assets",
  },
  {
    type: "separator",
  },
  {
    type: "menu",
    title: "Setting",
    icon: "ph:gear",
    path: "",
  },
  {
    type: "menu",
    title: "Help",
    icon: "ph:question",
    path: "",
  },
];

/**
 * Sidebar component that displays a list of menu items.
 *
 * @returns {JSX.Element} The Sidebar component.
 */
function Sidebar() {
  // Get the current location from the react-router-dom library.
  const breakpoint = useBreakpoint();
  const location = useLocation();
  const { toggleSidebar, setToggleSidebar } = useSidebar();

  return (
    // Sidebar container with styling.
    <div css={SidebarContainer(toggleSidebar)}>
      {/* Sidebar header with logo and menu items. */}
      <div
        css={[
          FlexY("40px"),
          css`
            position: relative;
          `,
        ]}
      >
        {breakpoint !== "xl" && (
          <div
            css={[
              Square({ size: "30px" }),
              Pointer,
              css`
                position: absolute;
                top: 0;
                right: 0;
              `,
            ]}
            onClick={() => setToggleSidebar(!toggleSidebar)}
          >
            <Icon icon="ph:x" fontSize={28} color="#fff" />
          </div>
        )}
        {/* Sidebar logo. */}
        <h1 css={SidebarLogo}>InAI</h1>
        {/* Sidebar menu items. */}
        <div css={FlexY("20px")}>
          {/* Map through the menu items and render them. */}
          {MENU_SIDEBAR.map((item, index) =>
            // If the item is a separator, render a separator.
            item.type === "separator" ? (
              <div
                key={`sidebar-menu-${index}`}
                css={css`
                  opacity: 0.2;
                `}
              >
                {/* Separator component. */}
                <Separator />
              </div>
            ) : (
              // Render a Link component for each menu item.
              <Link
                key={`sidebar-menu-${index}`}
                // Set the link to the item's path.
                to={item?.path || ""}
                // Apply styling to the link based on the current location.
                css={SidebarMenu(location.pathname === item?.path)}
              >
                {/* Icon component for the item's icon. */}
                <Icon icon={item?.icon || ""} fontSize={24} />
                {/* Display the item's title. */}
                {item.title}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
