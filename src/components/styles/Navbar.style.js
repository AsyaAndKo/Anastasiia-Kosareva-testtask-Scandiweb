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
  color: black;
  font-size: large;
  font-family: Raleway, sans-serif;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
`;
export { NavbarContainer, NavbarLinkContainer, NavbarLink };
