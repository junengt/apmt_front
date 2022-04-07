import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LocationWrap = styled.div`
  text-align: end;
  font-size: 13px;
  margin-top: 8px;
`;

const LocationImg = styled.img`
  display: inline-block;
  margin-bottom: 2px;
  width: 17px;
  height: 17px;
`;

const Location = ({ selecAddr, addr }) => {
  const filterFunc = (addr) => {
    const regex = /...[동읍면리]/g;
    const region = regex.exec(addr);
    if (addr === "notMyNeigbor") return null;
    return region;
  };
  return (
    <LocationWrap>
      <span>
        {" "}
        내 위치 : {filterFunc(selecAddr) ||
          filterFunc(addr[0]) ||
          "행복동"}{" "}
      </span>
      <Link to={"/gps"}>
        {" "}
        <LocationImg src="https://cdn4.iconfinder.com/data/icons/game-general-icon-set-1/512/reset-512.png" />
      </Link>
    </LocationWrap>
  );
};

export default Location;
