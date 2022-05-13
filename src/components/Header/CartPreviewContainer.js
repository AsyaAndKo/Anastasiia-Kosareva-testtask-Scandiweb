import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ProductContainer,
  ProductInfo,
  ProductImg,
  ThinLabel,
  ThickLabel,
  CategoryLabel,
  AttributeContainer,
  AttributeBoxSwatch,
  AttributeBoxText,
  PlusMinusAmount,
  ChangeAmountButton,
  AmountLabel,
} from "../styles/CartPreviewContainer.style";
import { addProduct, reduceProduct } from "../../redux/Cart/cart.actions";

class CartPreviewContainer extends Component {
  setPriceCurrency = (currency, product) => {
    let amount = 0;
    product.data.prices.forEach((element) => {
      if (element.currency.symbol === currency) {
        amount = element.amount;
      }
    });
    return `${currency} ${amount}`;
  };

  render() {
    return (
      <>
        <ProductContainer key={this.props.product}>
          <ProductInfo>
            <ThinLabel>{this.props.product.data.brand}</ThinLabel>
            <ThinLabel>{this.props.product.data.name}</ThinLabel>
            <ThickLabel>
              {this.setPriceCurrency(
                this.props.currentCurrency,
                this.props.product
              )}
            </ThickLabel>
            {this.props.product.data.attributes.map((category) => {
              return (
                <>
                  <CategoryLabel>{category.name}:</CategoryLabel>
                  <AttributeContainer>
                    {category.items.map((item) => {
                      return category.type === "text" ? (
                        <AttributeBoxText
                          key={item.value}
                          active={() => {
                            return (
                              this.props.product.attributes[category.name] ===
                              item.value
                            );
                          }}
                        >
                          {item.value}
                        </AttributeBoxText>
                      ) : (
                        <AttributeBoxSwatch
                          key={item.value}
                          color={item.value}
                          active={() => {
                            return (
                              this.props.product.attributes[category.name] ===
                              item.value
                            );
                          }}
                        />
                      );
                    })}
                  </AttributeContainer>
                </>
              );
            })}
          </ProductInfo>
          <PlusMinusAmount>
            <ChangeAmountButton
              position="up"
              onClick={() => this.props.addProduct(this.props.product)}
            >
              +
            </ChangeAmountButton>
            <AmountLabel>{this.props.product.quantity}</AmountLabel>
            <ChangeAmountButton
              position="down"
              onClick={() => this.props.reduceProduct(this.props.product)}
            >
              –
            </ChangeAmountButton>
          </PlusMinusAmount>
          <ProductImg src={this.props.product.data.gallery[0]} alt="photo" />
        </ProductContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentCurrency: state.currentCurrency.currentCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (cartData) => dispatch(addProduct(cartData)),
  reduceProduct: (cartData) => dispatch(reduceProduct(cartData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPreviewContainer);
