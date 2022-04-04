import React, { useEffect, useState } from "react";
import { Nav, NavItem, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const Etc = ({ listState, list }) => {
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
            id="tbg-etcBtn-1"
            value={"Display"}
            style={buttonSize}
          >
            <NavItem className="">
              <img
                className="chapter-icon"
                src="https://www.apple.com/v/mac/home/bl/images/familybrowser/displays_light__ewxqx5obdxci_large.svg"
                alt="display"
              />
              <p>Display</p>
            </NavItem>
          </ToggleButton>
          <ToggleButton
            className={buttonClassName}
            id="tbg-etcBtn-2"
            value={"AirTag"}
            style={buttonSize}
          >
            <NavItem className="">
              <img
                className="chapter-icon chapternav-item-macbook-pro-13"
                src="https://www.apple.com/v/iphone/home/be/images/chapternav/airtag_light__cb2bmnv6aoeu_large.svg"
                alt="airTag"
              />
              <p>AirTag</p>
            </NavItem>
          </ToggleButton>
          <ToggleButton
            className={buttonClassName}
            id="tbg-etcBtn-3"
            value={"Mac mini"}
            style={buttonSize}
          >
            <NavItem className="">
              <img
                className="chapter-icon chapternav-item-macbook-pro-13"
                src="https://www.apple.com/v/mac/home/bl/images/familybrowser/mac_mini_light__frtahmzmd4mm_large.svg"
                alt="air"
              />
              <p>Mac mini</p>
            </NavItem>
          </ToggleButton>
          <ToggleButton
            className={buttonClassName}
            id="tbg-etcBtn-4"
            value={"Mac Studio"}
            style={buttonSize}
          >
            <NavItem className="">
              <img
                className="chapter-icon chapternav-item-macbook-pro-13"
                src="https://www.apple.com/v/mac/home/bl/images/familybrowser/mac_studio_light__ea3pb1auizu6_large.svg"
                alt="air"
              />
              <p>Mac Studio</p>
            </NavItem>
          </ToggleButton>
          <ToggleButton
            className={buttonClassName}
            id="tbg-etcBtn-5"
            value={"Mac Pro"}
            style={buttonSize}
          >
            <NavItem className="">
              <img
                className="chapter-icon chapternav-item-macbook-pro-13"
                src="https://www.apple.com/v/mac/home/bl/images/familybrowser/mac_pro_light__cj4dvg7thx5y_large.svg"
                alt="Mac Pro"
              />
              <p>Mac Pro</p>
            </NavItem>
          </ToggleButton>
        </ToggleButtonGroup>
      </Nav>
    </>
  );
};

export default Etc;
