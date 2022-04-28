import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "../utils/api/fbInstance";
import Notice from "../components/Notice";
import FirstNotice from "../components/FirstNotice";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../css/ChatRoom.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Circles } from "react-loader-spinner";
import {
  doc,
  onSnapshot,
  collection,
  orderBy,
  setDoc,
  addDoc,
  query,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const NoticeRoom = () => {
  const [loading, setLoading] = useState(false);
  const { userObj } = useSelector(({ user }) => ({
    userObj: user.currentUser,
  }));
  let navigate = useNavigate();
  const location = useLocation();
  const chattingObj = location.state;
  console.log(chattingObj);
  const [chat, setChat] = useState("");
  const [chats, setChats] = useState([]);

  useEffect(() => {
    let isComponentMounted = true;
    const q = query(
      collection(dbService, "noticeroom", userObj.uid, "messages"),
      orderBy("createdAt", "asc")
    );
    onSnapshot(q, (snapshot) => {
      const chatArray = snapshot.docs.map((docu) => {
        return {
          id: docu.id,
          ...docu.data(),
        };
      });
      setChats(chatArray);
    });
  }, []);

  const onSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = await ref(
        storageService,
        `${userObj.uid}/${uuidv4()}`
      );
      const response = await uploadString(
        attachmentRef,
        attachment,
        "data_url"
      );
      attachmentUrl = await getDownloadURL(response.ref);
    }

    const chatRoomObj = {
      text: chat,
      who: userObj.uid,
      date: new Date(),
    };

    const chatObj = {
      text: chat,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      seen: false,
      attachmentUrl,
    };

    await setDoc(doc(dbService, "noticeroom", userObj.uid), chatRoomObj);
    await addDoc(
      collection(dbService, "noticeroom", userObj.uid, "messages"),
      chatObj
    );
    setChat("");
    setAttachment("");
    setFile("");
    setLoading(false);
  };

  const postObj = {
    creatorName: chattingObj.opponentName,
    productName: chattingObj.productName,
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setChat(value);
  };

  const [attachment, setAttachment] = useState("");
  const [file, setFile] = useState("");

  const onFileChange = (event) => {
    const {
      target: { files, value },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    setFile(value);
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => {
    setAttachment(null);
    setFile("");
  };

  return (
    <div className={styles.center}>
      <div className={styles.form}>
        <div className={styles.noticeField}>
          <div style={{ display: "inline-flex", width: " " }}>
            <button
              className={styles.opponentBack}
              onClick={() => navigate(-1)}
            >
              {" "}
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div>
              <p style={{ width: "200px" }}> AppleMart </p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.chatRoom}>
            <ul className={styles.chatContent}>
              <div>
                <FirstNotice />
                {chats.map((chat) => (
                  <Notice
                    key={chat.id}
                    chatObj={chat}
                    userObj={userObj}
                    isOwner={chat.creatorId === userObj.uid}
                  />
                ))}
                {attachment && (
                  <div className={styles.ownBubble}>
                    <img
                      src={attachment}
                      width="250px"
                      height="250px"
                      alt="attachment"
                    />
                    <div>
                      <button onClick={onClearAttachment}>취소</button>
                    </div>
                  </div>
                )}
              </div>
            </ul>
            <form
              onSubmit={
                !chat && !file
                  ? (e) => {
                      e.preventDefault();
                    }
                  : loading
                  ? (e) => {
                      e.preventDefault();
                    }
                  : onSubmit
              }
            >
              <div className={styles.inputGroup}>
                <div className={styles.file}>
                  <label htmlFor="ex_file" />
                  <input
                    type="file"
                    id="ex_file"
                    accept="image/*"
                    onChange={onFileChange}
                    value={file}
                  />
                </div>
                <div>
                  <input
                    className={styles.inputContent}
                    value={chat}
                    onChange={onChange}
                    type="text"
                    placeholder="채팅 내용을 입력해 주세요."
                    maxLength={120}
                  />
                </div>
                <div>
                  {!chat && !file ? (
                    <div className={styles.planeButton} />
                  ) : loading ? (
                    <Circles
                      color="gray"
                      heigt={25}
                      width={25}
                      timeout={3000}
                    />
                  ) : (
                    <input
                      type="submit"
                      value=""
                      className={styles.planeButton}
                    />
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeRoom;
