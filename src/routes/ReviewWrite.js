import React, { useState } from "react";
import { MobileContainer } from "../components/common/MobileContainer";
import { MobileInner } from "../components/common/MobileInner";
import styled from "styled-components";
import { Inner } from "../components/layout/Inner";
import ReviewHeader from "../components/layout/review/ReviewHeader";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReviewWriteHeader from "../components/layout/reviewWrite/ReviewWriteHeader";
import ReviewWriteContents from "../components/layout/reviewWrite/ReviewWriteContents";

const SaleWrap = styled.div`
  display: block;
`;

const DepthInner = styled.div`
  min-height: calc(10vh);
  background: rgb(250, 250, 250);
`;

const SaleInner = styled(Inner)`
  margin-top: 20px;
  background: rgb(250, 250, 250);
`;

const ReviewWrite = () => {
  const { userObj } = useSelector(({ user }) => ({
    userObj: user.currentUser,
  }));
  const history = useNavigate();
  const params = useParams();
  const [contents, setContents] = useState("");
  const location = useLocation();

  const onChange = (e) => {
    setContents(e.target.value);
  };
  const postObj = location.state;

  const onClick = {};
  return (
    <MobileContainer>
      <MobileInner>
        <SaleWrap>
          <ReviewWriteHeader
            seller={postObj.creatorName}
            history={history}
            onClick={onClick}
          />
          <DepthInner>
            <SaleInner>{postObj.productName}에 대해 리뷰를 남깁니다!</SaleInner>
            <ReviewWriteContents onChange={onChange} contents={contents} />s
          </DepthInner>
        </SaleWrap>
      </MobileInner>
    </MobileContainer>
  );
};

export default ReviewWrite;
