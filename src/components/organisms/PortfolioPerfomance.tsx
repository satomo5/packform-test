/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import TabMenu from "../molecules/TabMenu";
import { Center, FlexY, SpaceBetween } from "../../assets/styles/common/Layout";
import { Bold, FontSize } from "../../assets/styles/common/Text";
import { COLORS } from "../../assets/styles/common/Color";
import { TAB_GAINS_OPTIONS } from "../../utils/options";
import Badge from "../atoms/Badge";
import { Icon } from "@iconify/react/dist/iconify.js";
import Separator from "../atoms/Separator";
import { useState } from "react";
import { currencyFormat } from "../../utils/helper";
import { DATA_PORTFOLIO } from "../../utils/dummy-data";

/**
 * PortfolioPerfomance component to display portfolio performance data.
 *
 * This component uses the TabMenu component to allow the user to switch between
 * different time periods (month, quarter, year) and displays the corresponding
 * data for each period.
 *
 * @returns {JSX.Element} The rendered PortfolioPerfomance component
 */
function PortfolioPerfomance() {
  // State to hold the data for the selected time period
  const [data, setData] = useState(DATA_PORTFOLIO);

  return (
    <div
      css={[
        FlexY("16px"),
        FontSize("md"),
        css`
          padding: 0 12px;
          color: ${COLORS["gray60"]};
        `,
      ]}
    >
      <p css={Bold}>Portfolio performance</p>
      {/* TabMenu component to allow user to switch between time periods */}
      <TabMenu
        defaultValue={TAB_GAINS_OPTIONS[0].id}
        options={TAB_GAINS_OPTIONS}
        cb={() => setData(DATA_PORTFOLIO)}
      />
      <div>
        {/* Display data for the month period */}
        <div
          css={[
            SpaceBetween(),
            FontSize("sm"),
            css`
              padding: 26px 8px;
            `,
          ]}
        >
          <p>Month</p>
          <div css={Center()}>
            <p css={Bold}>
              {(data?.month.net || 0) >= 0 && "+"}
              {currencyFormat(data?.month.net || 0)}
            </p>
            {/* Badge component to display the gain/loss status and percentage */}
            <Badge type={(data?.month.net || 0) < 0 ? "danger" : "success"}>
              <Icon
                icon={
                  (data?.month.net || 0) < 0
                    ? "streamline:graph-arrow-decrease"
                    : "streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow"
                }
              />
              <span>
                {(data?.month.net || 0) < 0 ? "-" : "+"}
                {data?.month.point}%
              </span>
            </Badge>
          </div>
        </div>
        <Separator />
        {/* Display data for the quarter period */}
        <div
          css={[
            SpaceBetween(),
            FontSize("sm"),
            css`
              padding: 26px 8px;
            `,
          ]}
        >
          <p>Quarter</p>
          <div css={Center()}>
            <p css={Bold}>
              {(data?.quarter.net || 0) >= 0 && "+"}
              {currencyFormat(data?.quarter.net || 0)}
            </p>
            {/* Badge component to display the gain/loss status and percentage */}
            <Badge type={(data?.quarter.net || 0) < 0 ? "danger" : "success"}>
              <Icon
                icon={
                  (data?.quarter.net || 0) < 0
                    ? "streamline:graph-arrow-decrease"
                    : "streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow"
                }
              />
              <span>
                {(data?.quarter.net || 0) < 0 ? "-" : "+"}
                {data?.quarter.point || ""}%
              </span>
            </Badge>
          </div>
        </div>
        <Separator />
        {/* Display data for the year period */}
        <div
          css={[
            SpaceBetween(),
            FontSize("sm"),
            css`
              padding: 26px 8px;
            `,
          ]}
        >
          <p>FY</p>
          <div css={Center()}>
            <p css={Bold}>
              {(data?.total_per_year.net || 0) >= 0 && "+"}
              {currencyFormat(data?.total_per_year.net || 0)}
            </p>
            {/* Badge component to display the gain/loss status and percentage */}
            <Badge
              type={(data?.total_per_year.net || 0) < 0 ? "danger" : "success"}
            >
              <Icon
                icon={
                  (data?.total_per_year.net || 0) < 0
                    ? "streamline:graph-arrow-decrease"
                    : "streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow"
                }
              />
              <span>
                {(data?.total_per_year.net || 0) < 0 ? "-" : "+"}
                {data?.total_per_year.point || ""}%
              </span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPerfomance;
