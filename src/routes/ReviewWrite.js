import React, { useEffect, useState } from "react";
import { MobileContainer } from "../components/common/MobileContainer";
import { MobileInner } from "../components/common/MobileInner";
import styled from "styled-components";
import { Inner } from "../components/layout/Inner";
import ReviewHeader from "../components/layout/review/ReviewHeader";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReviewWriteHeader from "../components/layout/reviewWrite/ReviewWriteHeader";
import ReviewWriteContents from "../components/layout/reviewWrite/ReviewWriteContents";
import axios from "axios";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { dbService } from "../utils/api/fbInstance";

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
  const param = useParams();
  const navigate = useNavigate();
  const { userObj } = useSelector(({ user }) => ({
    userObj: user.currentUser,
  }));
  const [reviewData, setReviewData] = useState({});
  useEffect(() => {
    axios
      .get("trade/" + param.id)
      .then((result) => {
        console.log(result.data);
        setReviewData(result.data.data);
      })
      .catch((reason) => {
        if (reason.toString().includes("500")) {
          alert("잘못된 접근");
          navigate("/");
        }
      });
  }, []);

  const history = useNavigate();
  const [contents, setContents] = useState("");

  const onChange = (e) => {
    setContents(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    const roomObj1 = {
      text: reviewData.sellerName + "님께 리뷰를 남겼습니다!",
      who: userObj.uid,
      date: new Date(),
    };
    const noticeObj1 = {
      text: [
        reviewData.sellerName + "님께 " + contents + "라고 리뷰를 남기셨네요!.",
      ],
      createdAt: Date.now(),
      creatorId: "kSuKt7fM0ufWRuzVUii8HyAG4by2",
      seen: false,
      attachmentUrl: reviewData.photoPath,
    };
    const roomObj2 = {
      text: userObj.displayName + "님이 리뷰를 남겼습니다!",
      who: reviewData.sellerUid,
      date: new Date(),
    };
    const noticeObj2 = {
      text: [
        userObj.displayName +
          "님이 " +
          reviewData.itemName +
          "을 구매하시고 '" +
          contents +
          "' 라고 리뷰를 남기셨네요!",
      ],
      createdAt: Date.now(),
      creatorId: "kSuKt7fM0ufWRuzVUii8HyAG4by2",
      seen: false,
      attachmentUrl: reviewData.photoPath,
    };
    axios
      .put("saveReview", {
        tradeId: param.id,
        content: contents,
      })
      .then((result) => {
        console.log(result.data.data);
        alert("리뷰를 남겨주셔서 감사합니다.");
        navigate("/review/" + result.data.data.reviewId);
        setDoc(doc(dbService, "noticeroom", userObj.uid), roomObj1);
        addDoc(
          collection(dbService, "noticeroom", userObj.uid, "messages"),
          noticeObj1
        );
        setDoc(doc(dbService, "noticeroom", reviewData.sellerUid), roomObj2);
        addDoc(
          collection(dbService, "noticeroom", reviewData.sellerUid, "messages"),
          noticeObj2
        );
      })
      .catch((reason) => {
        console.log("", reason);
      });
  };
  return (
    <MobileContainer>
      <MobileInner>
        <SaleWrap>
          <ReviewWriteHeader
            seller={reviewData.sellerName}
            history={history}
            onClick={onClick}
          />
          <DepthInner>
            <SaleInner>{reviewData.itemName}에 대해 리뷰를 남깁니다!</SaleInner>
            <ReviewWriteContents onChange={onChange} contents={contents} />
          </DepthInner>
        </SaleWrap>
      </MobileInner>
    </MobileContainer>
  );
};

export default ReviewWrite;
