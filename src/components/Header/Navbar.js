import React, { Component } from "react";
import { getAllCategories } from "../../queries";
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

  onCategoryClicked = (category) => {
    this.props.handleCategory(category);
  };

  async componentDidMount() {
    this.setState({ allCategories: await getAllCategories() });
  }

  render() {
    return (
      <>
        <NavbarContainer>
          <NavbarLinkContainer>
            {this.state.allCategories.map((val) => {
              return (
                <NavbarLink
                  isactive={() => {
                    return this.props.category === val;
                  }}
                  to="/"
                  onClick={() => {
                    this.onCategoryClicked(val);
                  }}
                >
                  {val}
                </NavbarLink>
              );
            })}
          </NavbarLinkContainer>
        </NavbarContainer>
      </>
    );
  }
}
