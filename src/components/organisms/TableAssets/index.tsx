/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import {
  FlexEnd,
  FlexX,
  FlexY,
  Square,
  Width100,
} from "../../../assets/styles/common/Layout";
import Badge from "../../atoms/Badge";
import { Bold, FontSize, SemiBold } from "../../../assets/styles/common/Text";
import { Color } from "../../../assets/styles/common/Color";
import { Icon } from "@iconify/react/dist/iconify.js";
import { currencyFormat } from "../../../utils/helper";
import { Fragment, useEffect, useState } from "react";
import { populateDataNet } from "./populated";
import {
  TableMainHeaderLeft,
  TableMainHeaderLeftTitle,
  TableMainHeader,
  TableHeaderRow,
  TableHeaderData,
  TableHeaderNet,
  TableContent,
  TableContentNet,
  TableContentAction,
} from "../../../assets/styles/components/TableAssets";
import Collapse from "../../atoms/Collapse";

/**
 * Renders the TableAssets component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.filter - The filter value.
 * @returns {JSX.Element} - The rendered component.
 */
function TableAssets({ filter }: { filter: string }) {
  const [collapsed, setIsCollapsed] = useState<boolean[]>([]);

  // Populate the data with the filter value.
  const data = populateDataNet(filter);

  useEffect(() => {
    setIsCollapsed(data.map(() => true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // Render the main container.
    <div css={FlexY("24px")}>
      {data.map((item, index) => {
        // Render the main header table.
        return (
          <div key={`table-assets-${index}`} css={FlexY("10px")}>
            {/* Render the main header. */}
            <Collapse
              isOpenInitially
              onToggle={(status) => {
                const temp = [...collapsed];
                temp[index] = status;

                setIsCollapsed(temp);
              }}
              trigger={
                <div css={TableMainHeader(item.color)}>
                  {/* Render the table icon. */}
                  <Icon
                    icon={collapsed[index] ? "ph:minus" : "ph:plus"}
                    fontSize={24}
                    color="#fff"
                  />
                  {/* Render the table header left. */}
                  <div css={TableMainHeaderLeft}>
                    {/* Render the table title. */}
                    <span css={TableMainHeaderLeftTitle}>{item.title}</span>
                    {/* Render the table total. */}
                    <Badge
                      style={css`
                        color: ${item.color};
                      `}
                      type="secondary"
                    >
                      {currencyFormat(item.total)}
                    </Badge>
                  </div>
                </div>
              }
            >
              {/* Render the table. */}
              <table
                css={[
                  Width100,
                  css`
                    margin-top: 10px;
                  `,
                ]}
              >
                {/* Map the item data and render the table rows. */}
                {item.data.map((subItem, subIndex) => (
                  <Fragment key={`table-assets-${index}-${subIndex}`}>
                    {/* Render the table header row. */}
                    <thead>
                      <tr css={TableHeaderRow}>
                        {/* Render the table column header. */}
                        <td css={TableHeaderData}>
                          {subItem.img ? (
                            <div css={FlexX("6px")}>
                              <img
                                css={[
                                  Square({ size: "20px" }),
                                  css`
                                    align-items: center;
                                  `,
                                ]}
                                src={subItem.img}
                                alt={subItem.title}
                              />
                              <p>{subItem.title}</p>
                            </div>
                          ) : (
                            <p>{subItem.title}</p>
                          )}
                        </td>
                        {/* Render the table net column header. */}
                        <td
                          css={css`
                            padding: 14px 8px;
                          `}
                          colSpan={2}
                        >
                          <div css={FlexEnd("4px")}>
                            {/* Render the table net total. */}
                            <p css={TableHeaderNet}>
                              {currencyFormat(subItem.total)}
                            </p>
                            {/* Render the table net point. */}
                            {subItem?.point !== 0 && (
                              <Badge
                                type={
                                  subItem.point >= 0
                                    ? "successSecondary"
                                    : "dangerSecondary"
                                }
                              >
                                {subItem.point >= 0 && "+"}
                                {subItem.point}%
                              </Badge>
                            )}
                          </div>
                        </td>
                      </tr>
                    </thead>

                    {/* Render the table rows. */}
                    <tbody>
                      {subItem.data.map((subSubItem, subSubIndex) => (
                        <tr
                          key={`table-assets-${index}-${subIndex}-${subSubIndex}`}
                          css={TableContent}
                        >
                          {/* Render the table alias and title. */}
                          <td
                            css={css`
                              padding: 14px 8px;
                            `}
                          >
                            {subSubItem.alias ? (
                              <div css={[Color("gray60")]}>
                                <p css={Bold}>{subSubItem.alias}</p>
                                <p>{subSubItem.title}</p>
                              </div>
                            ) : (
                              <p css={[SemiBold, Color("gray60")]}>
                                {subSubItem.title}
                              </p>
                            )}
                          </td>
                          {/* Render the table net. */}
                          <td css={TableContentNet}>
                            <div
                              css={[
                                FlexY("4px"),
                                css`
                                  align-items: flex-end;
                                `,
                              ]}
                            >
                              <p>{currencyFormat(subSubItem.net)}</p>
                              {/* Render the table net point. */}
                              {subSubItem.point !== 0 && (
                                <p
                                  css={[
                                    FontSize("xs"),
                                    Color(
                                      subSubItem.point >= 0
                                        ? "success50"
                                        : "destructive50"
                                    ),
                                  ]}
                                >
                                  {subSubItem.point >= 0 && "+"}
                                  {subSubItem.point}%
                                </p>
                              )}
                            </div>
                          </td>
                          {/* Render the table detail. */}
                          <td
                            css={css`
                              padding: 14px 8px;
                              width: 40px;
                            `}
                          >
                            <div css={TableContentAction}>
                              <Icon icon="tabler:chevron-right" fontSize={28} />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Fragment>
                ))}
              </table>
            </Collapse>
          </div>
        );
      })}
    </div>
  );
}

export default TableAssets;
