export const getDiscount = (price, actual_price) =>
    (((actual_price - price) * 100) / actual_price).toFixed(0);
