import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DanggeunInner,
  DanggeunWrap,
  ListBlock,
  LogOut,
  Ptag,
} from "../components/layout/profile/MyDanggeunStyle";
import DanggeunHeader from "../components/layout/profile/DangguenHeader";
import ProfileWrap from "../components/layout/profile/ProfileWrap";
import { EmptyBlock } from "../components/common/EmptyBlock";
import { authService } from "../utils/api/fbInstance";
import { MobileContainer } from "../components/common/MobileContainer";
import { MobileInner } from "../components/common/MobileInner";
import ProfileHeader from "../components/layout/profile/ProfileHeader";
import styles from "./Profile.module.css";

const Profile = ({ userObj, refreshUser }) => {
  const navigate = useNavigate();

  const onLogOutClick = async () => {
    await authService.signOut();
    refreshUser("logout");
    navigate("/");
  };

  return (
    <MobileContainer>
      <MobileInner>
        <ProfileHeader></ProfileHeader>
        <DanggeunWrap>
          <ProfileWrap
            photoURL={userObj.photoURL}
            name={userObj.displayName}
            addr={""}
          />
          <DanggeunInner>
            <ListBlock>
              <Link to="/chat">
                <LogOut onClick={onLogOutClick}>
                  <Ptag>대화내역</Ptag>
                </LogOut>
              </Link>
              <EmptyBlock />
            </ListBlock>
          </DanggeunInner>
          <DanggeunInner>
            <ListBlock>
              <Link to="/login">
                <LogOut onClick={onLogOutClick}>
                  <Ptag>로그아웃</Ptag>
                </LogOut>
              </Link>
              <EmptyBlock />
            </ListBlock>
          </DanggeunInner>
          <DanggeunInner>
            <ListBlock>
              <div className={styles.field2}>
                <img
                  className={styles.profilephoto1}
                  src={require("../icon/buy.jpg")}
                />
                <p
                  style={{ textAlign: "left", width: "55%", fontSize: "15px" }}
                >
                  <span>상품명</span>
                  <br></br>22.03.21 12:53 | 구매{" "}
                </p>
                <p
                  style={{
                    marginLeft: "20px",
                    marginTop: "10px",
                    fontSize: "15px",
                    width: "20%",
                  }}
                >
                  10,100원{" "}
                </p>
              </div>
            </ListBlock>
          </DanggeunInner>
          <DanggeunInner>
            <ListBlock>
              <div className={styles.field2}>
                <img
                  className={styles.profilephoto1}
                  src={require("../icon/withraw.png")}
                />
                <p
                  style={{ textAlign: "left", width: "50%", fontSize: "15px" }}
                >
                  <span>(은행)계좌번호</span>
                  <br></br>22.03.21 12:53 | 출금{" "}
                </p>
                <p
                  style={{
                    marginLeft: "20px",
                    marginTop: "10px",
                    fontSize: "15px",
                    width: "20%",
                  }}
                >
                  10,100원{" "}
                </p>
              </div>
            </ListBlock>
          </DanggeunInner>
        </DanggeunWrap>
      </MobileInner>
    </MobileContainer>
  );
};

export default Profile;
