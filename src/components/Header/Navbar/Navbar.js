import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  NavbarContainer,
  NavbarLinkContainer,
} from "../../styles/Navbar.style";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <NavbarContainer>
          <NavbarLinkContainer>
            <Link to="/clothes">Clothes</Link>
          </NavbarLinkContainer>
        </NavbarContainer>
      </>
    );
  }
}
