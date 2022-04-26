import { dbService } from "../utils/api/fbInstance";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const ChatListBox = styled.div`
  height: 500px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

function ChatList() {
  const { userObj } = useSelector(({ user }) => ({
    userObj: user.currentUser,
  }));

  const [chats, setChats] = useState([]);

  useEffect(() => {
    let isComponentMounted = true;
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

  return (
    <MobileContainer>
      <MobileInner>
        <form>
          <ProfileHeader title="대화 내역"></ProfileHeader>

          {chats.length == 0 ? (
            <div className={styles.chatListBox}>
              <div className={styles.chatField}>
                <div>
                  <img
                    className={styles.opponentPhoto}
                    src={require("../icon/applelogo.png")}
                    width="50px"
                    height="50px"
                    alt="attachment"
                  />
                </div>
                <div className={styles.content}>
                  <span style={{ fontWeight: "bold" }}>AppleMart</span>
                  <br />
                  채팅 내역이 없습니다. 채팅으로 거래를 시작해보세요!
                </div>
              </div>
            </div>
          ) : (
            <ul>
              {chats
                .filter((chatObj) => !chatObj.first)
                .map((chat) => (
                  <ChatItem key={chat.id} chatObj={chat} userObj={userObj} />
                ))}
            </ul>
          )}
        </form>
      </MobileInner>
    </MobileContainer>
  );
}

export default ChatList;
