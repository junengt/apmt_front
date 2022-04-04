import React from "react";
import styled from "styled-components";

import { Inner } from "../Inner";
import HeaderTextAnchor from "../../common/HeaderTextAnchor";
import { HeaderTitle } from "../../common/HeaderTitle";

const HeaderWrap = styled.header`
  display: flex;
  border-bottom: 2px solid #d7d7d7;
  width: 100%;
  font-size: 1.125rem;
`;

const Container = styled(Inner)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 14px;
`;

const ConfirmBtn = styled.button`
  font-size: 16px;
`;

function EditProfileHeader({ onClick }) {
  return (
    <HeaderWrap>
      <Container>
        <HeaderTextAnchor href="/profile" text="닫기" />
        <HeaderTitle>프로필 수정</HeaderTitle>
        <ConfirmBtn type="button" onClick={onClick}>
          완료
        </ConfirmBtn>
      </Container>
    </HeaderWrap>
  );
}

export default EditProfileHeader;
