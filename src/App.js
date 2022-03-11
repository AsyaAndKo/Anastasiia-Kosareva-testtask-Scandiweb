import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

export default class App extends Component {
  render() {
    return (
      <div className={App}>
        <Header />
      </div>
    );
  }
}
