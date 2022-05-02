import React, { Component } from "react";
import cartImg from "../../assets/shopping-cart.svg";
import {
  Badge,
  CartBtn,
  CartContainer,
  CartImg,
  CartnBage,
  Header,
  HeaderName,
  HeaderCounterLabel,
  ProductsContainer,
  FooterTotal,
  TotalLabel,
  SumLabel,
  ButtonsContainer,
  ViewBag,
  CheckOut,
  ProductContainer,
} from "../styles/CartPreview.style";
import { setCartOpen } from "../../redux/CartOpen/cartOpen.actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItemsCount } from "./../../redux/Cart/cart.selectors";

class CartPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      sum: "$0",
    };

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClick = () => {
    this.props.setCartOpen({ cartIsOpen: "open" });
  };

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.props.setCartOpen({ cartIsOpen: "close" });
    }
  }

  async componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <>
        <CartBtn onClick={() => this.handleClick()}>
          <CartnBage>
            <CartImg src={cartImg} alt="shopping cart" />
            <Badge amount={this.props.cartData.length}>
              {this.props.cartData.length}
            </Badge>
          </CartnBage>
        </CartBtn>
        <CartContainer open={this.props.cartIsOpen} ref={this.wrapperRef}>
          <Header>
            <HeaderName>My Bag</HeaderName>
            <HeaderCounterLabel>
              , {this.props.cartData.length} items
            </HeaderCounterLabel>
          </Header>
          {/* TODO:cart */}
          <ProductsContainer>
            {this.props.cartData.map((product) => {
              console.log(product);
              return <ProductContainer>{product.data.name}</ProductContainer>;
            })}
          </ProductsContainer>
          <FooterTotal>
            <TotalLabel>Total:</TotalLabel>
            <SumLabel>{this.state.sum}</SumLabel>
          </FooterTotal>
          <ButtonsContainer>
            <Link style={{ textDecoration: "none" }} to="/cart">
              <ViewBag
                onClick={() => this.props.setCartOpen({ cartIsOpen: "close" })}
              >
                VIEW BAG
              </ViewBag>
            </Link>
            {/* TODO: confetti? cart amount 0, sum amount 0 */}
            <CheckOut>CHECK OUT</CheckOut>
          </ButtonsContainer>
        </CartContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cartIsOpen: state.cartIsOpen.cartIsOpen,
  cartData: state.cartData.cartItems,
  totalNumCartItems: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCartOpen: (cartIsOpen) => dispatch(setCartOpen(cartIsOpen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPreview);
