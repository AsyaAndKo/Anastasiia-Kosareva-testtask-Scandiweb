import React, { Component } from "react";
import {
  Chevron,
  Currency,
  CurrencyDD,
  CurrencyDDcontainer,
  CurrencyDDitem,
  CurrencyDDlist,
} from "../styles/CurrencyDD.style";
import USD from "../../assets/dollar.svg";
import GBP from "../../assets/gbp.svg";
import JPY from "../../assets/jpy.svg";
import RUB from "../../assets/ruble.svg";
import A from "../../assets/a.svg";
import Arrow from "../../assets/arrow.svg";

export default class CurrencyDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currency: { USD },
    };
  }

  handleClick = () =>
    this.setState(
      (prevState) => ({ open: !prevState.open }),
      () => console.log(this.state.open)
    );

  render() {
    return (
      <div>
        <CurrencyDD onClick={this.handleClick}>
          <Currency src={USD} alt="usd" />
          <Chevron src={Arrow} alt="arrow" open={this.state.open} />
        </CurrencyDD>
        <CurrencyDDcontainer open={this.state.open}>
          <CurrencyDDlist>
            <CurrencyDDitem>
              <Currency src={USD} alt="usd" />
              <p>USD</p>
            </CurrencyDDitem>
            <CurrencyDDitem>
              <Currency src={GBP} alt="gbp" />
              <p>GBP</p>
            </CurrencyDDitem>
            <CurrencyDDitem>
              <Currency src={JPY} alt="jpy" />
              <p>JPY</p>
            </CurrencyDDitem>
            <CurrencyDDitem>
              <Currency src={RUB} alt="rub" />
              <p>RUB</p>
            </CurrencyDDitem>
            <CurrencyDDitem>
              <Currency src={A} alt="a" />
              <Currency src={USD} alt="ud" />
              <p>AUD</p>
            </CurrencyDDitem>
          </CurrencyDDlist>
        </CurrencyDDcontainer>
      </div>
    );
  }
}
