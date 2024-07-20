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

/**
 * CardNetGross component displays gross and net income data.
 * @returns {JSX.Element} The CardNetGross component.
 */
function CardNetGross() {
  // Get the gross income data
  const data = DATA_GROSS;

  return (
    <Card
      style={css`
        display: flex;
        flex-direction: column;
        gap: 12px;
      `}
    >
      {/* Card header */}
      <div css={SpaceBetween()}>
        {/* Title */}
        <p css={[Bold, Color("gray60")]}>Gross Income</p>
        {/* Icon */}
        <Icon
          icon="ph:dots-three-vertical-bold"
          fontSize={24}
          color={COLORS["brand30"]}
        />
      </div>
      {/* Card body */}
      <div css={SpaceBetween()}>
        {/* Gross income */}
        <div>
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
          {/* Profit */}
          <div
            css={[
              FlexX("8px"),
              FontSize("sm"),
              css`
                margin-top: 8px;
              `,
            ]}
          >
            <div css={[Center("4px"), Color("success50"), Bold]}>
              {/* Profit icon */}
              <Icon icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow" />
              {/* Profit percentage */}+{data.profit || 0}%
            </div>
            <p>vs last year</p>
          </div>
        </div>
        {/* Chevron icon */}
        <button
          css={[
            Square({ size: "48px", rounded: true }),
            Center(),
            css`
              background-color: ${COLORS["brand5"]};
            `,
          ]}
        >
          <Icon icon="tabler:chevron-right" fontSize={24} />
        </button>
      </div>
      {/* Card footer */}
      <div css={FlexY("0px")}>
        {/* Less expenses */}
        <p
          css={[
            css`
              margin-bottom: 8px;
            `,
          ]}
        >
          Less expenses: {/* Less expenses value */}
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
        {/* Net income */}
        <p>
          Net income: {/* Net income value */}
          <span css={[Bold]}>{currencyFormat(data.liabilities || 0)}</span>
        </p>
      </div>
      {/* Card tab menu */}
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

export default CardNetGross;
