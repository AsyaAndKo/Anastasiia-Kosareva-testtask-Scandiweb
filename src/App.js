import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Content/Cart/Cart";
import Content from "./components/Content/Content";
import ProductPage from "./components/Content/ProductPage";

export default class App extends Component {
  constructor(props) {
    super(props);
    // Use Local Storage to save chosen category and currency if page was reloaded
    this.state = JSON.parse(window.localStorage.getItem("state")) || {
      //TODO: set initial state from query
      currency: "$",
      category: "all",
      productID: "",
    };

    this.handleCurrency = this.handleCurrency.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleProductID = this.handleProductID.bind(this);
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

  handleProductID(newProductID) {
    this.setState({ ...this.state, productID: newProductID });
    console.log(this.state.productID);
  }
  render() {
    return (
      <div className={App}>
        <BrowserRouter>
          <Header
            category={this.state.category}
            currency={this.state.currency}
            handleCurrency={this.handleCurrency}
            handleCategory={this.handleCategory}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Content
                  productID={this.state.productID}
                  currency={this.state.currency}
                  category={this.state.category}
                  handleProductID={this.handleProductID}
                />
              }
            />
            <Route
              path="/cart"
              element={<Cart currency={this.state.currency} />}
            />
            <Route
              path="/product"
              element={<ProductPage id={this.state.productID} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
