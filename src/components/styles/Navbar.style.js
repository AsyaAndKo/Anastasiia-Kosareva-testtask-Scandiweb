import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const NavbarLink = styled(Link)`
  position: static;
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-family: "Raleway", sans-serif;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  margin: 32px;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 117px;
`;
export { NavbarContainer, NavbarLinkContainer, NavbarLink };
