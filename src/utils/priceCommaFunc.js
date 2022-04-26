import React from "react";

const priceCommaFunc = (price) => {
  let NumberPrice = Number(price);
  let priceComma = NumberPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (priceComma === "0") priceComma = "0";
  return priceComma;
};
export default priceCommaFunc;
