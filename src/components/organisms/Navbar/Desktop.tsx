/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Center,
  Pointer,
  Square,
  Width100,
} from "../../../assets/styles/common/Layout";
import { NavbarContainer } from "../../../assets/styles/components/Navbar";
import { mq } from "../../../assets/styles/common/BreakPoint";
import { getFormattedDateTime, getGreeting } from "../../../utils/helper";
import { Bold, FontSize } from "../../../assets/styles/common/Text";
import Separator from "../../atoms/Separator";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  BackgroundColor,
  Color,
  COLORS,
} from "../../../assets/styles/common/Color";
import Dropdown from "../../atoms/Dropdown";
import { useSidebar } from "../../../hooks/useSidebar";

/**
 * Renders the desktop navbar component.
 * @returns The rendered navbar component.
 */
function NavbarDesktop() {
  const { toggleSidebar, setToggleSidebar } = useSidebar();

  // Return the navbar component
  return (
    <div
      css={[
        NavbarContainer(toggleSidebar),
        css`
          display: none;

          ${mq.xl} {
            display: flex;
          }
        `,
      ]}
    >
      {/* Render the greeting */}
      <div css={Center()}>
        <div
          css={[Square({ size: "40px" }), Pointer]}
          onClick={() => setToggleSidebar(!toggleSidebar)}
        >
          <Icon
            icon={
              toggleSidebar
                ? "ph:arrow-circle-left-fill"
                : "ph:arrow-circle-right-fill"
            }
            fontSize={38}
            color={COLORS["brand60"]}
          />
        </div>
        <div css={[FontSize("sm"), Color("gray60")]}>
          <p>{getGreeting()}</p>
          <p css={Bold}>{getFormattedDateTime()}</p>
        </div>
      </div>

      {/* Render the currency dropdown */}
      <div css={Center()}>
        <div css={Center("8px")}>
          <p>Currency:</p>
          <Dropdown
            trigger={
              <div css={[Bold, Center("4px")]}>
                USD
                <Icon icon="charm:chevron-down" fontSize={16} />
              </div>
            }
            options={[
              { value: "usd", label: "USD" },
              { value: "idr", label: "IDR" },
            ]}
            position="bottom-right"
          />
        </div>

        {/* Render the bell icon with notification badge */}
        <div
          css={[
            Center("4px"),
            css`
              position: relative;
            `,
          ]}
        >
          <Icon icon="ph:bell-bold" fontSize={24} />
          <div
            css={[
              Square({ size: "11px", rounded: true }),
              BackgroundColor("destructive50"),
              css`
                position: absolute;
                top: 0;
                right: 0;
              `,
            ]}
          />
        </div>

        {/* Render the vertical separator */}
        <Separator type="vertical" length="30px" />

        {/* Render the avatar dropdown */}
        <Dropdown
          trigger={
            <div css={Center()}>
              <img
                src="/images/avatar.png"
                css={Square({ size: "40px", rounded: true })}
              />
              <div css={Center("4px")}>
                <p>Andrew Doe</p>
                <Icon icon="charm:chevron-down" fontSize={16} />
              </div>
            </div>
          }
          position="bottom-right"
        >
          {/* Render the logout button */}
          <button css={[Color("destructive50"), Width100]}>Logout</button>
        </Dropdown>
      </div>
    </div>
  );
}

export default NavbarDesktop;
