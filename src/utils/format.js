/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
};

export { formatCurrency };
