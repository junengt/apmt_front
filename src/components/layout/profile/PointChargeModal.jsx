import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, Modal } from "react-bootstrap";
import styled from "styled-components";
import { number } from "tailwindcss/lib/util/dataTypes";
const PointBtn = styled.span`
  height: 35px;
  border: 2px solid #f0f0f0;
  border-radius: 5px;
  text-align: center;
  padding: 5px;
  margin-right: 3px;
  font-size: 14px;
  font-weight: 500;
  background-color: #ffffff;
  cursor: pointer;
`;
const PointChargeModal = ({ price, priceOnclick }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setCharge(0);
  };
  const handleShow = () => setShow(true);
  const [charge, setCharge] = useState(0);
  const [afterPrice, setAfterPrice] = useState(price);
  const onChangeHandler = (e) => {
    setCharge(e.target.value);
  };

  const onClickHandler = () => {
    priceOnclick(charge, true);
    setShow(false);
    setCharge(0);
  };

  const onBlurHandler = () => {
    setAfterPrice(parseInt(charge) + parseInt(price));
  };
  return (
    <>
      <PointBtn style={{ fontSize: "14px" }} onClick={handleShow}>
        충전
      </PointBtn>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>충전</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>얼마를 충전하시겠습니까?</Form.Label>
              <Form.Control
                type="number"
                placeholder="충전할 금액 입력"
                value={charge}
                onChange={onChangeHandler}
                autoFocus
                onBlur={onBlurHandler}
              />
            </Form.Group>
          </Form>
          <span>충전 후 금액 : {afterPrice}</span>
        </Modal.Body>
        <Modal.Footer>
          <PointBtn variant="primary" onClick={onClickHandler}>
            충전하기
          </PointBtn>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PointChargeModal;
