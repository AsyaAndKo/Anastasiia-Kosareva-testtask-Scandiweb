import React, { Component } from "react";
import { Link } from "react-router-dom";
import cartImg from "../../assets/shopping-cart.svg";
import {
  Badge,
  CartBtn,
  CartContainer,
  CartImg,
  CartnBage,
} from "../styles/CartButton.style";
import { setCartOpen } from "../../redux/CartOpen/cartOpen.actions";
import { connect } from "react-redux";

class CartPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      open: false,
    };

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClick = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
    this.props.setCartOpen({ cartIsOpen: "open" });
    console.log(this.props.cartIsOpen);
  };

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({ open: false });
      this.props.setCartOpen({ cartIsOpen: "close" });
      console.log(this.props.cartIsOpen);
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
        <CartBtn onClick={this.handleClick}>
          {/* <Link to="/cart"></Link> */}
          <CartnBage>
            <CartImg src={cartImg} alt="shopping cart" />
            <Badge amount={this.state.amount}>{this.state.amount}</Badge>
          </CartnBage>
        </CartBtn>
        <CartContainer open={this.state.open} ref={this.wrapperRef}>
          <label>My cart</label>
        </CartContainer>
      </>
    );
  }
}

const mapStateToProps = ({ cartIsOpen }) => ({
  cartIsOpen: cartIsOpen.cartIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  setCartOpen: (cartIsOpen) => dispatch(setCartOpen(cartIsOpen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPreview);
