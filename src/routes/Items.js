import React from 'react';
import Item from "../components/Item";
import {Link,} from "react-router-dom";

const Items = ({list}) => {

    return (
        <div>
            <div className="bg-light ">
                <div className="row ">
                    <div className="pt-0 col-md-12"></div>
                </div>
            </div>
            <section style={{backgroundColor: '#fafafa'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 product-listing">
                            <div className="heading text-center ">
                                <h2 className="typography-headline">검색 바 {list}</h2>

                            </div>
                            <div className=" mt-3 m-1 tablist-wrapper">
                                <ul style={{padding: '0px 0px 0px 0px', display: 'flex', justifyContent: 'center'}}
                                    className="tadbnav-items">
                                    <li className="tabnav-item notebook-list active">
                                        <span className="product-trigger text-secondary notebook"
                                              id="notebook">옵션 1</span>
                                    </li>

                                    <li className="tabnav-item  ">
                                        <span className="product-trigger text-secondary desktop"
                                              id="desktop">옵션 2</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=" row">

                        <Link className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 text-black" to='/items/1'
                              style={{textDecoration: 'none'}}>
                            <Item/>
                        </Link>
                        <Link className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 text-black" to='/items/2'
                              style={{textDecoration: 'none'}}>
                            <Item/>
                        </Link>
                        <Link className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 text-black" to='/items/3'
                              style={{textDecoration: 'none'}}>
                            <Item/>
                        </Link>
                        <Link className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 text-black" to='/items/4'
                              style={{textDecoration: 'none'}}>
                            <Item/>
                        </Link>
                        <Link className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 text-black" to='/items/5'
                              style={{textDecoration: 'none'}}>
                            <Item/>
                        </Link>
                        <Link className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 text-black" to='/items/6'
                              style={{textDecoration: 'none'}}>
                            <Item/>
                        </Link>
                        <Link className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 text-black" to='/items/7'
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