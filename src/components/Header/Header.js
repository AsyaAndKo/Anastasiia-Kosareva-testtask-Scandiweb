import React, { Component } from "react";
import {
  LeftContainer,
  CenterContainer,
  RightContainer,
  HeaderContainer,
  Logo,
} from "../styles/Header.style";
import CurrencyDropDown from "./CurrencyDD";
import Navbar from "./Navbar/Navbar";
import LogoImg from "../../assets/shop-logo.svg";

export default class Header extends Component {
  render() {
    return (
      <>
        <HeaderContainer>
          <LeftContainer>
            <Navbar />
          </LeftContainer>
          <CenterContainer>
            <Logo src={LogoImg}></Logo>
          </CenterContainer>
          <RightContainer>
            <CurrencyDropDown />
          </RightContainer>
        </HeaderContainer>
      </>
    );
  }
}
