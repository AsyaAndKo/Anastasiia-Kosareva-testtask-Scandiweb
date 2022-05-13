import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CartHeader,
  OrderButton,
  ProductContainer,
  ThickLabel,
  ThinLabel,
  TotalContainer,
} from "../../styles/Cart.style";
import CartProduct from "./CartProduct";
import { selectCartItemsCount } from "../../../redux/Cart/cart.selectors";

class Cart extends Component {
  countSum = (currency) => {
    let sum = 0;
    this.props.cartData.forEach((product) => {
      product.data.prices.forEach((element) => {
        if (element.currency.symbol === currency) {
          sum = sum + element.amount * product.quantity;
        }
      });
    });

    return parseFloat(sum.toFixed(2));
  };

  tax = () =>
    ((this.countSum(this.props.currentCurrency) * 21) / 100).toFixed(2);

  render() {
    return (
      <>
        <CartHeader>Cart</CartHeader>
        {this.props.cartData.map((product) => {
          return <CartProduct key={product.data.id} product={product} />;
        })}
        <ProductContainer>
          <TotalContainer>
            <ThinLabel>Tax 21%:</ThinLabel>
            <ThinLabel>Quantity:</ThinLabel>
            <ThinLabel>Total:</ThinLabel>
          </TotalContainer>
          <TotalContainer>
            <ThickLabel>
              {this.props.currentCurrency} {this.tax()}
            </ThickLabel>
            <ThickLabel>{this.props.totalNumCartItems}</ThickLabel>
            <ThickLabel>
              {this.props.currentCurrency}{" "}
              {(
                this.countSum(this.props.currentCurrency) +
                parseFloat(this.tax())
              ).toFixed(2)}
            </ThickLabel>
          </TotalContainer>
        </ProductContainer>
        <OrderButton>Order</OrderButton>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cartData: state.cartData.cartItems,
  currentCurrency: state.currentCurrency.currentCurrency,
  totalNumCartItems: selectCartItemsCount(state),
});

export default connect(mapStateToProps)(Cart);
