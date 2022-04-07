import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  ProfileImage,
  ProfileName,
  ProfileUrl,
  PurchaseBlock,
  SaleBlock,
  WatchBlock,
} from "./MyDanggeunStyle";
import { Inner } from "../Inner";
import styles from "../../../css/Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import ProfilePrice from "./ProfilePrice";

const ProfileInner = styled(Inner)`
  padding-bottom: 20px;
  border-bottom: 1px solid #d7d7d7;
  margin-bottom: 10px;
`;
const ProfileContainer = styled.div`
  padding-top: 15px;
`;

const ProfileTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileInfo = styled.div``;

const ProfileLocation = styled.span`
  display: block;
  margin-top: 3px;
  font-size: 0.85rem;
  font-weight: 400;
`;

const ProfileView = styled.div``;

const ProfileBotWrap = styled.div`
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    margin: 20px auto;
    background-color: #d7d7d7;
  }
`;

const ProfileBot = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

const OwnList = styled.div`
  width: 62px;

  & a {
    width: 100%;
  }
`;

function ProfileWrap({ name, photoURL }) {
  return (
    <ProfileInner>
      <ProfileContainer>
        <ProfileTop>
          <ProfileInfo>
            <ProfileImage
              src={
                photoURL
                  ? photoURL
                  : require("../../../images/ico/ico_profile_placeholder.png")
              }
            />
            <ProfileName>{name}</ProfileName>
          </ProfileInfo>
          <ProfileView>
            <Link to="/edit_profile">
              <ProfileUrl>프로필 수정</ProfileUrl>
            </Link>
          </ProfileView>
        </ProfileTop>
        <ProfilePrice price={"10,000"}></ProfilePrice>
        <ProfileBotWrap>
          <ProfileBot>
            <OwnList>
              <Link to="/sale">
                <SaleBlock />
                <span>판매내역</span>
              </Link>
            </OwnList>
            <OwnList>
              <PurchaseBlock />
              <span>구매내역</span>
            </OwnList>
            <OwnList>
              <WatchBlock />
              <span>관심내역</span>
            </OwnList>
          </ProfileBot>
        </ProfileBotWrap>
      </ProfileContainer>
    </ProfileInner>
  );
}

export default ProfileWrap;
