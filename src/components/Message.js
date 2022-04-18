import React from "react";
import styles from "../css/Message.module.css";

const Message = ({ chatObj, isOwner }) => {
  const createdTime = new Date(chatObj.createdAt);
  let createdHour =
    createdTime.getHours() < 12
      ? ("0" + createdTime.getHours()).slice(-2)
      : ("0" + (createdTime.getHours() - 12)).slice(-2);
  const createdMin = ("0" + createdTime.getMinutes()).slice(-2);
  const createdMonth = createdTime.getMonth() + 1;
  const createdDate = createdTime.getDate();
  let apm = createdTime.getHours() < 12 ? "오전" : "오후";
  let todayTime = new Date();
  let todayMonth = todayTime.getMonth() + 1;
  let todayDate = todayTime.getDate();

  return (
    <div className={styles.bubbleContainer}>
      <>
        {isOwner ? (
          <>
            <div className={styles.bubbleWrapper}>
              <div className={styles.inlineContainerOwn}>
                <div className={styles.ownBubble}>
                  <div>
                    {chatObj.attachmentUrl && (
                      <a href={chatObj.attachmentUrl}>
                        <img
                          className={styles.clipPhoto}
                          src={chatObj.attachmentUrl}
                          alt=""
                        />
                      </a>
                    )}
                  </div>
                  {chatObj.text}
                </div>
              </div>
              {createdDate == todayDate && createdMonth == todayMonth ? (
                <span className={styles.own}>
                  {apm} {createdHour} : {createdMin}
                </span>
              ) : (
                <span className={styles.own}>
                  {createdMonth}월 {createdDate}일
                </span>
              )}
            </div>
          </>
        ) : (
          <>
            <div className={styles.bubbleWrapper}>
              <div className={styles.inlineContainer}>
                <div className={styles.otherBubble}>
                  <div>
                    {chatObj.attachmentUrl ? (
                      <img
                        className={styles.clipPhoto}
                        src={chatObj.attachmentUrl}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  {chatObj.text}
                </div>
              </div>
              {createdDate == todayDate && createdMonth == todayMonth ? (
                <span className={styles.other}>
                  {apm} {createdHour} : {createdMin}
                </span>
              ) : (
                <span className={styles.other}>
                  {createdMonth}월 {createdDate}일
                </span>
              )}
            </div>
          </>
        )}
      </>
    </div>
  );
};
export default Message;
