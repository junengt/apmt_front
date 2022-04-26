import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "../modules/user";

const Profile = ({ refreshUser }) => {
  const { userObj } = useSelector(({ user }) => ({
    userObj: user.currentUser,
  }));
  const dispatch = useDispatch();
  const [profileItems, setProfileItems] = useState([
    {
      title: "상품명",
      date: "22.03.21 12:53",
      division: "구매",
      price: "11000",
    },
    {
      date: "22.03.21 12:53",
      division: "출금",
      price: "11000",
      title: "계좌거래",
    },
  ]);

  const navigate = useNavigate();
  const [price, setPrice] = useState(0);

  const pointOnclick = (point, chargeOrRefund) => {
    axios
      .post("/point", {
        point: point,
        chargeOrRefund: chargeOrRefund,
      })
      .then((result) => {
        setPrice(result.data.point);
      })
      .catch((reason) => {
        console.log("", reason);
      });
  };

  useEffect(() => {
    axios
      .get("/user")
      .then((result) => {
        setPrice(result.data.account);
      })
      .catch((reason) => {
        if (reason.toString().includes("401")) {
          alert("토큰이 만료되었습니다.");
          window.location.replace("/");
        }
      });
    axios
      .get("/profileItem")
      .then((result) => {
        console.log(result);
        setProfileItems(...[result.data.data]);
      })
      .catch((reason) => {
        console.log(reason);
      });
  }, [price]);

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
            price={price}
            priceOnclick={pointOnclick}
          />
          <DanggeunInner>
            <ListBlock>
              <Link to="/chatlist">
                <LogOut onClick={""}>
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
          {profileItems.map((e, index) => {
            return <ProfileItem key={index} item={e} />;
          })}
        </DanggeunWrap>
      </MobileInner>
    </MobileContainer>
  );
};

export default Profile;
