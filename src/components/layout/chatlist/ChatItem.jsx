import React from "react";
import styled from "styled-components";
import profile from "../../../images/ico/ico_profile_placeholder.png";
import { Link } from "react-router-dom";

const Chat = styled.li`
  padding: 16px 0;
  border-bottom: 1px solid #e9ecef;
  position: relative;
  display: flex;
  justify-content: space-between;
`;
const ChatPhoto = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
const ChatWriter = styled.div`
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.47;
  letter-spacing: -0.5px;
  vertical-align: middle;
  margin-right: 8px;
  margin-left: 8px;
`;
const ChatContent = styled.div`
  padding-top: 8px;
  font-size: 15px;
  line-height: 1.47;
  letter-spacing: -0.5px;
`;
const ChatTime = styled.span`
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.5px;
  color: #868e96;
  margin-top: 8px;
`;

const ChatImg = styled.img`
  width: 55px;
  height: 55px;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
`;

const ItemImg = styled(ChatImg)`
  border-radius: 10%; ;
`;

const ChatItem = ({ userObj, chatObj }) => {
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
    productPhoto: chatObj.productPhoto,
    chatRoomId: chatObj.id,
    productName: chatObj.productName,
    price: chatObj.price,
    status: chatObj.status,
  };
  return (
    <Link
      to="/chatroom"
      state={chattingObj}
      style={{ textDecoration: "none", color: "Black" }}
    >
      <Chat>
        <div>
          <ChatPhoto>
            {" "}
            <ChatImg
              src={
                chattingObj.opponentPhoto ? chattingObj.opponentPhoto : profile
              }
              alt="profile"
            />
          </ChatPhoto>
          <ChatWriter>
            {chattingObj.opponentName} ·{" "}
            <ChatTime>
              {timeValue < 60
                ? "방금전"
                : timeValue < 3600
                ? Math.floor(timeValue / 60) + "분전"
                : timeValue < 86400
                ? Math.floor(timeValue / 3600) + "시간전"
                : timeValue < 259200
                ? Math.floor(timeValue / 86400) + "일전"
                : "한달전"}
            </ChatTime>
            <ChatContent>{chatObj.text.substring(0, 10)}</ChatContent>
          </ChatWriter>
        </div>
        <ItemImg
          src={
            chattingObj.productPhoto
              ? chattingObj.productPhoto.photoPath || chattingObj.productPhoto
              : require("../../../icon/applelogo.png")
          }
          alt="profile"
        ></ItemImg>
      </Chat>
    </Link>
  );
};

export default ChatItem;
