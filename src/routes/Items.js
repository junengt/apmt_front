import React, {useEffect, useState} from 'react';
import Item from "../components/Item";
import {Link,} from "react-router-dom";
import {Button, FormControl, InputGroup, Nav, Navbar, NavItem, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import Mac from "../components/toggleGroup/Mac";
import IPad from "../components/toggleGroup/IPad";
import Watch from "../components/toggleGroup/Watch";
import IPhone from "../components/toggleGroup/IPhone";
import AirPods from "../components/toggleGroup/AirPods";
import Etc from "../components/toggleGroup/Etc";

const Items = ({listState, list}) => {
    const macItems = ['MacBook Air','MacBook Pro','iMac 24"'];
    const etcItems = ['Display','AirTag','Mac mini','MacStudio'];

    const render = (arr) => {
        return arr.map((e) => {
            switch (e) {
                case 'Mac' :
                    return <Mac key='1' list={list} listState={listState}/>
                case 'iPad' :
                    return <IPad key='2' list={list} listState={listState}/>
                case 'Watch' :
                    return <Watch key='3' list={list} listState={listState}/>
                case 'iPhone' :
                    return <IPhone key='4' list={list} listState={listState}/>
                case 'AirPods' :
                    return <AirPods key='5' list={list} listState={listState}/>
                case 'Etc.' :
                    return <Etc key='6' list={list} listState={listState}/>
                default:
                    return ''
            }
        })
    }
    return (
        <div style={{backgroundColor: 'rgb(250, 250, 250)'}}>
            <div className="bg-light ">
                <div className="row ">
                    <div className="pt-0 col-md-12"></div>
                </div>
            </div>
            <section style={{backgroundColor: '#fafafa'}}>
                <div className="container"
                     style={{maxWidth: '1100px', paddingRight: '10%', paddingLeft: '10%', width: '100%'}}>
                    <div className="row">

                        <div className="col-md-12 product-listing">
                            <form action="#" method="post" className="d-flex m-3">
                                <InputGroup>
                                    <FormControl
                                        placeholder="search..."
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button variant="outline-secondary" id="button-addon2">
                                        검색
                                    </Button>
                                </InputGroup>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section id="chapter" className="chpater">
                <div className="container"
                     style={{
                         maxWidth: '1100px',
                         paddingRight: '10%',
                         paddingLeft: '10%',
                         marginBottom: '60px',
                         width: '100%'
                     }}>
                    {list.length > 0 ? render(...list) : <hr/>}
                    <div>태그</div>
                </div>
            </section>

            <section>
                <div className="container"
                     style={{maxWidth: '1152px', paddingRight: '10%', paddingLeft: '10%', width: '100%'}}>
                    <div className="row">

                        <Link className="col-xs-12 col-sm-6 col-lg-4 text-black" to='/items/1'
                              style={{textDecoration: 'none'}}>
                            <Item/>
                        </Link>
                        <Link className="col-xs-12 col-sm-6 col-lg-4 text-black" to='/items/1'
                              style={{textDecoration: 'none'}}>
                            <Item/>
                        </Link>
                        <Link className="col-xs-12 col-sm-6 col-lg-4 text-black" to='/items/1'
                              style={{textDecoration: 'none'}}>
                            <Item/>
                        </Link>
                        <Link className="col-xs-12 col-sm-6 col-lg-4 text-black" to='/items/1'
                              style={{textDecoration: 'none'}}>
                            <Item/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Items;