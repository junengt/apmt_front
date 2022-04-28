import { dbService } from "../utils/api/fbInstance";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Chats from "../components/Chats";
import styles from "../css/ChatList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {
  query,
  onSnapshot,
  collection,
  orderBy,
  where,
} from "firebase/firestore";
import { MobileContainer } from "../components/common/MobileContainer";
import { MobileInner } from "../components/common/MobileInner";
import ProfileHeader from "../components/layout/profile/ProfileHeader";
import ChatItem from "../components/layout/chatlist/ChatItem";
import NoticeItem from "../components/layout/chatlist/NoticeItem";

const ChatListBox = styled.div`
  height: 500px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

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

const ChatImg = styled.img`
  width: 55px;
  height: 55px;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
`;

function ChatList() {
  const { userObj } = useSelector(({ user }) => ({
    userObj: user.currentUser,
  }));

  const [notice, setNotice] = useState([]);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    let isComponentMounted = true;

    //공지 채팅 불러오기
    const n = query(
      collection(dbService, "noticeroom"),
      where("who", "==", userObj.uid)
    );
    onSnapshot(n, (snapshot) => {
      const noticeArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotice(noticeArray);
    });

    const q = query(
      collection(dbService, "chatroom"),
      where("show", "array-contains", userObj.uid),
      orderBy("date", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const chatListArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChats(chatListArray);
    });
    //
    // dbService
    //   .collection("chatroom")
    //   .where("who", "array-contains", userObj.uid)
    //   .orderBy("date", "desc")
    //   .onSnapshot((snapshot) => {
    //     const chatListArray = snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       ...doc.data(),
    //     }));
    //     setChats(chatListArray);
    //   });
    return () => {
      isComponentMounted = false;
    };
  }, []);

  //to chat
  const chattingObj = {
    opponentId: userObj.uid,
    chatRoomId: userObj.uid,
  };

  return (
    <MobileContainer>
      <MobileInner>
        <form>
          <ProfileHeader title="대화 내역"></ProfileHeader>
          {notice.length == 0 ? (
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
                      src={require("../icon/applelogo.png")}
                      alt="profile"
                    />
                  </ChatPhoto>
                  <ChatWriter>
                    AppleMart
                    <ChatContent>
                      환영합니다. 채팅으로 거래를 시작해 보세요!
                    </ChatContent>
                  </ChatWriter>
                </div>
              </Chat>
            </Link>
          ) : (
            <ul>
              {notice.map((note) => (
                <NoticeItem key={note.id} noteObj={note} userObj={userObj} />
              ))}
            </ul>
          )}
          <ul>
            {chats.map((chat) => (
              <ChatItem key={chat.id} chatObj={chat} userObj={userObj} />
            ))}
          </ul>
        </form>
      </MobileInner>
    </MobileContainer>
  );
}

export default ChatList;
