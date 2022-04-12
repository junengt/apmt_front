import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, Modal } from "react-bootstrap";
import styled from "styled-components";
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
const PointChargeModal = ({}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <PointBtn style={{ fontSize: "14px" }} onClick={handleShow}>
        환전
      </PointBtn>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>환전</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>얼마를 환전하시겠습니까?</Form.Label>
              <Form.Control
                type="number"
                placeholder="환전 받을 금액 입력"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <PointBtn variant="primary" onClick={""}>
            환전하기
          </PointBtn>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PointChargeModal;
