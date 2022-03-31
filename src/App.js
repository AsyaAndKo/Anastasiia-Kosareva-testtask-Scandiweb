import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Content/Cart/Cart";
import Content from "./components/Content/Content";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem("state")) || {
      currency: "$",
      category: "all",
    };

    this.handleCurrency = this.handleCurrency.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  setState(state) {
    window.localStorage.setItem("state", JSON.stringify(state));
    super.setState(state);
  }

  handleCurrency(newCurrency) {
    this.setState({ ...this.state, currency: newCurrency });
  }

  handleCategory(newCategory) {
    this.setState({ ...this.state, category: newCategory });
  }
  render() {
    return (
      <div className={App}>
        <BrowserRouter>
          <Header
            currency={this.state.currency}
            handleCurrency={this.handleCurrency}
            handleCategory={this.handleCategory}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Content
                  currency={this.state.currency}
                  category={this.state.category}
                />
              }
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
