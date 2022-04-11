import React, { Component } from "react";
import Cart from "../../assets/shopping-cart.svg";
import {
  AddButton,
  ButtonImg,
  OutOfStock,
  ProductContainer,
  ProductImg,
  ProductName,
  ProductPrice,
} from "../styles/ProductCell.style";
import { getProductInfo } from "../../queries";
import { connect } from "react-redux";
import { setCurrentProductID } from "../../redux/ProductID/productID.actions";

class ProductCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodData: {},
      divHover: false,
    };
  }

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

  async componentDidMount() {
    this.setState({ prodData: await getProductInfo(this.props.id) });
  }

  render() {
    return (
      this.state.prodData.gallery !== undefined && (
        // <ProductLink to="/product">
        <ProductContainer
          inStock={this.state.prodData.inStock}
          onMouseEnter={this.handleEffect}
          onMouseLeave={this.handleEffect}
          onClick={() => {
            this.props.setCurrentProductID({
              currentProductID: this.props.id,
            });
          }}
        >
          <ProductImg
            cartIsOpen={this.props.cartIsOpen}
            inStock={this.state.prodData.inStock}
            src={this.state.prodData.gallery[0]}
            alt="photo"
          />
          <OutOfStock inStock={this.state.prodData.inStock}>
            Out of stock
          </OutOfStock>
          <ProductName>
            {this.state.prodData["brand"]} {this.state.prodData["name"]}
          </ProductName>
          <ProductPrice>
            {this.setPriceCurrency(this.props.currentCurrency)}
          </ProductPrice>
          <AddButton
            divHover={this.state.divHover}
            inStock={this.state.prodData.inStock}
            onClick={() => console.log(this.props.currentProductID)}
          >
            <ButtonImg src={Cart} alt="cart" />
          </AddButton>
        </ProductContainer>
        // </ProductLink>
      )
    );
  }
}

const mapStateToProps = ({
  currentCurrency,
  currentProductID,
  cartIsOpen,
}) => ({
  currentCurrency: currentCurrency.currentCurrency,
  currentProductID: currentProductID.currentProductID,
  cartIsOpen: cartIsOpen.cartIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentProductID: (currentProductID) =>
    dispatch(setCurrentProductID(currentProductID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCell);
