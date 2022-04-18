import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Chat.module.css";

const Chats = ({ userObj, chatObj }) => {
  const timeValue = new Date() / 1000 - chatObj.date.seconds;
  console.log("user", userObj);
  console.log("chatObj", chatObj);
  //to chat
  const chattingObj = {
    opponentName: chatObj.whoName.find(function (item) {
      return item !== userObj.displayName;
    }),
    opponentId: chatObj.who.find(function (item) {
      return item !== userObj.uid;
    }),
    opponentPhoto: chatObj.whoPhoto.find(function (item) {
      return item !== userObj.photoURL;
    }),
    productId: chatObj.product,
    productPhoto: chatObj.productPhoto.photoPath,
    chatRoomId: chatObj.id,
    productName: chatObj.productName,
    price: chatObj.price,
    status: chatObj.status,
  };

  return (
    <>
      <Link
        to="/chatroom"
        state={chattingObj}
        style={{ textDecoration: "none", color: "Black" }}
      >
        <div className={styles.chatField}>
          <div>
            <img
              className={styles.opponentPhoto}
              src={
                !chattingObj.opponentPhoto
                  ? require("../icon/applelogo.png")
                  : chattingObj.opponentPhoto
              }
              width="50px"
              height="50px"
              alt="attachment"
            />
          </div>
          <div className={styles.content}>
            <span style={{ fontWeight: "bold" }}>
              {chattingObj.opponentName}{" "}
            </span>
            <span style={{ color: "gray" }}>
              {timeValue < 60
                ? "방금전"
                : timeValue < 3600
                ? Math.floor(timeValue / 60) + "분전"
                : timeValue < 86400
                ? Math.floor(timeValue / 3600) + "시간전"
                : timeValue < 259200
                ? Math.floor(timeValue / 86400) + "일전"
                : "한달전"}
            </span>
            <br />
            {chatObj.text.substring(0, 20)}
          </div>
          <div>
            <img
              className={styles.productPhoto}
              src={
                !chattingObj.productPhoto
                  ? require("../icon/applelogo.png")
                  : chattingObj.productPhoto
              }
              width="50px"
              height="50px"
              alt="attachment"
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Chats;
