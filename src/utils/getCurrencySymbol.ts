export default function getCurrencySymbol(currency: string) {
  switch (currency) {
    case "EUR":
      return "€";
    default:
      return "$";
  }
}
