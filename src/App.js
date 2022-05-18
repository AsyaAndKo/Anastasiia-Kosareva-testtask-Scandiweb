import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Content/Cart/Cart";
import Content from "./components/Content/Content";
import ProductPage from "./components/Content/ProductPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/:category" element={<Content />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
