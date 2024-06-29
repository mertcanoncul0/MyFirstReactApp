const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
})

export const formatCurrency = (number) => currencyFormatter.format(number)


