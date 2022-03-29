import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Content/Cart/Cart";
import Content from "./components/Content/Content";

export default class App extends Component {
  constructor(props) {
    super(props);
    // TODO: save state if page reloaded
    this.state = {
      currency: "$",
      // TODO: category state from query?
      category: "all",
    };
    this.handleCurrency = this.handleCurrency.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  handleCurrency(newCurrency) {
    this.setState({ currency: newCurrency });
  }

  handleCategory(newCategory) {
    this.setState({ category: newCategory });
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
