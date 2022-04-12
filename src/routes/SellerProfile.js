import React, { useState } from "react";
import { MobileContainer } from "../components/common/MobileContainer";
import { MobileInner } from "../components/common/MobileInner";
import styled from "styled-components";
import { Inner } from "../components/layout/Inner";
import SellerProfileHeader from "../components/layout/sellerProfile/SellerProfileHeader";
import { useNavigate } from "react-router-dom";
import DetailUserData from "../components/layout/write/DetailUserData";
import itemOfJson from "../data/carrot.json";
import SaleStuff from "../components/layout/sale/SaleStuff";
import ReviewItem from "../components/layout/sellerProfile/ReviewItem";

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
const SellerProfile = () => {
  const [tab, setTab] = useState(1);

  const onClick = (id) => setTab(id);

  const history = useNavigate();

  return (
    <MobileContainer>
      <MobileInner>
        <SaleWrap>
          {" "}
          <SellerProfileHeader
            history={history}
            tab={tab}
            onClick={onClick}
          ></SellerProfileHeader>
          <DepthInner>
            {tab === 1 &&
              itemOfJson.map((item, i) => {
                const { region_name, img_src, title, content, price } = item;
                if (i > 10) {
                  return;
                }
                return (
                  <div key={i}>
                    <SaleInner>
                      <SaleStuff
                        no={1}
                        thumb={img_src}
                        matter={{
                          title: title,
                          content: content,
                          price: price,
                        }}
                        status="end"
                        time={new Date().getTime()}
                        creatorId={"asx"}
                        region={region_name}
                        like={true}
                        page="like"
                      />
                    </SaleInner>
                  </div>
                );
              })}
            {tab === 2 && (
              <ul>
                <ReviewItem></ReviewItem>
              </ul>
            )}
          </DepthInner>
        </SaleWrap>
      </MobileInner>
    </MobileContainer>
  );
};

export default SellerProfile;
