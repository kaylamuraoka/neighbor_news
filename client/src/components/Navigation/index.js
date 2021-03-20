import React from "react";
import "./style.css";
import NavbarLink from "../NavbarLink";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import NavIcon from "../NavIcon";
import { TiMessages } from "react-icons/ti";
import { BsBell } from "react-icons/bs";
import {
  AiOutlineTags,
  AiOutlineHome,
  AiOutlineFolderAdd,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "../SearchBar";
import { useHistory } from "react-router-dom";

function Navigation(props) {
  const history = useHistory();

  return (
    <nav class="navbar navbar-light bg-light">
      <Link className="navbar-brand brand-name" to="/">
        <h4>Hey, Neighbor</h4>
      </Link>
      <Nav className="ml-auto">
        {/* This is shown when the uer is logged in  */}
        {props.userData.user ? (
          <>
            <span className="sidebar-toggle d-flex mr-2">
              <GiHamburgerMenu className="hamburger" />
            </span>
          </>
        ) : (
          <>
            <NavbarLink label="Logout" path="/login" />
            <NavbarLink label="Profile" path="/account" />
          </>
        )}
      </Nav>
    </nav>

    // <SearchBar placeholder="Search for products..." />
    // <div class="navbar-links-div">
    //   <NavIcon path="/" icon={<AiOutlineHome />} />
    //   <NavIcon path="/messages" icon={<TiMessages />} count="4" />
    //   <NavIcon path="/alerts" icon={<BsBell />} count="2" />
    //   <NavIcon path="/upload" icon={<AiOutlineFolderAdd />} />
    //   <NavIcon path="/productlist" icon={<AiOutlineTags />} count="3" />
    /* {!props.user.user ? (
          <>
            <NavbarLink label="Login" path="/login" />
            <NavbarLink label="Register" path="/register" />
          </>
        ) : (
          <>
           
          </>
        )} */
  );
}

export default Navigation;
