import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Inner } from "../components/layout/Inner";
import SaleHeader from "../components/layout/sale/SaleHeader";
import SaleBtnList from "../components/layout/sale/SaleBtnList";
import SaleStuff from "../components/layout/sale/SaleStuff";
import itemOfJson from "../data/carrot.json";
import { MobileContainer } from "../components/common/MobileContainer";
import { MobileInner } from "../components/common/MobileInner";
import BuyHeader from "../components/layout/buy/BuyHeader";
import BuyBtnList from "../components/layout/buy/BuyBtnList";
import { useSelector } from "react-redux";

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

const BuyPage = () => {
  const [tab, setTab] = useState(1);
  const { userObj } = useSelector(({ user }) => ({
    userObj: user.currentUser,
  }));
  const history = useNavigate();

  const reviewPostObj = {
    matter: {
      title: "제목",
      constant: "내용",
      price: "가격",
    },
    thumb: "썸네일src",
    time: "~~후",
    creatorName: "글쓴이",
    region: "위치",
    status: "상태",
    review: "content",
  };

  return (
    <MobileContainer>
      <MobileInner>
        <SaleWrap>
          <BuyHeader history={history} />
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
                        time={new Date().getTime()}
                        creatorId={userObj.uid}
                        region={region_name}
                        page="buy"
                        status="end"
                      />
                    </SaleInner>
                    <BuyBtnList id={i} />
                  </div>
                );
              })}
          </DepthInner>
        </SaleWrap>
      </MobileInner>
    </MobileContainer>
  );
};

export default BuyPage;
