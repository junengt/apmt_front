import React, { useEffect, useState } from "react";
import { Nav, NavItem, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const AirPods = ({ listState, list }) => {
  const [value, setValue] = useState();

  const handleChange = (val) => {
    setValue(val);
    listState(val);
  };
  useEffect(() => {
    setValue(list);
  }, [list]);

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
      <Nav style={{ alignItems: "center" }} className="navbar-nav row">
        <ToggleButtonGroup
          className="chpater-items"
          type="checkbox"
          value={value}
          onChange={handleChange}
        >
          <ToggleButton
            className={buttonClassName}
            id="tbg-airpodsBtn-1"
            value={"AirPods Series"}
            style={buttonSize}
            checked="checked"
          >
            <NavItem className="">
              <img
                className="chapter-icon"
                src="https://www.apple.com/v/airpods/q/images/chapternav/airpods_2gen_light__ckwbqlgv1r9e_large.svg"
                alt="airPods"
              />
              <p>AirPods Series</p>
            </NavItem>
          </ToggleButton>
          <ToggleButton
            className={buttonClassName}
            id="tbg-airpodsBtn-2"
            value={"AirPods Pro"}
            style={buttonSize}
          >
            <NavItem className="">
              <img
                className="chapter-icon chapternav-item-macbook-pro-13"
                src="https://www.apple.com/v/airpods/q/images/chapternav/airpods_pro_light__ets5a19rt3au_large.svg"
                alt="air"
              />
              <p>AirPods Pro</p>
            </NavItem>
          </ToggleButton>
          <ToggleButton
            className={buttonClassName}
            id="tbg-airpodsBtn-3"
            value={"MacBook Pro 16”"}
            style={buttonSize}
          >
            <NavItem className="">
              <img
                className="chapter-icon chapternav-item-macbook-pro-13"
                src="https://www.apple.com/v/airpods/q/images/chapternav/airpods_max_light__cvaaddhgazqu_large.svg"
                alt="air"
              />
              <p>AirPods Max</p>
            </NavItem>
          </ToggleButton>
          <ToggleButton
            className={buttonClassName}
            id="tbg-airpodsBtn-4"
            value={""}
            style={buttonSize}
          >
            <NavItem className=""></NavItem>
          </ToggleButton>
          <ToggleButton
            className={buttonClassName}
            id="tbg-airpodsBtn-5"
            value={""}
            style={buttonSize}
          >
            <NavItem className="Accessories">
              <img
                className="chapter-icon chapternav-item-macbook-pro-13"
                src="https://www.apple.com/v/mac/home/bl/images/familybrowser/mac_accessories_light__cuds10wyptyu_large.svg"
                alt="Accessories"
              />
              <p>Accessories</p>
            </NavItem>
          </ToggleButton>
        </ToggleButtonGroup>
      </Nav>
    </>
  );
};

export default AirPods;
