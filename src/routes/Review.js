import React from "react";
import { MobileContainer } from "../components/common/MobileContainer";
import { MobileInner } from "../components/common/MobileInner";
import styled from "styled-components";
import { Inner } from "../components/layout/Inner";
import ReviewHeader from "../components/layout/review/ReviewHeader";
import { useNavigate, useParams } from "react-router-dom";

const SaleWrap = styled.div`
  display: block;
`;

const DepthInner = styled.div`
  min-height: calc(10vh);
  background: rgb(250, 250, 250);
`;

const SaleInner = styled(Inner)`
  background: rgb(250, 250, 250);
`;

const Review = ({ userObj }) => {
  const history = useNavigate();
  const params = useParams();

  const review = {
    content: "친절합니다.",
    seller: "코카곰",
    title: "맥북팝니다.",
  };

  return (
    <MobileContainer>
      <MobileInner>
        <SaleWrap>
          <ReviewHeader seller={review.seller} history={history}></ReviewHeader>
          <DepthInner>
            <SaleInner>
              {review.title}을 구매하시고
              <br /> '{review.content}'라고 남기셨네요!
            </SaleInner>
          </DepthInner>
        </SaleWrap>
      </MobileInner>
    </MobileContainer>
  );
};

export default Review;
