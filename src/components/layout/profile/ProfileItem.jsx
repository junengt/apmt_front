import React from "react";
import { DanggeunInner, ListBlock } from "./MyDanggeunStyle";
import styles from "../../../css/Profile.module.css";

const ProfileItem = ({ item }) => {
  const { title, date, division, price } = item;
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
              <span>{title}</span>
              <br></br>
              {date} | {division}{" "}
            </p>
            <p
              style={{
                marginLeft: "20px",
                marginTop: "10px",
                fontSize: "15px",
                width: "20%",
              }}
            >
              {price}원{" "}
            </p>
          </div>
        </ListBlock>
      </DanggeunInner>
    </>
  );
};

export default ProfileItem;
