import React from "react";
import styled from "styled-components";
import { ProfileInputWrap } from "./ProfileInputWrap";
import { WriteInput } from "../../common/WriteInput";
import { Link } from "react-router-dom";

const PriceWrap = styled(ProfileInputWrap)`
  display: flex;
  justify-content: end;
`;

const PriceShape = styled.span`
  color: ${({ price }) => (price === "" ? "#aaa" : "#202020")};
`;

const PriceInput = styled(WriteInput)`
  width: 200px;
  background: rgb(250, 250, 250) !important;
`;

function ProfilePrice({ onChange, price }) {
  return (
    <PriceWrap>
      <PriceShape price={price}>￦</PriceShape>
      <PriceInput
        type="text"
        readOnly={true}
        name="price"
        onChange={onChange}
        value={price}
        placeholder="가격 입력 (선택사항)"
      />
      <Link to="/">
        <span>충전</span>
      </Link>
    </PriceWrap>
  );
}

export default ProfilePrice;
