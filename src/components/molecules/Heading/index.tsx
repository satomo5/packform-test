/** @jsxImportSource @emotion/react */

import { Icon } from "@iconify/react/dist/iconify.js";
import { SpaceBetween } from "../../../assets/styles/common/Layout";
import { COLORS } from "../../../assets/styles/common/Color";

/**
 * Heading component
 *
 * @param {object} props - Component props
 * @param {string} props.title - The title of the heading
 * @param {boolean} [props.search=false] - Whether to show the search icon
 * @returns {JSX.Element} - The heading component
 */
function Heading({
  title,
  search = false,
}: {
  title: string;
  search?: boolean;
}) {
  // Render the title
  return (
    <div css={SpaceBetween()}>
      <h2>{title}</h2>
      {/* Render the search icon if search is true */}
      {search && (
        <Icon icon="tabler:search" fontSize={28} color={COLORS["gray60"]} />
      )}
    </div>
  );
}

export default Heading;
