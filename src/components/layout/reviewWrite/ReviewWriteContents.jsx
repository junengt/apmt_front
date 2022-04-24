import React from "react";
import styled from "styled-components";
import { WriteInputWrap } from "../write/WriteInputWrap";

const WriteArea = styled.textarea`
  width: 100%;
  height: 5em;
  border: 0;
  font-size: 18px;
  outline: none;
  padding: 0 18px;
  background: rgb(250, 250, 250);
`;

function ReviewWriteContents({ onChange, contents }) {
  return (
    <WriteInputWrap>
      <WriteArea
        type="text"
        name="contents"
        placeholder="이분에게 구매할 다른 분에게 도움을 줄 수가 있어요."
        onChange={onChange}
        value={contents}
        required
      />
    </WriteInputWrap>
  );
}

export default ReviewWriteContents;
