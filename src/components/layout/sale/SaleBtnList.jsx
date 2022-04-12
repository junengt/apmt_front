import React from "react";
import styled from "styled-components";

const ChangeBtnGroup = styled.div`
  font-size: 13px;
  justify-content: space-around;
  width: 100%;
  display: flex;
`;
const ChangeBtn = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  margin-top: 15px;
  border: 1px solid #d7d7d7;
`;

function SaleBtnList() {
  return (
    <>
      <ChangeBtnGroup>
        <ChangeBtn>예약중으로 변경</ChangeBtn>
        <ChangeBtn>거래완료로 변경</ChangeBtn>
      </ChangeBtnGroup>
    </>
  );
}

export default SaleBtnList;
