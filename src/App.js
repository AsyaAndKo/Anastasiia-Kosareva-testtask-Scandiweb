import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Content/Cart/Cart";
import Content from "./components/Content/Content";

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
              exact
              path="/"
              element={<Content currency={this.state.currency} />}
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
