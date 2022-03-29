import React, { Component } from "react";
import {
  Chevron,
  CurrencyDD,
  CurrencyDDcontainer,
  CurrencyDDitem,
  CurrencyDDList,
  CurrencyLbl,
} from "../styles/CurrencyDD.style";
import Arrow from "../../assets/arrow.svg";
import { client } from "../..";
import { GET_CURRENCY } from "../../queries";

export default class CurrencyDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: {},
      open: false,
    };
  }

  getCurrency = () =>
    client.query({ query: GET_CURRENCY }).then((result) => {
      let currency = {};
      result.data.currencies.forEach((element) => {
        currency[element.symbol] = element.label;
      });
      this.setState({ currency: currency });
    });

  handleClick = () => this.setState((prevState) => ({ open: !prevState.open }));

  onOptionClicked = (value) => {
    this.setState({ open: false });
    this.props.handleCurrency(value);
  };

  componentDidMount() {
    this.getCurrency();
  }

  render() {
    return (
      <div>
        <CurrencyDD onClick={this.handleClick}>
          <CurrencyLbl>{this.props.currency}</CurrencyLbl>
          <Chevron src={Arrow} alt="arrow" open={this.state.open} />
        </CurrencyDD>
        <CurrencyDDcontainer open={this.state.open}>
          <CurrencyDDList>
            {Object.entries(this.state.currency).map(([key, value]) => {
              return (
                <CurrencyDDitem onClick={() => this.onOptionClicked(key)}>
                  <CurrencyLbl>
                    {key} {value}
                  </CurrencyLbl>
                </CurrencyDDitem>
              );
            })}
          </CurrencyDDList>
        </CurrencyDDcontainer>
      </div>
    );
  }
}
