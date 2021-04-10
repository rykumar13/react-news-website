import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink
} from './NavbarElements'


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>DAILY ROUND UP</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/breaking" activeStyle>
            Breaking
          </NavLink>
          <NavLink to="/sports" activeStyle>
            Sports
          </NavLink>
          <NavLink to="/business" activeStyle>
            Business
          </NavLink>
          <NavLink to="/technology" activeStyle>
            Technology
          </NavLink>
          <NavBtnLink to='/subscribe'>Subscribe</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  )
};

export default Navbar;
