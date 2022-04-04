import React, { useEffect, useState } from "react";
import { Nav, NavItem, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { WriteInputWrap } from "../layout/write/WriteInputWrap";
import styled from "styled-components";

const WritingStuffTag = ({ tags, tagsState }) => {
  const [value, setValue] = useState([]);

  const handleChange = (val) => {
    setValue([...val]);
    tagsState([val]);
  };
  useEffect(() => {
    setValue(tags);
  }, [tags]);

  const buttonClassName = "col-xs-4 col-sm-3 col-lg-2 text-black";

  const buttonSize = {
    fontSize: "12px",
    margin: "0px auto",
    padding: "0px auto",
    border: "none",
    backgroundColor: "rgb(250, 250, 250)",
  };
  return (
    <>
      <Nav
        style={{
          alignItems: "center",
          marginBottom: "10px",
          marginTop: "10px",
        }}
        className="navbar-nav row chapternav"
      >
        <ToggleButtonGroup
          className="chpater-items"
          name="tagGroup"
          type="radio"
          value={value}
          onChange={handleChange}
        >
          <ToggleButton
            name="tagGroup"
            className={buttonClassName}
            id="tbg-radiobtn-1"
            value={"Mac"}
            style={buttonSize}
          >
            <NavItem className="nav-item-box">#Mac</NavItem>
          </ToggleButton>
          <ToggleButton
            name="tagGroup"
            className={buttonClassName}
            id="tbg-radiobtn-2"
            value={"iPad"}
            style={buttonSize}
          >
            <NavItem className="nav-item-box">#iPad</NavItem>
          </ToggleButton>
          <ToggleButton
            name="tagGroup"
            className={buttonClassName}
            id="tbg-radiobtn-3"
            value={"Watch"}
            style={buttonSize}
          >
            <NavItem className="nav-item-box">#Watch</NavItem>
          </ToggleButton>
          <ToggleButton
            name="tagGroup"
            className={buttonClassName}
            id="tbg-radiobtn-4"
            value={"iPhone"}
            style={buttonSize}
          >
            <NavItem className="nav-item-box">#iPhone</NavItem>
          </ToggleButton>
          <ToggleButton
            name="tagGroup"
            className={buttonClassName}
            id="tbg-radiobtn-5"
            value={"AirPods"}
            style={buttonSize}
          >
            <NavItem className="nav-item-box">#AirPods</NavItem>
          </ToggleButton>
          <ToggleButton
            name="tagGroup"
            className={buttonClassName}
            id="tbg-radiobtn-6"
            value={"Etc."}
            style={buttonSize}
          >
            <NavItem className="nav-item-box">#Etc.</NavItem>
          </ToggleButton>
        </ToggleButtonGroup>
      </Nav>
    </>
  );
};

export default WritingStuffTag;
