import React from "react";

const statusSwitchFunc = (status) => {
  switch (status) {
    case "ING":
      return "판매중";
    case "END":
      return "판매완료";
    case "RESERVATION":
      return "예약중";
    case "HIDE":
      return "숨김";
    default:
      return "삭제됨";
  }
};

export default statusSwitchFunc;
