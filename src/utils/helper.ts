import moment from "moment";

export function currencyFormat(number: number) {
  const Currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedNumber = Currency.format(number);
  return formattedNumber.replace(/\.0+$/, "");
}

export function getRandomPoint(withMinusNumber?: boolean) {
  const defaultNumber = 10;
  const number = withMinusNumber
    ? Math.random() * (defaultNumber * 2) - defaultNumber
    : Math.random() * defaultNumber;

  return Number(number.toFixed(1)); // Generates a random number between 0.0 and 5.0
}

export function getRandomNet(withMinusNumber?: boolean) {
  const defaultNumber = 100000000;
  const number = withMinusNumber
    ? Math.random() * (defaultNumber * 2) - defaultNumber
    : Math.random() * defaultNumber;

  return Math.floor(number); // Generates a random number between 0 and 100,000,000
}

// Function to get greeting based on the current hour
export const getGreeting = (): string => {
  const currentHour = moment().hour();

  if (currentHour >= 5 && currentHour < 12) {
    return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "Good Afternoon";
  } else if (currentHour >= 17 && currentHour < 21) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
};

// Function to format the current date and time
export const getFormattedDateTime = (): string => {
  return moment().format("dddd, D MMMM YYYY - hh:mm A");
};
