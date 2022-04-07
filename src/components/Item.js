import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const ItemImgBox = styled.div`
  margin: 1rem;
`;
const TextBox = styled.div`
  margin: 0 auto;
  max-width: 330px;
`;

const Item = ({ item }) => {
  const { id, title, region_name, price, img_src } = item;
  return (
    <>
      <ItemImgBox>
        <img className="product-image" src={img_src} alt="Product image" />

        <TextBox>
          <p
            className="text-xl-start wrap-text"
            style={{ marginBottom: "0.1rem" }}
          >
            {title}
          </p>
          <p
            className="text-lg-start small-text"
            style={{ marginBottom: "0.1rem", justifyContent: "start" }}
          >
            {region_name}
          </p>
          <Row>
            <Col>
              {" "}
              <p className="text-lg-start">{price}</p>
            </Col>
          </Row>
        </TextBox>
      </ItemImgBox>
    </>
  );
};

export default Item;
