import React from "react";
import "./style.css";
import NavbarLink from "../NavbarLink";

function Navbar() {
  return (
    <nav className="topnav">
      <NavbarLink label="Home" path="/" />
      <NavbarLink label="Product Listings" path="/product-listings" />
    </nav>
  );
}

export default Navbar;
