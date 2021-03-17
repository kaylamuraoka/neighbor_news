import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function NavbarLink(props) {
  return (
    <a key={props.label} href={props.path}>
      <NavLink
        to={props.path}
        activeClassName="active"
        exact={true}
        onClick={props.onClick}
      >
        {props.icon}
        {props.label}
      </NavLink>
    </a>
  );
}

export default NavbarLink;
