export const formatCurrency = (amount, currency = "") => {
  const amountFloat = Number(amount).toFixed(2);
  return "$" + amountFloat + (currency ? ` ${currency}` : "");
};

export const formatPrice = (amount) => {
  if (!amount) return;
  return Number(amount)
    ?.toFixed(2)
    .replace(/[.,]00$/, "");
};
