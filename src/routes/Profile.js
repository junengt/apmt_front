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
import styles from "../css/Profile.module.css";
import ProfileItem from "../components/layout/profile/ProfileItem";

const Profile = ({ userObj, refreshUser }) => {
  const navigate = useNavigate();
  const profileItems = [
    {
      title: "상품명",
      date: "22.03.21 12:53",
      division: "구매",
      price: "11000",
    },
    {
      title: "(은행) 계좌번호",
      date: "22.03.21 12:53",
      division: "출금",
      price: "11000",
    },
  ];
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
          {profileItems.map((e) => {
            return <ProfileItem item={e} />;
          })}
        </DanggeunWrap>
      </MobileInner>
    </MobileContainer>
  );
};

export default Profile;
