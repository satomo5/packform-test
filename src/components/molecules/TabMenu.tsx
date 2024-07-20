/** @jsxImportSource @emotion/react */

import { ScrollX, Square } from "../../assets/styles/common/Layout";
import { FontSize, SemiBold } from "../../assets/styles/common/Text";
import { useState } from "react";
import {
  TabMenuItemStyle,
  TabVariantType,
} from "../../assets/styles/components/TabMenu";
import { Icon } from "@iconify/react/dist/iconify.js";
import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "../../assets/styles/common/Color";

type TabMenuItemType = {
  id: string;
  title: string;
  icon?: string;
  img?: string;
  sizeIconImg?: number;
};

/**
 * @description A component that renders a tab menu
 * @param {object} props Component props
 * @param {SerializedStyles} [props.styleWrapper] Style to be applied to the wrapper div
 * @param {SerializedStyles} [props.styleMenu] Style to be applied to each tab menu item
 * @param {TabMenuItemType[]} props.options Array of objects with the following properties:
 *  - `id`: a unique identifier for the tab menu item
 *  - `title`: the text to be displayed on the tab menu item
 *  - `icon`: an icon to be displayed on the tab menu item (optional)
 *  - `img`: an image to be displayed on the tab menu item (optional)
 *  - `sizeIconImg`: the size of the icon/image to be displayed on the tab menu item (optional)
 * @param {string} props.defaultValue The id of the tab menu item to be selected by default
 * @param {TabVariantType} [props.type] The type of tab menu to be rendered. Can be either "default" or "pill"
 * @param {function} [props.cb] A callback function to be called when a tab menu item is clicked
 * @param {boolean} [props.fit] Whether the tab menu items should be spread out evenly
 * @returns {JSX.Element} A JSX element representing the tab menu
 */
function TabMenu({
  styleWrapper,
  styleMenu,
  options,
  defaultValue,
  type,
  cb,
  fit,
}: {
  styleWrapper?: SerializedStyles;
  styleMenu?: SerializedStyles;
  options: TabMenuItemType[];
  defaultValue: string;
  type?: TabVariantType;
  cb?: (item: TabMenuItemType) => void;
  fit?: boolean;
}) {
  const [selected, setSelected] = useState(defaultValue || "");
  return (
    <div
      css={[
        ScrollX("4px"),
        type === "pill" &&
          css`
            background-color: ${COLORS["gray10"]};
            border-radius: 500px;
            padding: 4px;
          `,
        fit &&
          css`
            justify-content: space-between;
          `,
        styleWrapper,
      ]}
    >
      {options.map((item, index) => (
        <div
          key={`tab-${index}-${item.id}`}
          css={[
            TabMenuItemStyle({ type, isSelected: selected === item.id }),
            styleMenu,
          ]}
          onClick={() => {
            cb && cb(item);
            setSelected(item.id);
          }}
        >
          {item.icon && <Icon icon="ph:magic-wand" fontSize={24} />}
          {item.img && (
            <img
              src={item.img}
              alt={`${item.id}-${index}`}
              css={Square({ size: "16px" })}
            />
          )}
          <span css={[SemiBold, FontSize("sm")]}>{item.title}</span>
        </div>
      ))}
    </div>
  );
}

export default TabMenu;
