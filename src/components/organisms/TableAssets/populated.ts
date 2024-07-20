import { DATA_NET } from "../../../utils/dummy-data";

/**
 * Populates the DATA_NET array with the given type, filtering for the provided type and
 * summing the net values. This function returns a new array, leaving DATA_NET unchanged.
 *
 * @param {string} type - The type to filter for.
 * @return {Array<Object>} - The populated array.
 */

export function populateDataNet(type: string) {
  // Map over each item in DATA_NET
  return DATA_NET.map((item) => {
    return {
      // Copy all properties from the original item
      ...item,
      // Calculate the total net value for the item
      total: item.data
        .map((item) => {
          // Calculate the net value for each sub-item
          const temp = item.data
            .filter((itemFilter) => itemFilter.type === type)
            .map((subItem) => subItem.net)
            .reduce((accumulator, currentValue) => {
              return accumulator + currentValue;
            }, 0);

          return temp;
        })
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0),
      // Filter and map over the data for each sub-item
      data: item.data
        .map((subItem) => {
          // Filter data based on the provided type
          const dataSubItem = subItem.data.filter(
            (itemFilter) => itemFilter.type === type
          );

          return {
            // Copy all properties from the original sub-item
            ...subItem,
            // Calculate the total net value for the filtered data
            total: dataSubItem
              .map((item) => item.net)
              .reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
              }, 0),
            // Set the filtered data
            data: dataSubItem,
          };
        })
        // Filter out any sub-items with no data
        .filter((itemFilter) => itemFilter.data.length > 0),
    };
    // Filter out any items with no sub-items
  }).filter((itemFilter) => itemFilter.data.length > 0);
}
