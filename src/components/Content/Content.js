import React, { Component } from "react";
import ProductCell from "./ProductCell";
import { client } from "../..";
import { GET_CATEGORY_IDS } from "../../queries";
import { ContentContainer, ContentCategory } from "../styles/Content.style.js";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIDs: [],
    };
  }

  getCategoryIDs = (category) => {
    client
      .query({
        query: GET_CATEGORY_IDS,
        variables: { title: category },
      })
      .then((result) => {
        this.setState({ categoryIDs: [] });
        let ids = [];
        result.data.category.products.forEach((val) => {
          ids.push(val.id);
        });
        this.setState({ categoryIDs: ids });
      });
  };

  componentDidMount() {
    this.getCategoryIDs(this.props.category);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.getCategoryIDs(this.props.category);
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
