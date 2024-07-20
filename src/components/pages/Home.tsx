/** @jsxImportSource @emotion/react */

import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../atoms/Button";
import Layout from "../templates/Layout";
import { css } from "@emotion/react";
import Heading from "../molecules/Heading";
import TabMenu from "../molecules/TabMenu";
import CardProfit from "../molecules/CardProfit";
import { Center } from "../../assets/styles/common/Layout";
import { TAB_COUNTRY_OPTIONS } from "../../utils/options";
import PortfolioPerfomance from "../organisms/PortfolioPerfomance";
import CardNetGross from "../molecules/CardNetGross";
import { Bold } from "../../assets/styles/common/Text";
import Separator from "../atoms/Separator";

/**
 * The main page of the application. This page displays the portfolio's overview
 * and the AI assistant. It also contains buttons to add new assets or entities.
 *
 * @returns {JSX.Element} The main page of the application.
 */
function Home() {
  return (
    <Layout
      style={css`
        display: flex;
        flex-direction: column;
        gap: 16px;
      `}
    >
      <Heading title="Portfolio Dashboard" search />
      {/* Button for asking AI assistant */}
      <Button full size="lg">
        <Icon icon="ph:magic-wand" fontSize={24} />
        <span>Ask AI assistant</span>
        <Icon icon="mingcute:arrow-right-line" fontSize={24} />
      </Button>
      {/* Tab menu for selecting country */}
      <TabMenu
        type="border"
        defaultValue={TAB_COUNTRY_OPTIONS[0].id}
        options={TAB_COUNTRY_OPTIONS}
      />
      {/* Card displaying the portfolio's profit */}
      <CardProfit />
      {/* Buttons for adding new assets or entities */}
      <div
        css={[
          Center("8px"),
          css`
            margin: 8px 0;
          `,
        ]}
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
      <CardNetGross />
      {/* AI suggested queries */}
      <p css={Bold}>AI suggested queries</p>
      <Button
        style={css`
          flex: 1;
          justify-content: flex-start;
          text-align: left;
        `}
        type="secondary"
      >
        <Icon icon="ph:magic-wand" fontSize={24} />
        Listed shares balances per month?
      </Button>
      <Button
        style={css`
          flex: 1;
          justify-content: flex-start;
          text-align: left;
        `}
        type="secondary"
      >
        <Icon icon="ph:magic-wand" fontSize={24} />
        Liquid assets per account?
      </Button>
      <Button
        style={css`
          flex: 1;
          justify-content: flex-start;
          text-align: left;
        `}
        type="secondary"
      >
        <Icon icon="ph:magic-wand" fontSize={24} />
        What are current portfolio risks?
      </Button>
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
    </Layout>
  );
}

export default Home;
