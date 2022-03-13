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
  padding: 30px;
  border-bottom: 2px solid transparent;

  /* text-decoration: underline 0.15em transparent;
  text-underline-offset: 1.5em;
  transition: text-decoration-color 300ms, text-underline-offset 300ms; */

  &:hover {
    outline: 1;
    border-bottom: 2px solid #5ece7b;
    /* transition: 1em 1s linear; */
    transition: 150ms ease-in;
    /* text-decoration-color: #5ece7b;
    text-underline-offset: 1em;
    transform-origin: center; */
  }
  &:focus {
    outline: 1;
    border-bottom: 2px solid #5ece7b;
    color: #5ece7b;
    /* color: #5ece7b;
    text-decoration-color: #5ece7b;
    text-underline-offset: 1em; */
  }
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 117px;
`;
export { NavbarContainer, NavbarLinkContainer, NavbarLink };
