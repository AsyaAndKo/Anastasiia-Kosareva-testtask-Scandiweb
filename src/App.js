import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { connect } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Content/Cart/Cart";
import Content from "./components/Content/Content";
import ProductPage from "./components/Content/ProductPage";

// import { setCurrentCurrency } from "./redux/Currency/currency.actions";

class App extends Component {
  constructor(props) {
    super(props);
    // Use Local Storage to save chosen category and currency if page was reloaded
    this.state = JSON.parse(window.localStorage.getItem("state")) || {
      productID: "",
    };
    this.handleProductID = this.handleProductID.bind(this);
  }

  setState(state) {
    window.localStorage.setItem("state", JSON.stringify(state));
    super.setState(state);
  }

  handleProductID(newProductID) {
    this.setState({ ...this.state, productID: newProductID });
  }

  render() {
    return (
      <div className={App}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Content
                  productID={this.state.productID}
                  handleProductID={this.handleProductID}
                />
              }
            />
            <Route path="/cart" element={<Cart />} />
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

export default App;
