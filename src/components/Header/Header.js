import React, { Component } from "react";
import {
  LeftContainer,
  CenterContainer,
  RightContainer,
  HeaderContainer,
  Logo,
} from "../styles/Header.style";
import CurrencyDropDown from "./CurrencyDD";
import Navbar from "./Navbar";
import Cart from "./CartButton";
import LogoImg from "../../assets/shop-logo.svg";

export default class Header extends Component {
  render() {
    return (
      <>
        <HeaderContainer>
          <LeftContainer>
            <Navbar handleCategory={this.props.handleCategory} />
          </LeftContainer>
          <CenterContainer>
            <Logo src={LogoImg}></Logo>
          </CenterContainer>
          <RightContainer>
            <CurrencyDropDown
              currency={this.props.currency}
              handleCurrency={this.props.handleCurrency}
            />
            <Cart />
          </RightContainer>
        </HeaderContainer>
      </>
    );
  }
}
