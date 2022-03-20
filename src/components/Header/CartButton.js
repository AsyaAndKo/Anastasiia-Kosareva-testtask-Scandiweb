import React, { Component } from "react";
import { Link } from "react-router-dom";
import cartImg from "../../assets/shopping-cart.svg";
import { Badge, CartBtn, CartImg, CartnBage } from "../styles/CartButton.style";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
  }
  render() {
    return (
      <>
        <CartBtn>
          <Link to="/cart">
            <CartnBage>
              <CartImg src={cartImg} alt="shopping cart" />
              <Badge amount={this.state.amount}>{this.state.amount}</Badge>
            </CartnBage>
          </Link>
        </CartBtn>
      </>
    );
  }
}
