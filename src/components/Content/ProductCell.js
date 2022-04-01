import React, { Component } from "react";
import Cart from "../../assets/shopping-cart.svg";
import { client } from "../..";
import {
  AddButton,
  ButtonImg,
  ProductContainer,
  ProductImg,
  ProductName,
  ProductPrice,
} from "../styles/Content.style";
import { GET_PRODUCT_INFO } from "../../queries";

export default class ProductCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodData: {},
      divHover: false,
    };
  }

  getProductInfo = (id) => {
    client
      .query({
        query: GET_PRODUCT_INFO,
        variables: { id: id },
      })
      .then((result) => {
        this.setState({ prodData: result.data.product });
      });
  };

  setPriceCurrency = (currency) => {
    let amount = 0;
    this.state.prodData.prices.forEach((element) => {
      if (element.currency.symbol === currency) {
        amount = element.amount;
      }
    });
    return `${currency} ${amount}`;
  };

  handleEffect = () =>
    this.setState((prevState) => ({ divHover: !prevState.divHover }));

  componentDidMount() {
    this.getProductInfo(this.props.id);
  }

  render() {
    return (
      this.state.prodData.gallery !== undefined && (
        <ProductContainer
          onMouseEnter={this.handleEffect}
          onMouseLeave={this.handleEffect}
        >
          <ProductImg src={this.state.prodData.gallery[0]} alt="photo" />
          <ProductName>
            {this.state.prodData["brand"]} {this.state.prodData["name"]}
          </ProductName>
          <ProductPrice>
            {this.setPriceCurrency(this.props.currency)}
          </ProductPrice>
          <AddButton divHover={this.state.divHover}>
            <ButtonImg src={Cart} alt="cart" />
          </AddButton>
        </ProductContainer>
      )
    );
  }
}
