import React, {useEffect, useState} from 'react';
import {Nav, NavItem, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

const Watch = ({listState,list}) => {
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
                    <ToggleButton className={buttonClassName} id="tbg-btn-3"
                                  value={'Watch'} style={{
                        fontSize: '20px',
                        margin: '25px auto',
                        border: 'none',
                        backgroundColor: 'rgb(250, 250, 250)'

                    }}>
                        <NavItem className="">
                            <p className="">Watch <i className="fa-solid fa-angle-right"></i> </p>
                        </NavItem>
                    </ToggleButton>
                    <ToggleButton className={buttonClassName} id="tbg-watchBtn-1"
                                  value={'Apple Watch Series'} style={buttonSize}>
                        <NavItem className="">
                            <img className="chapter-icon"
                                 src="https://www.apple.com/v/watch/at/images/overview/icons/watch_nav_series_7_light__dv9ck4f6pyi6_large.svg"
                                 alt="air"/>
                            <p className="">Apple Watch Series</p>
                        </NavItem>
                    </ToggleButton>
                    <ToggleButton className={buttonClassName} id="tbg-watchBtn-2"
                                  value={'Apple Watch SE'} style={buttonSize}>
                        <NavItem className="">
                            <img
                                className="chapter-icon chapternav-item-macbook-pro-13"
                                src="https://www.apple.com/v/watch/at/images/overview/icons/watch_nav_se_light__c2mzuz6w15km_large.svg"
                                alt="air"/>
                            <p>Apple Watch SE</p>
                        </NavItem>
                    </ToggleButton>
                    <ToggleButton className={buttonClassName} id="tbg-watchBtn-3"
                                  value={'MacBook Pro 16”'} style={buttonSize}>
                        <NavItem className="">

                        </NavItem>
                    </ToggleButton>
                    <ToggleButton className={buttonClassName} id="tbg-watchBtn-4"
                                  value={''} style={buttonSize}>
                        <NavItem className="">

                        </NavItem>
                    </ToggleButton>
                    <ToggleButton className={buttonClassName} id="tbg-watchBtn-5"
                                  value={'Accessories'} style={buttonSize}>
                        <NavItem className="">
                            <img
                                className="chapter-icon chapternav-item-macbook-pro-13"
                                src="https://www.apple.com/v/watch/at/images/overview/icons/watch_nav_accessories__bu98chbn5rea_large.svg"
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

export default Watch;