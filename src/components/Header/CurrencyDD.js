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
import { getCurrency } from "../../queries";

export default class CurrencyDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: {},
      open: false,
    };
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClick = () => this.setState((prevState) => ({ open: !prevState.open }));

  onOptionClicked = (value) => {
    this.setState({ open: false });
    this.props.handleCurrency(value);
  };

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({ open: false });
    }
  }

  async componentDidMount() {
    this.setState({ currency: await getCurrency() });
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <div>
        <CurrencyDD onClick={this.handleClick}>
          <CurrencyLbl>{this.props.currency}</CurrencyLbl>
          <Chevron src={Arrow} alt="arrow" open={this.state.open} />
        </CurrencyDD>
        <CurrencyDDcontainer open={this.state.open} ref={this.wrapperRef}>
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
