import React, { Component } from "react";
import {
  NavbarContainer,
  NavbarLink,
  NavbarLinkContainer,
} from "../../styles/Navbar.style";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <NavbarContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/all">All</NavbarLink>
            <NavbarLink to="/clothes">Clothes</NavbarLink>
            <NavbarLink to="/tech">Tech</NavbarLink>
          </NavbarLinkContainer>
        </NavbarContainer>
      </>
    );
  }
}
