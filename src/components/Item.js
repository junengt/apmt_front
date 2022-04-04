import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import likeIconOn from "../images/ico/ico_like.png";
import likeIconOff from "../images/ico/ico_like_count.png";
const LikeBx = styled.div`
  width: 20px;
  padding: 10px;
  padding-right: 17px;
  border-right: 1px solid #f0f0f0;

  & button {
    width: 100%;
    height: 100%;
    background: url(${({ color }) =>
        color === "on" ? likeIconOn : likeIconOff})
      center center/contain no-repeat;
    outline: none;
    transition: background ease-in-out 0.3s;
  }
`;

const Item = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  return (
    <>
      <div className="" style={{ margin: "1rem" }}>
        <img
          className="product-image"
          src="images/hero_ipad_pro_non_avail__fcrsmhs4b7ma_small_2x.jpg"
          alt="Product image"
        />

        <div style={{ margin: "0 auto", maxWidth: "330px" }}>
          <p
            className="text-xl-start wrap-text"
            style={{ marginBottom: "0.1rem" }}
          >
            48W 퀵 차져 멀티 충전기(아이폰 아이패드 맥북 노트북 충전기) ,타입
            PD충전기, 고속 충전기, QC충전기 3.0
          </p>
          <p
            className="text-lg-start small-text"
            style={{ marginBottom: "0.1rem", justifyContent: "start" }}
          >
            경기도 광명시 소하동
          </p>
          <Row>
            <Col>
              {" "}
              <p className="text-lg-start">15,000원</p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Item;
