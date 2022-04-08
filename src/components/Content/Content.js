import React, { Component } from "react";
import ProductCell from "./ProductCell";
import { getCategoryIDs } from "../../queries";
import { ContentContainer, ContentCategory } from "../styles/Content.style.js";
import { connect } from "react-redux";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIDs: [],
    };
    this.handleProductID = this.handleProductID.bind(this);
  }

  handleProductID = (id) => {
    this.props.handleProductID(id);
  };

  async componentDidMount() {
    this.setState({
      categoryIDs: await getCategoryIDs(this.props.currentCategory),
    });
  }

  // async componentDidUpdate(prevProps) {
  //   if (
  //     prevProps.currentCategory !== this.props.currentCategory.currentCategory
  //   ) {
  //     // This empty setState is to avoid shallow merging
  //     // this.setState({ categoryIDs: [] });
  //     // this.setState({
  //     //   categoryIDs: await getCategoryIDs(this.props.currentCategory),
  //     // });
  //   }
  // }

  render() {
    return (
      <div>
        <ContentCategory>{this.props.currentCategory}</ContentCategory>
        <ContentContainer>
          {this.state.categoryIDs.map((element) => {
            return (
              <ProductCell
                id={element}
                handleProductID={this.handleProductID}
              ></ProductCell>
            );
          })}
        </ContentContainer>
      </div>
    );
  }
}

const mapStateToProps = ({ currentCurrency, currentCategory }) => ({
  currentCurrency: currentCurrency.currentCurrency,
  currentCategory: currentCategory.currentCategory,
});

export default connect(mapStateToProps)(Content);
