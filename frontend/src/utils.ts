export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN").format(price);
