import React, { Component } from "react";
import ProductCell from "./ProductCell";
import { getCategoryIDs } from "../../queries";
import { ContentContainer, ContentCategory } from "../styles/Content.style.js";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIDs: [],
    };
  }

  async componentDidMount() {
    this.setState({ categoryIDs: await getCategoryIDs(this.props.category) });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.setState({ categoryIDs: [] });
      this.setState({
        categoryIDs: await getCategoryIDs(this.props.category),
      });
    }
  }

  render() {
    return (
      <div>
        <ContentCategory>{this.props.category}</ContentCategory>
        <ContentContainer>
          {this.state.categoryIDs.map((element) => {
            return (
              <ProductCell
                id={element}
                currency={this.props.currency}
              ></ProductCell>
            );
          })}
        </ContentContainer>
      </div>
    );
  }
}
