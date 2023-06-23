export const formatCurrency = (value: number) => {
  let nf = new Intl.NumberFormat("en-US");
  return nf.format(value);
};
