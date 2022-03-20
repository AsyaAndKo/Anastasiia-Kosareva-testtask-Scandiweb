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

export default class CurrencyDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: { usd: "$", gbp: "£", jpy: "¥", rub: "₽", aud: "A$" },
      open: false,
      currency: "$",
    };
  }

  handleClick = () =>
    this.setState(
      (prevState) => ({ open: !prevState.open }),
      () => console.log(this.state.open)
    );

  onOptionClicked = (value) => () => {
    this.setState({ currency: value, open: false });
  };

  render() {
    const { options } = this.state;
    return (
      <div>
        <CurrencyDD onClick={this.handleClick}>
          <CurrencyLbl>{this.state.currency}</CurrencyLbl>
          <Chevron src={Arrow} alt="arrow" open={this.state.open} />
        </CurrencyDD>
        <CurrencyDDcontainer open={this.state.open}>
          <CurrencyDDList>
            {Object.entries(options).map(([key, value]) => {
              return (
                <CurrencyDDitem onClick={this.onOptionClicked(value)}>
                  <CurrencyLbl>
                    {value} {key}
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
