import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const NavbarLink = styled(NavLink)`
  position: static;
  display: flex;
  align-items: center;
  padding: 32px;
  padding-bottom: 28px;
  border-bottom: 2px solid
    ${(props) => (props.isactive() ? "#5ece7b" : "transparent")};

  text-decoration: none;
  color: ${(props) => (props.isactive() ? "#5ece7b" : "black")};
  font-size: 16px;
  font-family: "Raleway", sans-serif;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    outline: 1;
    border-color: #5ece7b;
    transition: 150ms ease-in;
  }
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;
export { NavbarContainer, NavbarLinkContainer, NavbarLink };
