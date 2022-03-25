import React, {useEffect, useState} from 'react';
import {Nav, NavItem, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

const IPhone = ({listState,list}) => {
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
                    <ToggleButton className={buttonClassName} id="tbg-btn-4"
                                  value={'iPhone'} style={{
                        fontSize: '20px',
                        margin: '25px auto',
                        border: 'none',
                        backgroundColor: 'rgb(250, 250, 250)'

                    }}>
                        <NavItem className="">
                            <p className="">iPhone <i className="fa-solid fa-angle-right"></i> </p>
                        </NavItem>
                    </ToggleButton>
                    <ToggleButton className={buttonClassName} id="tbg-iphoneBtn-1"
                                  value={'iPhone Series'} style={buttonSize}>
                        <NavItem className="">
                            <img className="chapter-icon"
                                 src="https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg"
                                 alt="air"/>
                            <p className="">iPhone Series</p>
                        </NavItem>
                    </ToggleButton>
                    <ToggleButton className={buttonClassName} id="tbg-iphoneBtn-2"
                                  value={'iPhone SE Series'} style={buttonSize}>
                        <NavItem className="">
                            <img
                                className="chapter-icon chapternav-item-macbook-pro-13"
                                src="https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_se_light__fhg8duy6ffau_large.svg"
                                alt="air"/>
                            <p>iPhone SE Series</p>
                        </NavItem>
                    </ToggleButton>
                    <ToggleButton className={buttonClassName} id="tbg-iphoneBtn-3"
                                  value={''} style={buttonSize}>
                        <NavItem className="">

                        </NavItem>
                    </ToggleButton>
                    <ToggleButton className={buttonClassName} id="tbg-iphoneBtn-4"
                                  value={''} style={buttonSize}>
                        <NavItem className="">

                        </NavItem>
                    </ToggleButton>
                    <ToggleButton className={buttonClassName} id="tbg-iphoneBtn-5"
                                  value={'Accessories'} style={buttonSize}>
                        <NavItem className="">
                            <img
                                className="chapter-icon chapternav-item-macbook-pro-13"
                                src="https://www.apple.com/v/iphone/home/be/images/chapternav/accessories_light__ed5l6ipsevqu_large.svg"
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

export default IPhone;