import React, { useEffect, useState } from "react";
import { MobileContainer } from "../components/common/MobileContainer";
import { MobileInner } from "../components/common/MobileInner";
import styled from "styled-components";
import { Inner } from "../components/layout/Inner";
import SellerProfileHeader from "../components/layout/sellerProfile/SellerProfileHeader";
import { Link, useNavigate, useParams } from "react-router-dom";
import DetailUserData from "../components/layout/write/DetailUserData";
import itemOfJson from "../data/carrot.json";
import SaleStuff from "../components/layout/sale/SaleStuff";
import ReviewItem from "../components/layout/sellerProfile/ReviewItem";
import { useSelector } from "react-redux";
import { default as axios } from "axios";

const SaleWrap = styled.div`
  display: block;
`;

const DepthInner = styled.div`
  min-height: calc(100vh);
  background: rgb(250, 250, 250);
`;

const SaleInner = styled(Inner)`
  background: rgb(250, 250, 250);
`;
const Review = styled.li`
  adding: 16px 0;
  border-bottom: 1px solid #e9ecef;
  position: relative;
`;
const ReviewPhoto = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
const ReviewWriter = styled.div`
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.47;
  letter-spacing: -0.5px;
  vertical-align: middle;
  margin-right: 8px;
  margin-left: 8px;
`;
const ReviewContent = styled.div`
  padding-top: 8px;
  font-size: 15px;
  line-height: 1.47;
  letter-spacing: -0.5px;
  width: calc(100% - 80px);
`;
const ReviewTime = styled.time`
  display: block;
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.5px;
  color: #868e96;
  margin-top: 8px;
`;

function SellerProfileBody({ posts, reviews, profile, history, tab }) {
  if (tab === 2) {
    return reviews.map((review, idx) => {
      if (idx > 10) {
        return;
      }
      return (
        <div key={idx}>
          <ReviewItem review={review} />
        </div>
      );
    });
  }
  return posts.map((post, idx) => {
    if (idx > 10) {
      return;
    }
    return (
      <div key={idx}>
        <SaleInner>
          <SaleStuff
            no={post.id}
            thumb={post.img}
            matter={{ price: post.price, title: post.title }}
            region={post.region}
            time={post.afterDate}
            like="like"
            page=""
            status={post.status}
          />
        </SaleInner>
      </div>
    );
  });
}

const SellerProfile = () => {
  // 판매상품 탭 / 거래 후기 탭
  const [tab, setTab] = useState(1);
  const uid = useParams();
  const onClick = (id) => setTab(id);

  const onClickTab = (id) => setTab(id);
  const history = useNavigate();

  // AppRouter.js 에서 쿼리 파라미터를 가져온다
  const param = useParams();
  const [sellerInfo, setSellerInfo] = useState({
    sellerUid: "판매자UID",
    sellerDisplayName: "닉네임",
  });
  const [posts, setPosts] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("/seller_profile/" + param.uid + "/info")
      .then((response) => {
        setSellerInfo(response.data.data);
      })
      .catch((reason) => {
        console.log(reason);
      });
    axios
      .get("/seller_profile/" + param.uid + "/posts")
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((reason) => {
        console.log(reason);
      });
    axios
      .get("/seller_profile/" + param.uid + "/reviews")
      .then((response) => {
        setReviews(response.data.data);
      })
      .catch((reason) => {
        console.log(reason);
      });
  }, []);
  console.log(reviews);
  return (
    <MobileContainer>
      <MobileInner>
        <SaleWrap>
          <DepthInner>
            <SellerProfileHeader
              sellerDisplayName={sellerInfo.sellerDisplayName}
              sellerPhoto={sellerInfo.sellerPhoto}
              history={history}
              tab={tab}
              onClick={onClickTab}
            />
            <SellerProfileBody
              profile={sellerInfo}
              posts={posts}
              reviews={reviews}
              history={history}
              tab={tab}
            />
          </DepthInner>
        </SaleWrap>
      </MobileInner>
    </MobileContainer>
  );
};

export default SellerProfile;
