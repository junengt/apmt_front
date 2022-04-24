import React from "react";

const priceCommaFunc = (price) => {
  let NumberPrice = Number(price);
  if (NumberPrice >= 99999999) NumberPrice = 99999999;
  let priceComma = NumberPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (priceComma === "0") priceComma = "";
  return priceComma;
};
export default priceCommaFunc;
