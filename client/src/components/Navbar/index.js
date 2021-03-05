import React from "react";
import "./style.css";
import NavbarLink from "../NavbarLink";

function Navbar() {
  return (
    <nav className="topnav">
      <NavbarLink label="Home" path="/" />
      <NavbarLink label="Product Listings" path="/product-listings" />
      <NavbarLink label="Login" path="/login" />
      <NavbarLink label="Register" path="/register" />
      <NavbarLink label="Messages" path="/messages" />
    </nav>
  );
}

export default Navbar;
