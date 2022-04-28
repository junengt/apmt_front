import React from "react";
import styles from "../css/Message.module.css";

const FirstNotice = () => {

  return (
    <div className={styles.bubbleContainer}>
        <div className={styles.bubbleWrapper}>
          <div className={styles.inlineContainer}>
          </div>
          <div
            className={styles.inlineContainer}>
            <div className={styles.otherBubble}>
             환영합니다. 채팅으로 거래를 시작해 보세요!
            </div>
          </div>
        </div>
    </div>
  );
};

export default FirstNotice;
