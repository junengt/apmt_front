import React, { useEffect, useState } from "react";
import { authService } from "../utils/api/fbInstance";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import styles from "../css/Auth.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faKey } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { MobileContainer } from "../components/common/MobileContainer";
import { MobileInner } from "../components/common/MobileInner";
import EditProfileHeader from "../components/layout/editProfile/editProfileHeader";
import ProfileHeader from "../components/layout/profile/ProfileHeader";
import axios from "axios";

const Auth = () => {
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");
  const navigate = useNavigate();

  const signIn = () => {
    if (mynumber === "" || mynumber.length < 10) {
      return;
    }
    let verify = new RecaptchaVerifier("recaptcha-container", {}, authService);
    signInWithPhoneNumber(authService, "+82" + mynumber, verify)
      .then((result) => {
        setfinal(result);
        alert("인증번호가 전송되었습니다.");
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };

  const ValidateOtp = () => {
    if (otp === "" || final === "") return;
    final
      .confirm(otp)
      .then((result) => {
        const user = result.user;
        console.log(result);
        // success
        axios({
          url: "/user",
          method: "post",
          headers: {
            Authorization: "Bearer " + user.accessToken,
          },
        })
          .then((result) => {
            alert("인증 성공");
            navigate("/");
          })
          .catch((reason) => {
            console.log(reason);
          });
      })
      .catch((err) => {
        console.log(err);
        alert("잘못된 인증번호 입니다.");
      });
  };

  return (
    <MobileContainer>
      <MobileInner>
        <center>
          <ProfileHeader title="인증 페이지"></ProfileHeader>
          <div>
            <div>
              <p style={{ fontSize: "20px", marginTop: "15px" }}>
                휴대폰 번호를 인증해 주세요.
              </p>
            </div>
            <img
              style={{ padding: "20px", width: "150px", height: "150px" }}
              src={require("../icon/applelogo.png")}
            />
            <div style={{ display: !show ? "block" : "none" }}>
              <div className={styles.field}>
                <input
                  value={mynumber}
                  onChange={(e) => {
                    setnumber(e.target.value);
                  }}
                  placeholder="'-' 없이 입력해 주세요"
                />
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
              </div>

              <button className={styles.submit} onClick={signIn}>
                {" "}
                인증 문자 받기{" "}
              </button>
              <div id="recaptcha-container"></div>
            </div>
            <div style={{ display: show ? "block" : "none" }}>
              <div className={styles.field}>
                <input
                  type="text"
                  placeholder={"인증번호를 입력해주세요"}
                  onChange={(e) => {
                    setotp(e.target.value);
                  }}
                ></input>
                <span>
                  <FontAwesomeIcon icon={faKey} />
                </span>
              </div>
              <button className={styles.submit} onClick={ValidateOtp}>
                인증 확인
              </button>
            </div>
          </div>
        </center>
      </MobileInner>
    </MobileContainer>
  );
};

export default Auth;
