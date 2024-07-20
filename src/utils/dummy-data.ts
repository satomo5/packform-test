import { COLORS } from "../assets/styles/common/Color";
import { getRandomNet, getRandomPoint } from "./helper";

export const DATA_PORTFOLIO = () => ({
  month: {
    net: getRandomNet(true),
    point: getRandomPoint(),
  },
  quarter: {
    net: getRandomNet(true),
    point: getRandomPoint(),
  },
  total_per_year: {
    net: getRandomNet(true),
    point: getRandomPoint(),
    year: 2024,
  },
});

export const DATA_NET_ASSET = {
  assets: getRandomNet(),
  profit: getRandomPoint(),
  gross: getRandomNet(),
  liabilities: getRandomNet(),
};

export const DATA_GROSS = {
  assets: getRandomNet(),
  profit: getRandomPoint(),
  gross: getRandomNet(true),
  liabilities: getRandomNet(),
};

export const DATA_NET = [
  {
    color: COLORS["clay50"],
    title: "Bank Account",
    data: [
      {
        img: "/images/icons/NAB.png",
        title: "NAB",
        point: 0,
        data: [
          {
            type: "asset_class",
            alias: "",
            title: "Morgan Supperannuation Fund",
            net: getRandomNet(),
            point: 0,
          },
          {
            type: "asset_class",
            alias: "",
            title: "Morgan Global Ventures Inc. ATF  Morgan Fam...",
            net: getRandomNet(),
            point: 0,
          },
          {
            type: "asset_class",
            alias: "",
            title: "Global Trading Pty Ltd",
            net: getRandomNet(),
            point: 0,
          },
          {
            type: "entity",
            alias: "",
            title: "Global Investments Pty Ltd",
            net: getRandomNet(),
            point: 0,
          },
        ],
      },
      {
        img: "/images/icons/ANZ.png",
        title: "ANZ",
        point: getRandomPoint(true),
        data: [
          {
            type: "entity",
            alias: "",
            title: "Morgan Global Ventures Inc. ATF  Morgan Fam...",
            net: getRandomNet(),
            point: getRandomPoint(),
          },
          {
            type: "entity",
            alias: "",
            title: "T&E Morgan (Personal)",
            net: getRandomNet(),
            point: getRandomPoint(true),
          },
        ],
      },
      {
        img: "/images/icons/Citibank.png",
        title: "Citibank",
        point: getRandomPoint(true),
        data: [
          {
            type: "asset_class",
            alias: "",
            title: "J&W Morgan (Personal)",
            net: getRandomNet(),
            point: getRandomPoint(),
          },
        ],
      },
      {
        img: "/images/icons/Bankofamerica.png",
        title: "Bank of America",
        point: getRandomPoint(true),
        data: [
          {
            type: "entity",
            alias: "",
            title: "J&W Morgan (Personal)",
            net: getRandomNet(),
            point: getRandomPoint(true),
          },
        ],
      },
    ],
  },
  {
    color: COLORS["orange50"],
    title: "Managed funds",
    data: [
      {
        img: "",
        title: "Morgan Management",
        point: getRandomPoint(true),
        data: [
          {
            type: "asset_class",
            alias: "",
            title: "Regal Resources Long-Short Fund",
            net: getRandomNet(),
            point: 0,
          },
          {
            type: "asset_class",
            alias: "",
            title: "Regal Partners Private Fund",
            net: getRandomNet(),
            point: 0,
          },
          {
            type: "brocker",
            alias: "",
            title: "Regal Resources High Conviction Fund",
            net: getRandomNet(),
            point: 0,
          },
          {
            type: "entity",
            alias: "",
            title: "Cash at bank",
            net: getRandomNet(),
            point: 0,
          },
        ],
      },
      {
        img: "",
        title: "ANZ",
        point: getRandomPoint(true),
        data: [
          {
            type: "entity",
            alias: "",
            title: "Morgan Global Ventures Inc. ATF  Morgan Fam...",
            net: getRandomNet(),
            point: getRandomPoint(),
          },
          {
            type: "entity",
            alias: "",
            title: "T&E Morgan (Personal)",
            net: getRandomNet(),
            point: getRandomPoint(true),
          },
        ],
      },
    ],
  },
];
