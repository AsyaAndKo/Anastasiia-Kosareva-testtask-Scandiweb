import React, { Component } from "react";
import { Chevron, Currency, CurrencyDD } from "../styles/CurrencyDD.style";
import Dollar from "../../assets/dollar.svg";
import Arrow from "../../assets/arrow.svg";

export default class CurrencyDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: false,
      currency: { Dollar },
    };
  }

  handleClick = () =>
    this.setState(
      (prevState) => ({ rotate: !prevState.rotate }),
      () => console.log(this.state.rotate)
    );

  render() {
    return (
      <CurrencyDD onClick={this.handleClick}>
        <Currency src={Dollar} alt="dollar" />
        <Chevron src={Arrow} alt="arrow" rotate={this.state.rotate} />
      </CurrencyDD>
    );
  }
}
