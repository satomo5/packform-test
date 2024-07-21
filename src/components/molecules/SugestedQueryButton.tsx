/** @jsxImportSource @emotion/react */

import { Icon } from "@iconify/react/dist/iconify.js";
import { Bold } from "../../assets/styles/common/Text";
import Button from "../atoms/Button";
import { css } from "@emotion/react";

/**
 * Renders a list of buttons containing suggested queries for the AI assistant.
 *
 * @param {object} props Component props
 * @param {Array<object>} [props.options] An array of objects with a title property
 *   representing the suggested query.
 * @returns {JSX.Element} A JSX element representing the component.
 */
function SugestedQueryButton({ options }: { options?: { title: string }[] }) {
  // Use the SpaceBetween component to add space between the title and the search icon
  return (
    <>
      {/* Display the title */}
      <p css={Bold}>AI suggested queries</p>
      {/* Display the list of buttons */}
      {options?.map((item, index) => (
        <Button
          key={`btn-ai-sugestion-${index}`}
          style={css`
            flex: 1;
            justify-content: flex-start;
            text-align: left;
          `}
          type="secondary"
        >
          {/* Display the search icon */}
          <Icon icon="ph:magic-wand" fontSize={24} />
          {/* Display the title of the suggested query */}
          {item.title}
        </Button>
      ))}
    </>
  );
}

export default SugestedQueryButton;
