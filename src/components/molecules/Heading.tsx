/** @jsxImportSource @emotion/react */

import { Icon } from "@iconify/react/dist/iconify.js";
import { SpaceBetween } from "../../assets/styles/common/Layout";
import { COLORS } from "../../assets/styles/common/Color";

/**
 * Heading component
 *
 * @param {string} title - The title of the heading
 * @param {boolean} search - Whether to show the search icon
 * @returns {React.ReactElement} - The heading component
 */
function Heading({ title, search }: { title: string; search?: boolean }) {
  // Use the SpaceBetween component to add space between the title and the search icon
  return (
    <div css={SpaceBetween()}>
      {/* Render the title */}
      <h2>{title}</h2>
      {/* Render the search icon if search is true */}
      {search && (
        <Icon icon="tabler:search" fontSize={28} color={COLORS["gray60"]} />
      )}
    </div>
  );
}

export default Heading;
