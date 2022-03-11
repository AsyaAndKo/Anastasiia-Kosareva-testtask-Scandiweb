import React, { Component } from "react";
import Clothes from "../Content/Clothes/Clothes";
import Tech from "../Content/Tech/Tech";
import { Route, Routes } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
          <a href="/clothes">Clothes</a>
          <a href="/tech">Tech</a>
        </nav>
      </>
    );
  }
}
