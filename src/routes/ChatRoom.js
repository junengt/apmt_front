import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "../utils/api/fbInstance";
import Message from "../components/Message";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../css/ChatRoom.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { ReactComponent as Close } from "../icon/close.svg";
import { useSelector } from "react-redux";
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

const ChatRoom = () => {
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
      collection(dbService, "chatroom", chattingObj.chatRoomId, "messages"),
      orderBy("createdAt", "asc")
    );
    onSnapshot(q, (snapshot) => {
      const chatArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChats(chatArray);
    });
    return () => {
      isComponentMounted = false;
    };
  }, []);

  const onSubmit = async (event) => {
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
      who: [userObj.uid, chattingObj.opponentId],
      whoPhoto: [userObj.photoURL, chattingObj.opponentPhoto],
      whoName: [userObj.displayName, chattingObj.opponentName],
      product: chattingObj.productId,
      productName: chattingObj.productName,
      price: chattingObj.price,
      status: chattingObj.status,
      productPhoto: chattingObj.productPhoto,
      date: new Date(),
    };
    const chatObj = {
      text: chat,
      creatorName: userObj.displayName,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      creatorPhoto: userObj.photoURL,
      attachmentUrl,
    };
    await setDoc(
      doc(dbService, "chatroom", chattingObj.chatRoomId),
      chatRoomObj
    );
    await addDoc(
      collection(dbService, "chatroom", chattingObj.chatRoomId, "messages"),
      chatObj
    );
    setChat("");
    setAttachment("");
    setFile("");
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

  //거래하기 모달
  const [modalIsOpen, setModalIsOpen] = useState(false);
  Modal.setAppElement("#root");
  const [show, setshow] = useState(0);

  const onClose = () => {
    setModalIsOpen(false);
    setshow(0);
  };

  return (
    <div className={styles.center}>
      <div className={styles.form}>
        <div className={styles.opponentField}>
          <div>
            <button
              className={styles.opponentBack}
              onClick={() => navigate(-1)}
            >
              {" "}
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </div>
          <div style={{ width: "100%" }}>
            <p> {chattingObj.opponentName} </p>
          </div>
        </div>
        <div className={styles.productField}>
          <div>
            <img
              className={styles.productPhoto}
              src={
                chattingObj.productPhoto == ""
                  ? require("../icon/applelogo.png")
                  : chattingObj.productPhoto
              }
              width="50px"
              height="50px"
              alt="attachment"
            />
          </div>
          <div className={styles.productContent}>
            <span>
              ({chattingObj.status}){chattingObj.productName.substring(0, 20)}
            </span>
            <br />
            {chattingObj.price}
          </div>
          <div>
            <button
              onClick={() => setModalIsOpen(true)}
              className={styles.tradeButton}
            >
              거래하기
            </button>
            <Modal
              isOpen={modalIsOpen}
              className={styles.modal}
              shouldCloseOnOverlayClick={false}
              onRequestClose={() => setModalIsOpen(false)}
              style={{
                overlay: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(61, 61, 61, 0.342)",
                },
              }}
            >
              <div style={{ textAlign: "right" }}>
                <button onClick={onClose} className={styles.close}>
                  <Close />
                </button>
              </div>
              <div
                style={{
                  alignIems: "center",
                  display: show == 0 ? "block" : "none",
                }}
              >
                <p className={styles.modalText}>거래방식을 선택해주세요.</p>
                <div className={styles.modalGroup}>
                  <div>
                    <button
                      className={styles.modalButton}
                      onClick={() => setshow(2)}
                    >
                      만나서 현금결제
                    </button>
                  </div>
                  <div>
                    <button
                      className={styles.modalButton}
                      onClick={() => setshow(1)}
                    >
                      포인트로 결제
                    </button>
                  </div>
                </div>
              </div>
              <div style={{ display: show == 1 ? "block" : "none" }}>
                <p className={styles.modalText}>
                  잔여 포인트: 999,999원
                  <br />
                  결제 포인트: 59,999원
                  <br />
                  결제 후 포인트: 59,999원
                </p>
                <div className={styles.modalGroup}>
                  <div>
                    <button
                      className={styles.modalButton}
                      onClick={() => setshow(2)}
                    >
                      결제하기
                    </button>
                  </div>
                  <div>
                    <button className={styles.modalButton} onClick={onClose}>
                      취소
                    </button>
                  </div>
                </div>
              </div>
              <div style={{ display: show == 2 ? "block" : "none" }}>
                <p className={styles.modalText}>
                  거래가 완료되었습니다.
                  <br /> 소중한 후기를 남겨보세요.
                </p>
                <div className={styles.modalGroup}>
                  <button
                    className={styles.modalButton}
                    onClick={() => setModalIsOpen(false)}
                  >
                    후기 남기기
                  </button>
                  <button
                    className={styles.modalButton}
                    onClick={() => setModalIsOpen(false)}
                  >
                    거래 완료
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
        <div>
          <div className={styles.chatRoom}>
            <ul className={styles.chatContent}>
              <div>
                {chats.map((chat) => (
                  <Message
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
            <form onSubmit={onSubmit}>
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
                  <input
                    type="submit"
                    value=""
                    className={styles.planeButton}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
