/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Card from "../atoms/Card";
import { Color, COLORS } from "../../assets/styles/common/Color";
import {
  Center,
  FlexX,
  FlexY,
  SpaceBetween,
  Square,
} from "../../assets/styles/common/Layout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Bold, FontSize } from "../../assets/styles/common/Text";
import { DATA_GROSS } from "../../utils/dummy-data";
import { currencyFormat } from "../../utils/helper";
import TabMenu from "./TabMenu";
import { TAB_TIME } from "../../utils/options";
import Badge from "../atoms/Badge";

/**
 * Card component for displaying net assets
 * @returns {JSX.Element} The Card component
 */
function CardNetAssets() {
  // Dummy data for net assets
  const data = DATA_GROSS;

  return (
    // Card component
    <Card
      style={css`
        display: flex;
        flex-direction: column;
        gap: 12px;
      `}
    >
      {/* Header */}
      <div css={SpaceBetween()}>
        {/* Title */}
        <p css={[Bold, Color("gray60")]}>Net Asset</p>
        {/* Icon */}
        <Icon
          icon="ph:dots-three-vertical-bold"
          fontSize={24}
          color={COLORS["brand30"]}
        />
      </div>
      {/* Assets */}
      <div css={SpaceBetween()}>
        <div>
          {/* Total assets */}
          <p
            css={[
              Bold,
              css`
                font-size: 30px;
              `,
            ]}
          >
            {currencyFormat(data.assets || 0)}
          </p>
          {/* Return and profit */}
          <div
            css={[
              FlexX("8px"),
              FontSize("sm"),
              css`
                margin-top: 8px;
              `,
            ]}
          >
            <p css={FontSize("md")}>
              Return: {/* Return color based on profit */}
              <span
                css={[
                  Bold,
                  FontSize("md"),
                  css`
                    color: ${COLORS[
                      (data.gross || 0) >= 0 ? "success50" : "destructive90"
                    ]};
                  `,
                ]}
              >
                {(data.gross || 0) >= 0 && "+"}
                {currencyFormat(data.gross || 0)}
              </span>
            </p>
            {/* Profit badge */}
            <Badge type={(data.gross || 0) >= 0 ? "success" : "danger"}>
              {/* Icon based on profit */}
              <Icon
                icon={
                  (data.gross || 0) >= 0
                    ? "streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow"
                    : "streamline:graph-arrow-decrease"
                }
              />
              +{data.profit || 0}%
            </Badge>
          </div>
        </div>
        {/* Show more icon */}
        <div
          css={[
            Square({ size: "48px", rounded: true }),
            Center(),
            css`
              background-color: ${COLORS["brand5"]};
            `,
          ]}
        >
          <Icon icon="tabler:chevron-right" fontSize={24} />
        </div>
      </div>
      {/* Realised and unrealised gains */}
      <div css={FlexY("0px")}>
        <p
          css={[
            FontSize("sm"),
            css`
              margin: 12px 0 8px;
            `,
          ]}
        >
          Realised gains: {/* Realised gains color */}
          <span
            css={[
              Bold,
              css`
                color: ${COLORS[
                  (data.gross || 0) >= 0 ? "success50" : "destructive90"
                ]};
              `,
            ]}
          >
            {(data.gross || 0) >= 0 && "+"}
            {currencyFormat(data.gross || 0)}
          </span>
        </p>
        <p css={FontSize("sm")}>
          Unrealised gains: {/* Unrealised gains color */}
          <span
            css={[
              Bold,
              css`
                color: ${COLORS[
                  (data.liabilities || 0) >= 0 ? "success50" : "destructive90"
                ]};
              `,
            ]}
          >
            {currencyFormat(data.liabilities || 0)}
          </span>
        </p>
      </div>
      {/* Tab menu for time period */}
      <TabMenu
        type="pill"
        defaultValue={TAB_TIME()[0].id}
        options={TAB_TIME()}
        fit
        styleMenu={Bold}
      />
    </Card>
  );
}

export default CardNetAssets;
