import React, { useEffect, useState } from "react";
import { Nav, NavItem, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const Mac = ({ listState, list }) => {
  const [value, setValue] = useState();
  const handleChange = (val) => {
    setValue(val);
    listState(val);
  };

  useEffect(() => {
    setValue(...list);
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
      <Nav
        style={{ alignItems: "center" }}
        className="navbar-nav row chapternav"
      >
        <ToggleButtonGroup
          className="chpater-items"
          type="checkbox"
          value={value}
          onChange={handleChange}
        >
          <ToggleButton
            className={buttonClassName}
            id="tbg-macBtn-1"
            value={"MacBook Air"}
            style={buttonSize}
          >
            <NavItem className="">
              <img
                className="chapter-icon"
                src="images/macbookair_light__fj8r9488gr6u_large.svg"
                alt="air"
              />
              <p className="">MacBook Air</p>
            </NavItem>
          </ToggleButton>

          <ToggleButton
            className={buttonClassName}
            id="tbg-macBtn-2"
            value={"MacBook Pro"}
            style={buttonSize}
          >
            <NavItem className="">
              <img
                className="chapter-icon"
                src="images/macbook_pro_16_light__cialfoihbk02_large.svg"
                alt="air"
              />
              <p>MacBook Pro</p>
            </NavItem>
          </ToggleButton>

          <ToggleButton
            className={buttonClassName}
            id="tbg-macBtn-3"
            value={'iMac 24"'}
            style={buttonSize}
          >
            <NavItem className="">
              <img
                className="chapter-icon chapternav-item-imac-24"
                src="images/imac_24__e0tdvilut5qq_large.svg"
                alt="air"
              />
              <p>iMac 24"</p>
            </NavItem>
          </ToggleButton>
          <ToggleButton
            className={buttonClassName}
            id="tbg-macBtn-4"
            value={""}
            style={buttonSize}
          >
            <NavItem className=""></NavItem>
          </ToggleButton>

          <ToggleButton
            className={buttonClassName}
            id="tbg-macBtn-5"
            value={"Accessories"}
            style={buttonSize}
          >
            <NavItem className="">
              <img
                className="chapter-icon chapternav-item-mac-pro"
                src="https://www.apple.com/v/mac/home/bl/images/familybrowser/mac_shop_light__layuggud1xe2_large.svg"
                alt="air"
              />
              <p>Accessories</p>
            </NavItem>
          </ToggleButton>
        </ToggleButtonGroup>
      </Nav>
      <hr />
    </>
  );
};

export default Mac;
