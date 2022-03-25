import React, {useEffect, useState} from 'react';
import {Nav, NavItem, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

const IPad = ({listState,list}) => {
    const [value, setValue] = useState();
    const handleChange = (val) => {
        setValue(val);
        listState(val);
    };

    useEffect(() => {
        setValue(...list);
    },[list]);
    const buttonClassName = "col-xs-4 col-sm-3 col-lg-2 text-black";
    const buttonSize = {
        fontSize: '12px',
        margin: '0px auto',
        padding: '0px auto',
        border: 'none',
        backgroundColor: 'rgb(250, 250, 250)'
    };
    return (
        <>
            <Nav style={{alignItems: 'center'}}
                 className="navbar-nav row">

                <ToggleButtonGroup className='chpater-items' type="checkbox"
                                   value={value}
                                   onChange={handleChange}>
                    <ToggleButton className={buttonClassName} id="tbg-btn-2"
                                  value={'iPad'} style={{
                        fontSize: '20px',
                        margin: '25px auto',
                        border: 'none',
                        backgroundColor: 'rgb(250, 250, 250)'

                    }}>
                        <NavItem className="">
                            <p className="">iPad <i className="fa-solid fa-angle-right"></i> </p>
                        </NavItem>
                    </ToggleButton>
                    <ToggleButton className={buttonClassName} id="tbg-ipadBtn-1"
                                  value={'iPad Pro'} style={buttonSize}>
                        <NavItem className="">
                            <img className="chapter-icon"
                                 src="images/ipadpro.svg"
                                 alt="air"/>
                            <p className="">iPad Pro</p>
                        </NavItem>
                    </ToggleButton>
                    <ToggleButton className={buttonClassName} id="tbg-ipadBtn-2"
                                  value={'iPad Air”'} style={buttonSize}>
                        <NavItem className="">
                            <img
                                className="chapter-icon chapternav-item-macbook-pro-13"
                                src="images/ipadair.svg"
                                alt="air"/>
                            <p>iPad Air</p>
                        </NavItem>
                    </ToggleButton>
                    <ToggleButton className={buttonClassName} id="tbg-ipadBtn-3"
                                  value={'iPad'} style={buttonSize}>
                        <NavItem className="">
                            <img className="chapter-icon"
                                 src="images/ipad.svg"
                                 alt="air"/>
                            <p>iPad</p>
                        </NavItem>

                    </ToggleButton>
                    <ToggleButton className={buttonClassName} id="tbg-ipadBtn-4"
                                  value={'iPad mini'} style={buttonSize}>
                        <NavItem className="">
                            <img className="chapter-icon chapternav-item-mac-pro"
                                 src="images/ipadmini.svg"
                                 alt="air"/>
                            <p>iPad mini</p>
                        </NavItem>
                    </ToggleButton>
                    <ToggleButton className={buttonClassName} id="tbg-ipadBtn-5"
                                  value={'Accessories'} style={buttonSize}>
                        <NavItem className="">
                            <img className="chapter-icon chapternav-item-mac-pro"
                                 src="images/ipadac.svg"
                                 alt="air"/>
                            <p>Accessories</p>
                        </NavItem>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Nav>
            <hr/>
        </>
    );
};

export default IPad;