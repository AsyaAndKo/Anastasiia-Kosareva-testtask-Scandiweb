import React, { Component } from "react";
import { client } from "../..";
import {
  ProductContainer,
  ProductImg,
  ProductName,
  ProductPrice,
} from "./Content.style";
import { GET_PRODUCT_INFO } from "../../queries";

export default class ProductFactory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodData: {},
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
        console.log(element);
        amount = element.amount;
      }
    });
    return `${currency} ${amount}`;
  };

  componentDidMount() {
    this.getProductInfo(this.props.id);
  }

  render() {
    return (
      this.state.prodData.gallery !== undefined && (
        <ProductContainer>
          <ProductImg src={this.state.prodData.gallery[0]} alt="photo" />
          <ProductName>{this.state.prodData["name"]}</ProductName>
          <ProductPrice>
            {this.setPriceCurrency(this.props.currency)}
          </ProductPrice>
        </ProductContainer>
      )
    );
  }
}
