/** @jsxImportSource @emotion/react */

import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../atoms/Button";
import Layout from "../templates/Layout";
import { css } from "@emotion/react";
import Heading from "../molecules/Heading";
import TabMenu from "../molecules/TabMenu";
import { TAB_COUNTRY_OPTIONS, TAB_NET_TYPE_OPTIONS } from "../../utils/options";
import CardNetAssets from "../molecules/CardNetAssets";
import { FlexX, FlexY, SpaceBetween } from "../../assets/styles/common/Layout";
import { FontSize } from "../../assets/styles/common/Text";
import TableAssets from "../organisms/TableAssets";
import { useState } from "react";
import Separator from "../atoms/Separator";
import SugestedQueryButton from "../molecules/SugestedQueryButton";
import useBreakpoint from "../../hooks/useBreakpoint";

/**
 * @function NetAssets
 * @description The main component of the NetAssets page. It renders a layout with a
 * heading, a button, a tab menu for selecting countries, a card for displaying the
 * net assets, a tab menu for selecting the type of net assets to display (e.g.
 * liquid or illiquid), and a table for displaying the data.
 *
 * The component also includes a section for suggested queries to the AI assistant.
 *
 * @param {object} props The props of the component.
 *
 * @returns {JSX.Element} The JSX element representing the component.
 */
function NetAssets() {
  const breakpoint = useBreakpoint();
  const [selected, setSelected] = useState(TAB_NET_TYPE_OPTIONS[0].id);

  return (
    <Layout
      // Note: The layout component is a flexbox container with a gap of 16px.
      style={FlexX("40px")}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
        `}
      >
        <Heading title="Asset Balances" />
        {breakpoint !== "xl" && (
          <Button full size="lg">
            <Icon icon="ph:magic-wand" fontSize={24} />
            <span>Ask AI assistant</span>
            <Icon icon="mingcute:arrow-right-line" fontSize={24} />
          </Button>
        )}

        <TabMenu
          // Note: The tab menu is a border type with the first country selected.
          type="border"
          defaultValue={TAB_COUNTRY_OPTIONS[0].id}
          options={TAB_COUNTRY_OPTIONS}
        />
        <CardNetAssets />
        <div css={SpaceBetween()}>
          <p css={FontSize("sm")}>Group by:</p>
          <TabMenu
            // Note: The tab menu is a default type with the first net type selected.
            type="default"
            defaultValue={selected}
            options={TAB_NET_TYPE_OPTIONS}
            cb={(item) => setSelected(item.id)}
          />
        </div>
        <TableAssets filter={selected} />
        {breakpoint !== "xl" && (
          <SugestedQueryButton
            options={[
              { title: "How have liquid assets grown?" },
              { title: "What is the liquidity ratio per account?" },
              { title: "What is the liquidity ratio per account?" },
            ]}
          />
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
                { title: "How have liquid assets grown?" },
                { title: "What is the liquidity ratio per account?" },
                { title: "What is the liquidity ratio per account?" },
              ]}
            />
          </div>
        </div>
      )}
    </Layout>
  );
}

export default NetAssets;
