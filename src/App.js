import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clothes from "./components/Content/Clothes/Clothes";
import Tech from "./components/Content/Tech/Tech";
import All from "./components/Content/All/All";
import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Content/Cart/Cart";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "$",
    };
    this.handleCurrency = this.handleCurrency.bind(this);
  }

  handleCurrency(newCurrency) {
    this.setState({ currency: newCurrency });
  }
  render() {
    return (
      <div className={App}>
        <BrowserRouter>
          <Header
            currency={this.state.currency}
            handleCurrency={this.handleCurrency}
          />
          <Routes>
            <Route
              path="/all"
              element={<All currency={this.state.currency} />}
            />
            <Route
              path="/clothes"
              element={<Clothes currency={this.state.currency} />}
            />
            <Route
              path="/tech"
              element={<Tech currency={this.state.currency} />}
            />
            <Route
              path="/cart"
              element={<Cart currency={this.state.currency} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
