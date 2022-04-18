import React from "react";
import styled from "styled-components";

const Tagwrap = styled.div`
  margin: 0px auto;
  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;
  font-family: "Noto Sans KR", -apple-system, system-ui, "Apple SD Gothic Neo",
    "Malgun Gothic", "Nanum Gothic", sans-serif;
  font-size: 16px;
  color: #444;
  line-height: 28px;
  letter-spacing: -0.5px;
`;
const MiniTagWrap = styled.div`
  margin: 0px auto;
  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;
  font-family: "Noto Sans KR", -apple-system, system-ui, "Apple SD Gothic Neo",
    "Malgun Gothic", "Nanum Gothic", sans-serif;
  font-size: 10px;
  color: #444;
  line-height: 28px;
  letter-spacing: -0.5px;
`;
const MiniTagContent = styled.button`
  display: inline-block;
  position: relative;
  margin: 0 6px 6px 0;
  font-size: 8px;
  font-family: "Montserrat", "Noto Sans KR", -apple-system, system-ui,
    "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic", sans-serif;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0;
  color: #000;
  padding: 0 8px 0 8px;
  background: #f4f4f4;
  border-radius: 4px;
`;
const TagContent = styled.button`
  display: inline-block;
  position: relative;
  margin: 0 6px 6px 0;
  font-size: 12px;
  font-family: "Montserrat", "Noto Sans KR", -apple-system, system-ui,
    "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic", sans-serif;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0;
  color: #000;
  padding: 0 12px 0 12px;
  background: #f4f4f4;
  border-radius: 4px;
`;
const TagImg = styled.img`
  display: inline-block;
  position: absolute;
  left: 8px;
  top: 6px;
  width: 20px;
  height: 20px;
`;
const ResetTag = styled.button`
  display: inline-block;
  position: relative;
  margin: 0 6px 6px 0;
  font-size: 12px;
  font-family: "Montserrat", "Noto Sans KR", -apple-system, system-ui,
    "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic", sans-serif;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0;
  color: #2d2d2d;
  padding: 0 12px 0 34px;
  background: #f4f4f4;
  border-radius: 4px;
`;
const Tag = ({ tags, listState, isDetail }) => {
  const onClick = (e) => {
    const target = e.target.name;
    const filter = tags.filter((element) => target !== element);
    listState(filter);
  };

  return isDetail ? (
    <MiniTagWrap>
      {tags?.map((e) => {
        if (e.id === "") {
          return "";
        }
        return <MiniTagContent name={e.id}>#{e.id} </MiniTagContent>;
      })}
    </MiniTagWrap>
  ) : (
    <Tagwrap isDetail={isDetail}>
      {tags?.map((e) => {
        if (e.id === "") {
          return "";
        }
        return (
          <TagContent isDetail={isDetail} onClick={onClick} name={e.id}>
            #{e.id}{" "}
          </TagContent>
        );
      })}

      <ResetTag
        onClick={() => {
          listState([]);
        }}
      >
        {" "}
        <TagImg src="https://cdn4.iconfinder.com/data/icons/game-general-icon-set-1/512/reset-512.png" />
        reset
      </ResetTag>
    </Tagwrap>
  );
};

export default Tag;
