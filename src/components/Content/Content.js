import React, { Component } from "react";
import ProductCell from "./ProductCell";
import { getCategoryIDs } from "../../queries";
import {
  ContentContainer,
  ContentCategory,
  ContentPage,
} from "../styles/Content.style.js";
import { connect } from "react-redux";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIDs: [],
    };
  }

  updateCategoryIDs = async (prevProps) => {
    if (prevProps.currentCategory !== this.props.currentCategory) {
      // This empty setState is to avoid shallow merging
      this.setState({ categoryIDs: [] });
      this.setState({
        categoryIDs: await getCategoryIDs(this.props.currentCategory),
      });
    }
  };

  async componentDidMount() {
    this.setState({
      categoryIDs: await getCategoryIDs(this.props.currentCategory),
    });
  }

  async componentDidUpdate(prevProps) {
    this.updateCategoryIDs(prevProps);
  }

  render() {
    return (
      <ContentPage cartIsOpen={this.props.cartIsOpen}>
        <ContentCategory>{this.props.currentCategory}</ContentCategory>
        <ContentContainer>
          {this.state.categoryIDs.map((element) => {
            return <ProductCell key={element} id={element}></ProductCell>;
          })}
        </ContentContainer>
      </ContentPage>
    );
  }
}

const mapStateToProps = ({ currentCurrency, currentCategory, cartIsOpen }) => ({
  currentCurrency: currentCurrency.currentCurrency,
  currentCategory: currentCategory.currentCategory,
  cartIsOpen: cartIsOpen.cartIsOpen,
});

export default connect(mapStateToProps)(Content);
