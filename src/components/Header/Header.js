import React, { Component } from "react";
import {
  LeftContainer,
  CenterContainer,
  RightContainer,
  HeaderContainer,
} from "../styles/Header.style";
import Navbar from "./Navbar/Navbar";
import Clothes from "../Content/Clothes/Clothes";
import Tech from "../Content/Tech/Tech";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { from } from "apollo-boost";

export default class Header extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <HeaderContainer>
            <LeftContainer>
              <Navbar />
            </LeftContainer>
            <CenterContainer>
              <img src="../../assets/shop-logo.svg" alt="logo" />
            </CenterContainer>
            <RightContainer>
              <></>
            </RightContainer>
            <Routes>
              <Route path="/" />
              <Route path="/clothes" element={<Clothes />} />
              <Route path="/tech" element={<Tech />} />
            </Routes>
          </HeaderContainer>
        </BrowserRouter>
      </>
    );
  }
}
