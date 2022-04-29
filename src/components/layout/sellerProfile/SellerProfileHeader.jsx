import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as ArrowBlack } from "../../../icon/arrow_back_black.svg";
import { BackArrow } from "../../common/BackArrow";
import { DepthHeader } from "../../common/DepthHeader";
import { Inner } from "../Inner";
import { HeaderTitle } from "../../common/HeaderTitle";
import DetailUserData from "../write/DetailUserData";

const SaleHeaderWrap = styled(DepthHeader)`
  height: auto;
  background: rgb(250, 250, 250);
`;

const BackLink = styled(BackArrow)`
  margin: 0 24px 0 4px;
  & svg {
    fill: black;
  }
`;

const DepthInner = styled(Inner)`
  display: flex;
  align-items: center;
`;

const TabMenu = styled.ul`
  display: flex;
`;

const TabItem = styled.li`
  flex: 1 1 auto;
  flex-basis: 50%;
  border-bottom: 1px solid #d7d7d7;
  &:nth-of-type(${({ tab }) => tab}) {
    border-bottom: 2px solid #333;
    & button {
      color: #333;
    }
  }
`;

const TabBtn = styled.button`
  width: 100%;
  height: 48px;
  font-size: 0.875rem;
  font-weight: 700;
  color: #aaa;
  outline: none;
`;

function SellerProfileHeader({
  sellerDisplayName,
  sellerPhoto,
  history,
  tab,
  onClick,
}) {
  return (
    <SaleHeaderWrap>
      <DepthInner>
        <BackLink>
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              history(-1);
            }}
          >
            <ArrowBlack />
          </Link>
        </BackLink>
        <HeaderTitle>판매자 정보</HeaderTitle>
      </DepthInner>
      <DepthInner>
        <DetailUserData username={sellerDisplayName} profileImg={sellerPhoto} />
      </DepthInner>
      <TabMenu>
        <TabItem tab={tab}>
          <TabBtn onClick={() => onClick(1)}>판매 상품</TabBtn>
        </TabItem>
        <TabItem tab={tab}>
          <TabBtn onClick={() => onClick(2)}>거래 후기</TabBtn>
        </TabItem>
      </TabMenu>
    </SaleHeaderWrap>
  );
}

export default SellerProfileHeader;
