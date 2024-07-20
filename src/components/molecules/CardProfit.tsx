/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Card from "../atoms/Card";
import { COLORS } from "../../assets/styles/common/Color";
import { FlexX, FlexY, SpaceBetween } from "../../assets/styles/common/Layout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Bold, CustomFontSize } from "../../assets/styles/common/Text";
import Badge from "../atoms/Badge";
import { DATA_NET_ASSET } from "../../utils/dummy-data";
import { currencyFormat } from "../../utils/helper";

/**
 * CardProfit component represents a card that displays net asset information.
 *
 * @returns {JSX.Element} The rendered CardProfit component.
 */
function CardProfit() {
  // Retrieve net asset data from the DATA_NET_ASSET object.
  const data = DATA_NET_ASSET;

  return (
    // Render Card component with white color and flex direction set to column.
    <Card
      style={css`
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 12px;
      `}
      color={COLORS["purple70"]}
    >
      {/* Render the card header */}
      <div css={SpaceBetween()}>
        <p>Net Asset</p>
        {/* Render the icon */}
        <Icon icon="ph:dots-three-vertical-bold" fontSize={24} />
      </div>
      {/* Render the main card content */}
      <div css={SpaceBetween()}>
        <div>
          {/* Render the net asset value */}
          <p css={[Bold, CustomFontSize(30)]}>
            {currencyFormat(data.assets || 0)}
          </p>
          {/* Render the profit and last day information */}
          <div
            css={[
              FlexX("8px"),
              css`
                margin-top: 8px;
              `,
            ]}
          >
            <Badge
              style={css`
                color: ${COLORS["success50"]};
              `}
              type="secondary"
            >
              {/* Render the profit icon */}
              <Icon icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow" />
              {/* Render the profit percentage */}+{data.profit || 0}%
            </Badge>
            {/* Render the last day label */}
            <Badge type="secondary">Last Day</Badge>
          </div>
        </div>
        {/* Render the right arrow icon */}
        <button
          css={css`
            padding: 12px;
          `}
        >
          <Icon icon="tabler:chevron-right" fontSize={24} />
        </button>
      </div>
      {/* Render the gross assets and liabilities information */}
      <div css={FlexY("0px")}>
        <p
          css={css`
            margin-bottom: 8px;
          `}
        >
          {/* Render the label */}
          Gross assets: {/* Render the value with bold styling */}
          <span css={Bold}>{currencyFormat(data.gross || 0)}</span>
        </p>
        <p>
          {/* Render the label */}
          Liabilities:{" "}
          {/* Render the value with bold styling and destructive color */}
          <span
            css={[
              Bold,
              css`
                color: ${COLORS["destructive30"]};
              `,
            ]}
          >
            {currencyFormat(data.liabilities || 0)}
          </span>
        </p>
      </div>
    </Card>
  );
}

export default CardProfit;
