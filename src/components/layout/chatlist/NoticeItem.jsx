import React, { useState } from "react";
import styled from "styled-components";
import profile from "../../../images/ico/ico_profile_placeholder.png";
import { Link } from "react-router-dom";
import { dbService } from "../../../utils/api/fbInstance";
import { query, collection, where, getDocs } from "firebase/firestore";

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

const Unseen = styled.span`
  width: 18px;
  display: inline-block;
  height: 18px;
  border-radius: 50%;
  color: white;
  text-align: center;
  margin: 4px;
  padding: 1px;
  font-size: 12px;
  background-color: #e95158;
`;
const NoriceItem = ({ userObj, noteObj }) => {
  const timeValue = new Date() / 1000 - noteObj.date.seconds;

  //to chat
  const chattingObj = {
    opponentId: noteObj.who,
    chatRoomId: userObj.uid,
  };

  //읽지않은 메세지 불러오기
  const [unSeen, setUnSeen] = useState("");

  const r = collection(dbService, "notice", userObj.uid, "messages");
  const q = query(r, where("seen", "==", false));
  getDocs(q).then((snapshot) => setUnSeen(snapshot.docs.length));

  console.log(unSeen);

  return (
    <Link
      to="/noticeroom"
      state={chattingObj}
      style={{ textDecoration: "none", color: "Black" }}
    >
      <Chat>
        <div>
          <ChatPhoto>
            {" "}
            <ChatImg
              src={require("../../../icon/applelogo.png")}
              alt="profile"
            />
          </ChatPhoto>
          <ChatWriter>
            AppleMart ·{" "}
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
            <ChatContent>
              {noteObj.text.substring(0, 10)}
              {unSeen > 0 && <Unseen>{unSeen}</Unseen>}
            </ChatContent>
          </ChatWriter>
        </div>
      </Chat>
    </Link>
  );
};

export default NoriceItem;
