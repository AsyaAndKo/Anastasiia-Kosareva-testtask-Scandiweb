import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clothes from "./components/Content/Clothes/Clothes";
import Tech from "./components/Content/Tech/Tech";
import All from "./components/Content/All/All";
import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Content/Cart/Cart";

export default class App extends Component {
  render() {
    return (
      <div className={App}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/all" element={<All />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
