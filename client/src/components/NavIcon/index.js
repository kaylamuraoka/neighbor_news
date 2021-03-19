import React from "react";
import "./style.css";

function NavIcon(props) {
  return (
    <a href={props.path} class="nav-icon">
      <span>{props.icon}</span>
      <span class="badge">{props.count}</span>
    </a>
  );
}

export default NavIcon;
