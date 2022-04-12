import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowBlack } from "../../../icon/arrow_back_black.svg";
import { BackArrow } from "../../common/BackArrow";
import { DepthHeader } from "../../common/DepthHeader";
import { Inner } from "../Inner";
import { HeaderTitle } from "../../common/HeaderTitle";

const ReviewHeaderWrap = styled(DepthHeader)`
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

function ReviewHeader({ history, seller }) {
  return (
    <ReviewHeaderWrap>
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
        <HeaderTitle>{seller}님에게 쓴 리뷰</HeaderTitle>
      </DepthInner>
    </ReviewHeaderWrap>
  );
}

export default ReviewHeader;
