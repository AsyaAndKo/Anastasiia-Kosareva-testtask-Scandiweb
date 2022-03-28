import React, { Component } from "react";
import ProductCell from "./ProductCell";
import { client } from "../..";
import { GET_ALL_ID } from "../../queries";
import { ContentCategory, ContentContainer } from "./Content.style";
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allIds: [],
      currentCategory: "all",
    };
  }

  getAllIds = () => {
    client
      .query({
        query: GET_ALL_ID,
      })
      .then((result) => {
        let ids = [];
        result.data.category.products.forEach((element) => {
          ids.push(element.id);
        });
        this.setState({ allIds: ids });
      });
  };

  componentDidMount() {
    this.getAllIds();
  }

  render() {
    return (
      <div>
        {console.log(this.props.currency)}
        <ContentCategory>All products</ContentCategory>
        <ContentContainer>
          {this.state.allIds.map((element) => {
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
