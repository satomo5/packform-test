/** @jsxImportSource @emotion/react */

import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../atoms/Button";
import Layout from "../templates/Layout";
import { css } from "@emotion/react";
import Heading from "../molecules/Heading";
import TabMenu from "../molecules/TabMenu";
import CardProfit from "../molecules/CardProfit";
import { Center, FlexX, FlexY } from "../../assets/styles/common/Layout";
import { TAB_COUNTRY_OPTIONS } from "../../utils/options";
import PortfolioPerfomance from "../organisms/PortfolioPerfomance";
import CardNetGross from "../molecules/CardNetGross";
import Separator from "../atoms/Separator";
import useBreakpoint from "../../hooks/useBreakpoint";
import SugestedQueryButton from "../molecules/SugestedQueryButton";
import { mq } from "../../assets/styles/common/BreakPoint";

/**
 * The main page of the application. This page displays the portfolio's overview
 * and the AI assistant. It also contains buttons to add new assets or entities.
 *
 * @returns {JSX.Element} The main page of the application.
 */
function Home() {
  const breakpoint = useBreakpoint();

  return (
    <Layout style={FlexX("40px")}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
        `}
      >
        <Heading title="Portfolio Dashboard" search />
        {/* Button for asking AI assistant */}
        {breakpoint !== "xl" && (
          <Button full size="lg">
            <Icon icon="ph:magic-wand" fontSize={24} />
            <span>Ask AI assistant</span>
            <Icon icon="mingcute:arrow-right-line" fontSize={24} />
          </Button>
        )}

        {/* Tab menu for selecting country */}
        <TabMenu
          type="border"
          defaultValue={TAB_COUNTRY_OPTIONS[0].id}
          options={TAB_COUNTRY_OPTIONS}
        />
        {/* Card displaying the portfolio's profit */}
        <div
          css={[
            FlexX("16px"),
            css`
              > div {
                flex: 1;
              }
            `,
          ]}
        >
          <CardProfit />
          {breakpoint === "xl" && <CardNetGross />}
        </div>
        {/* Buttons for adding new assets or entities */}
        <div
          css={css`
            margin: 8px 0;
            ${FlexX("8px")}
            justify-content: center;

            ${mq.xl} {
              justify-content: flex-start;
              align-items: center;
            }
          `}
        >
          <Button
            style={css`
              flex: 1;
              max-width: 250px;
            `}
            type="third"
          >
            <Icon icon="ph:hand-coins" fontSize={24} />
            Add new asset
          </Button>
          <Button
            style={css`
              flex: 1;
              max-width: 250px;
            `}
            type="secondary"
          >
            <Icon icon="ph:buildings" fontSize={24} />
            Add new entity
          </Button>
        </div>
        {/* Portfolio performance */}
        <PortfolioPerfomance />
        {/* Card displaying the portfolio's net income */}
        {breakpoint !== "xl" && <CardNetGross />}

        {/* AI suggested queries */}
        {breakpoint !== "xl" && (
          <>
            <SugestedQueryButton
              options={[
                { title: "Listed shares balances per month?" },
                { title: "Liquid assets per account?" },
                { title: "What are current portfolio risks?" },
              ]}
            />
            {/* Separator */}
            <Separator />
            {/* Buttons for customising or adding widgets */}
            <div css={[Center("8px")]}>
              <Button type="secondary">
                <Icon icon="ph:sliders-horizontal" fontSize={24} />
                Customise
              </Button>
              <Button type="secondary">
                <Icon icon="ph:cloud-arrow-up-bold" fontSize={24} />
                Add Widget
              </Button>
            </div>
          </>
        )}
      </div>
      {breakpoint === "xl" && (
        <div>
          <div
            css={[
              FlexY("16px"),
              css`
                width: 322px;
                position: sticky;
                top: 110px;
                z-index: 1;
              `,
            ]}
          >
            <Button full size="lg">
              <Icon icon="ph:magic-wand" fontSize={24} />
              <span>Ask AI assistant</span>
              <Icon icon="mingcute:arrow-right-line" fontSize={24} />
            </Button>
            <Separator />
            <SugestedQueryButton
              options={[
                { title: "Listed shares balances per month?" },
                { title: "Liquid assets per account?" },
                { title: "What are current portfolio risks?" },
              ]}
            />
            {/* Separator */}
            <Separator />
            {/* Buttons for customising or adding widgets */}
            <div css={[Center("8px")]}>
              <Button type="secondary">
                <Icon icon="ph:sliders-horizontal" fontSize={24} />
                Customise
              </Button>
              <Button type="secondary">
                <Icon icon="ph:cloud-arrow-up-bold" fontSize={24} />
                Add Widget
              </Button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Home;
