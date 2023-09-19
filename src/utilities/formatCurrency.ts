const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "INR",
  style: "currency",
}); //automatically going to determine how to print out the number based on where we live

export default function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
