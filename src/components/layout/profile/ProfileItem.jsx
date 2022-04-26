import React from "react";
import { DanggeunInner, ListBlock } from "./MyDanggeunStyle";
import styles from "../../../css/Profile.module.css";
import { returnTime } from "../write/commonFunc";
import priceCommaFunc from "../../../utils/priceCommaFunc";
import styled from "styled-components";

const ProfileItemTitle = styled.div`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
const ProfileItem = ({ item }) => {
  const { title, date, division, price } = item;
  console.log(date);
  return (
    <>
      <DanggeunInner>
        <ListBlock>
          <div className={styles.field2}>
            <img
              className={styles.profilephoto1}
              src={
                division === "출금" || division === "입금"
                  ? require("../../../icon/withraw.png")
                  : require("../../../icon/sell.jpg")
              }
            />
            <p style={{ textAlign: "left", width: "50%", fontSize: "15px" }}>
              {title && (
                <ProfileItemTitle>{title.substring(0, 25)}</ProfileItemTitle>
              )}
              <br></br>
              {date} | {division}{" "}
            </p>
            <p
              style={{
                marginLeft: "20px",
                marginTop: "10px",
                fontSize: "14px",
                width: "20%",
              }}
            >
              {priceCommaFunc(price)}원{" "}
            </p>
          </div>
        </ListBlock>
      </DanggeunInner>
    </>
  );
};

export default ProfileItem;
