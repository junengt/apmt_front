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

const SalePage = ({ userObj }) => {
  const [tab, setTab] = useState(1);
  const user = userObj;

  const onClick = (id) => setTab(id);

  const history = useNavigate();

  return (
    <MobileContainer>
      <MobileInner>
        <SaleWrap>
          <SaleHeader history={history} tab={tab} onClick={onClick} />
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
                        page="sale"
                      />
                    </SaleInner>
                    <SaleBtnList />
                  </div>
                );
              })}
          </DepthInner>
        </SaleWrap>
      </MobileInner>
    </MobileContainer>
  );
};

export default SalePage;
