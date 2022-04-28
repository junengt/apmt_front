import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { storageService } from "../utils/api/fbInstance";
import { v4 as uuidv4 } from "uuid";
import styles from "../css/Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  getDownloadURL,
  ref,
  uploadString,
  deleteObject,
} from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { MobileContainer } from "../components/common/MobileContainer";
import { MobileInner } from "../components/common/MobileInner";
import EditProfileHeader from "../components/layout/editProfile/editProfileHeader";
import { useSelector } from "react-redux";

const EditProfile = ({ refreshUser }) => {
  const navigate = useNavigate();
  const { userObj } = useSelector(({ user }) => ({
    userObj: user.currentUser,
  }));
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  let newPhotoURL = useState(userObj.photoURL);
  const [attachment, setAttachment] = useState(userObj.photoURL);
  const [file, setFile] = useState("");
  const [fileChanged, setFileChanged] = useState(false);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

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
    setFileChanged(true);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (fileChanged) {
      if (userObj.photoURL) {
        await deleteObject(ref(storageService, newPhotoURL));
      }
      const attachmentRef = await ref(
        storageService,
        `${userObj.uid}/${uuidv4()}`
      );
      const response = await uploadString(
        attachmentRef,
        attachment,
        "data_url"
      );
      newPhotoURL = await getDownloadURL(response.ref);
    }
    console.log(newPhotoURL);

    if (userObj.displayName !== newDisplayName || fileChanged) {
      await updateProfile(userObj, {
        displayName: newDisplayName,
        photoURL: fileChanged ? newPhotoURL : userObj.photoURL,
      });
      alert("프로필 수정 완료");
      navigate("/profile");
      refreshUser();
    } else {
      alert("변경된 사항이 없습니다");
    }
  };

  return (
    <MobileContainer>
      <MobileInner>
        <center>
          <div>
            <form onSubmit={onSubmit}>
              <EditProfileHeader onClick={onSubmit}></EditProfileHeader>
              <div>
                <img
                  className={styles.profilephoto}
                  src={
                    attachment ? attachment : require("../icon/applelogo.png")
                  }
                  alt="attachment"
                />
              </div>
              <div className={styles.filebox}>
                <label htmlFor="ex_file"> 프로필 사진 선택 </label>
                <input
                  type="file"
                  id="ex_file"
                  accept="image/*"
                  onChange={onFileChange}
                  value={file}
                />
              </div>
              <div className={styles.field}>
                <input
                  onChange={onChange}
                  type="text"
                  placeholder="닉네임을 입력해주세요"
                  value={newDisplayName}
                  maxLength={10}
                />
                <span>
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
            </form>
          </div>
        </center>
      </MobileInner>
    </MobileContainer>
  );
};

export default EditProfile;
