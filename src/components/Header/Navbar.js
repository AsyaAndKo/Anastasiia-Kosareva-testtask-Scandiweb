import React, { Component } from "react";
import { GET_ALL_CATEGORIES } from "../../queries";
import { client } from "../..";
import {
  NavbarContainer,
  NavbarLink,
  NavbarLinkContainer,
} from "../styles/Navbar.style";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCategories: [],
    };
  }

  getAllCategories = () => {
    let category = [];
    client.query({ query: GET_ALL_CATEGORIES }).then((result) => {
      result.data.categories.forEach((val) => {
        category.push(val.name);
      });
      this.setState({ allCategories: category });
    });
  };

  componentDidMount() {
    this.getAllCategories();
  }
  render() {
    return (
      <>
        <NavbarContainer>
          <NavbarLinkContainer>
            {this.state.allCategories.map((val) => {
              return <NavbarLink to="/">{val}</NavbarLink>;
            })}
          </NavbarLinkContainer>
        </NavbarContainer>
      </>
    );
  }
}
