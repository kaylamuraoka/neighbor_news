import React from "react";
import "./style.css";
import NavbarLink from "../NavbarLink";
import { TiMessages } from "react-icons/ti";
import {
  AiOutlineTags,
  AiOutlineHome,
  AiOutlineFolderAdd,
} from "react-icons/ai";

function Navbar(props) {
  return (
    <nav className="topnav">
      <NavbarLink label="Home" path="/" icon={<AiOutlineHome />} />
      <NavbarLink label="Messages" path="/messages" icon={<TiMessages />} />
      <NavbarLink
        label="Upload Listing"
        path="/upload"
        icon={<AiOutlineFolderAdd />}
      />
      <NavbarLink
        label="Product List"
        path="/productlist"
        icon={<AiOutlineTags />}
      />
      {!props.user.user ? (
        <>
          <NavbarLink label="Login" path="/login" />
          <NavbarLink label="Register" path="/register" />
        </>
      ) : (
        <>
          <NavbarLink label="Logout" path="/login" onClick={props.onClick} />
          <NavbarLink label="My Account" path="/account" />
        </>
      )}
    </nav>
  );
}

export default Navbar;
