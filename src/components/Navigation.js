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
import IPad from "./toggleGroup/IPad";
import Watch from "./toggleGroup/Watch";
import IPhone from "./toggleGroup/IPhone";
import AirPods from "./toggleGroup/AirPods";
import Etc from "./toggleGroup/Etc";
import { check } from "prettier";

const Navigation = ({ listState, list, setList }) => {
  const [value, setValue] = useState();
  const [render, setRender] = useState(true);
  const ref = useRef();

  const handleChange = (val) => {
    setValue(val);
    listState(val);
  };
  useEffect(() => {
    setValue(...list);
  }, [list]);

  const onClick = (e) => {
    navigate("/items");
  };

  const buttonSize = {
    fontSize: "12px",
    margin: "8px 8px 8px 8px",
    padding: "4px",
  };
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        id="navbar"
        style={{
          position: "fixed",
          width: "100%",
          maxHeight: "60px",
          paddingLeft: "0px",
          zIndex: 3,
        }}
        className="navdbar navbar-expand-md nav-bg  navbar-dark"
      >
        <Nav style={{ alignItems: "center" }} className="center navbar-nav">
          <NavItem className="nav-item-box">
            <Link to="/" className="nav-link">
              <img
                src="https://www.apple.com/ac/globalnav/6/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg"
                alt="logo"
              />
            </Link>
          </NavItem>
          <ToggleButtonGroup
            type="checkbox"
            value={value}
            onChange={handleChange}
            onClick={onClick}
          >
            <ToggleButton
              className=" bg-black border-0  align-self-center navbar-text"
              id="tbg-btn-1"
              value={"Mac"}
              style={buttonSize}
            >
              <NavItem className="nav-item-box">Mac</NavItem>
            </ToggleButton>
            <ToggleButton
              className="bg-black border-0  align-self-center navbar-text"
              id="tbg-btn-2"
              value={"iPad"}
              style={buttonSize}
            >
              <NavItem className="nav-item-box">iPad</NavItem>
            </ToggleButton>
            <ToggleButton
              className="bg-black border-0  align-self-center navbar-text"
              id="tbg-btn-3"
              value={"Watch"}
              style={buttonSize}
            >
              <NavItem className="nav-item-box">Watch</NavItem>
            </ToggleButton>
            <ToggleButton
              className="bg-black border-0  align-self-center navbar-text"
              id="tbg-btn-4"
              value={"iPhone"}
              style={buttonSize}
            >
              <NavItem className="nav-item-box">iPhone</NavItem>
            </ToggleButton>
            <ToggleButton
              className="bg-black border-0  align-self-center navbar-text"
              id="tbg-btn-5"
              value={"AirPods"}
              style={buttonSize}
            >
              <NavItem className="nav-item-box">AirPods</NavItem>
            </ToggleButton>
            <ToggleButton
              className="bg-black border-0  align-self-center navbar-text"
              id="tbg-btn-6"
              value={"Etc."}
              style={buttonSize}
            >
              <NavItem className="nav-item-box">Etc.</NavItem>
            </ToggleButton>
          </ToggleButtonGroup>
          <NavItem className="nav-item-box">
            <Link to="/items" className="text-white nav-icon nav-link ">
              <i
                style={{ fontWeight: 100, color: "white" }}
                className=" fa fa-search"
              ></i>
            </Link>
          </NavItem>
          <NavItem className="nav-item-box">
            <Link
              to="/auth"
              style={{ textDecoration: "none" }}
              className="text-white nav-icon nav-link"
            >
              <span style={{ fontSize: "12px", color: "white" }}>Login</span>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
