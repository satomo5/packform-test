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
