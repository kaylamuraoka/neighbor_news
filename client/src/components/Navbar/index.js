import React from "react";
import "./style.css";
import NavbarLink from "../NavbarLink";

function Navbar(props) {
  return (
    <nav className="topnav">
      <NavbarLink label="Home" path="/" />
      {/* <NavbarLink label="Login" path="/login" />
      <NavbarLink label="Register" path="/register" /> */}
      <NavbarLink label="Messages" path="/messages" />
      <NavbarLink label="Upload Listing" path="/upload" />

      <NavbarLink label="Product List" path="/productlist" />
      {!props.user.user ? (
        <>
          <NavbarLink label="Login" path="/login" />
          <NavbarLink label="Register" path="/register" />
        </>
        )
        : (
          <>
            <NavbarLink label="Logout" path="/login" onClick={props.onClick} />
            <NavbarLink label="My Account" path="/account" />
          </>
        )
      }
    </nav>
  );
}

export default Navbar;
