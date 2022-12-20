export const currencyFormat = (value: number) => {
  const formatter = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2,
  }).format(value);
  return formatter;
};
