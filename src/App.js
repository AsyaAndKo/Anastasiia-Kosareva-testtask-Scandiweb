import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clothes from "./components/Content/Clothes/Clothes";
import Tech from "./components/Content/Tech/Tech";
import "./App.css";
import Header from "./components/Header/Header";

export default class App extends Component {
  render() {
    return (
      <div className={App}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/tech" element={<Tech />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
