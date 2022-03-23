import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {Navbar, NavItem, Nav, Row, Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <>
      <Navbar
        id="navbar"
        style={{
          position: 'fixed',
          width: '100%',
          maxHeight: '60px',
          paddingLeft: '0px',
          paddingRight:'170px',
          zIndex: 1,
        }}
        className="navdbar navbar-expand-md nav-bg  navbar-dark"
      >
        <Nav style={{ alignItems: 'center'  }} className="center navbar-nav">
          <NavItem className="nav-item-box">
            <Link to="/" className="nav-link">
              <img
                src="https://www.apple.com/ac/globalnav/6/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg"
                alt="logo"
              />
            </Link>
          </NavItem>

          <NavItem className="nav-item-box">
            <Link to="/" className="nav-link">
              <img
                src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_mac_image__dazlko3t9a6a_large.svg"
                alt="mac"
              />
            </Link>
          </NavItem>
          <NavItem className="nav-item-box nav-item">
            <Link to="/" className="nav-link">
              <img
                src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_ipad_image__fw9qyj9lloi2_large.svg"
                alt="iPad"
              />
            </Link>
          </NavItem>
          <NavItem className="nav-item-box">
            <Link to="/" className="nav-link">
              <img
                src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_watch_image__gkoblojrlsqe_large.svg"
                alt="watch"
              />
            </Link>
          </NavItem>
          <NavItem className="nav-item-box">
            <Link to="/" className="nav-link">
              <img
                src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_iphone_image__ko7x4isga4ia_large.svg"
                alt="iPhone"
              />
            </Link>
          </NavItem>
          <NavItem className="nav-item-box">
            <Link to="/" className="nav-link">
              <img
                src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_airpods_image__f969s84ivmaa_large.svg"
                alt="airpods"
              />
            </Link>
          </NavItem>
          <NavItem className="nav-item-box">
            <Link to="/" className="nav-link">
              <img
                src=" https://store.storeimages.cdn-apple.com/4982/store.apple.com/shop/rs-globalelements/dist/us/ac-globalnav-dist/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_accessories_image__edj0wqmfwxyu_large.svg"
                alt="airpods"
              />
            </Link>
          </NavItem>
          <NavItem className="nav-item-box">
            <Link to="/" className="text-white nav-icon nav-link ">
              <i
                style={{ fontWeight: 100, color: 'white' }}
                className=" fa fa-search"
              ></i>
            </Link>
          </NavItem>
          <NavItem className="nav-item-box">
            <Link
              to="/auth"
              style={{ textDecoration: 'none' }}
              className="text-white nav-icon nav-link "
            >
              <span style={{ fontSize: '12px', color: 'white' }}>Login</span>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>


    </>
  );
};

export default Navigation;
