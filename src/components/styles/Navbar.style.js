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
  display: flex;
  align-items: center;
  padding: 32px;
  border-bottom: 2px solid transparent;

  text-decoration: none;
  color: black;
  font-size: 16px;
  font-family: "Raleway", sans-serif;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    outline: 1;
    border-bottom: 2px solid #5ece7b;
    transition: 150ms ease-in;
  }

  &:focus {
    outline: 1;
    border-bottom: 2px solid #5ece7b;
    color: #5ece7b;
  }
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;
export { NavbarContainer, NavbarLinkContainer, NavbarLink };
