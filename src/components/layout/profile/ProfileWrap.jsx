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
  text-align: center;
  & a {
    width: 100%;
  }
`;

const FontSize = styled.span`
  font-size: 14px;
  text-align: center;
`;

function ProfileWrap({ name, photoURL, price, priceOnclick }) {
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
        <ProfilePrice price={price} priceOnclick={priceOnclick}></ProfilePrice>
        <ProfileBotWrap>
          <ProfileBot>
            <OwnList>
              <Link to="/sale">
                <SaleBlock />
                <FontSize>판매내역</FontSize>
              </Link>
            </OwnList>
            <OwnList>
              <Link to="/buy">
                <PurchaseBlock />
                <FontSize>구매내역</FontSize>
              </Link>
            </OwnList>
            <OwnList>
              <Link to="/like">
                <WatchBlock />
                <FontSize>관심내역</FontSize>
              </Link>
            </OwnList>
          </ProfileBot>
        </ProfileBotWrap>
      </ProfileContainer>
    </ProfileInner>
  );
}

export default ProfileWrap;
