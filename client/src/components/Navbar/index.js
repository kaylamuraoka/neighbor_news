import React from "react";
import "./style.css";
import NavbarLink from "../NavbarLink";
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

function Navbar(props) {
  return (
    // {!props.user.user ? (
    //   <>
    //     <NavbarLink label="Login" path="/login" />
    //     <NavbarLink label="Register" path="/register" />
    //   </>
    // ) : (
    //   <>
    //     <NavbarLink label="Logout" path="/login" onClick={props.onClick} />
    //     <NavbarLink label="My Account" path="/account" />
    //   </>
    // )}

    <nav className="navbar navbar-expanded navbar-light bg-white">
      <span className="sidebar-toggle d-flex mr-2">
        <GiHamburgerMenu className="hamburger" />
      </span>
      <SearchBar placeholder="Search for products..." />
      <div class="navbar-links-div">
        <NavIcon path="/" icon={<AiOutlineHome />} />
        <NavIcon path="/messages" icon={<TiMessages />} count="4" />
        <NavIcon path="/alerts" icon={<BsBell />} count="2" />
        <NavIcon path="/upload" icon={<AiOutlineFolderAdd />} />
        <NavIcon path="/productlist" icon={<AiOutlineTags />} count="3" />
      </div>
    </nav>
  );
}

export default Navbar;
