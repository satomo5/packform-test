export const TAB_COUNTRY_OPTIONS = [
  {
    id: "all",
    title: "All",
    img: "/images/flags/all.png",
  },
  {
    id: "aus",
    title: "Australia",
    img: "/images/flags/aus.png",
  },
  {
    id: "usa",
    title: "USA",
    img: "/images/flags/usa.png",
  },
  {
    id: "eur",
    title: "Europe",
    img: "/images/flags/eur.png",
  },
];

export const TAB_GAINS_OPTIONS = [
  {
    id: "all",
    title: "All",
  },
  {
    id: "realised",
    title: "Realised gains",
  },
  {
    id: "unrealised",
    title: "Unrealised gains",
  },
];

export const TAB_NET_TYPE_OPTIONS = [
  {
    id: "asset_class",
    title: "Asset Class",
  },
  {
    id: "entity",
    title: "Entity",
  },
  {
    id: "brocker",
    title: "Brocker",
  },
];

export const TAB_TIME = (year?: number) => [
  {
    id: "day",
    title: "Day",
  },
  {
    id: "month",
    title: "Month",
  },
  {
    id: "quarter",
    title: "Quarter",
  },
  {
    id: `year-${year || 2024}`,
    title: `FY ${year || 2024}`,
  },
];
