import React, { Component } from "react";
import "./style.css";
import { elastic as Menu } from "react-burger-menu";

class Sidebar extends Component {
  render() {
    return (
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/salads">
          Salads
        </a>
        <a className="menu-item" href="/pizzas">
          Pizzas
        </a>
        <a className="menu-item" href="/desserts">
          Desserts
        </a>
      </Menu>
    );
  }
}

export default Sidebar;
