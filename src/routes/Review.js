import React, { useEffect, useState } from "react";
import { MobileContainer } from "../components/common/MobileContainer";
import { MobileInner } from "../components/common/MobileInner";
import styled from "styled-components";
import { Inner } from "../components/layout/Inner";
import ReviewHeader from "../components/layout/review/ReviewHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

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

const Review = () => {
  const { userObj } = useSelector(({ user }) => ({
    userObj: user.currentUser,
  }));
  const history = useNavigate();
  const param = useParams();
  const [review, setReview] = useState({
    content: "친절합니다.",
    sellerName: "코카곰",
    itemTitle: "맥북팝니다.",
  });

  useEffect(() => {
    axios
      .get("review/" + param.id)
      .then((result) => {
        console.log(result.data.data);
        setReview(result.data.data);
      })
      .catch((reason) => {
        console.log(reason);
      });
  }, []);
  return (
    <MobileContainer>
      <MobileInner>
        <SaleWrap>
          <ReviewHeader
            seller={review.sellerName}
            history={history}
          ></ReviewHeader>
          <DepthInner>
            <SaleInner>
              {review.itemTitle}을 구매하시고
              <br /> '{review.content}'라고 남기셨네요!
            </SaleInner>
          </DepthInner>
        </SaleWrap>
      </MobileInner>
    </MobileContainer>
  );
};

export default Review;
