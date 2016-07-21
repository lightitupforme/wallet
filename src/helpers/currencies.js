export const numberToCurrency = number => {
  const locale = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  });

  return locale.format(number);
};
