import React, { useEffect, useRef, useState } from "react";
import {
  Navbar,
  NavItem,
  Nav,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Mac from "./toggleGroup/Mac";
import Watch from "./toggleGroup/Watch";
import AirPods from "./toggleGroup/AirPods";
import { useSelector } from "react-redux";

const Navigation = ({ listState, list }) => {
  const { userObj } = useSelector(({ user }) => ({
    userObj: user.currentUser,
  }));
  return <></>;
};

export default Navigation;
