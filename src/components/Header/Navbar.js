import React, { Component } from "react";
import { getAllCategories } from "../../queries";
import {
  NavbarContainer,
  NavbarLink,
  NavbarLinkContainer,
} from "../styles/Navbar.style";
import { setCurrentCategory } from "../../redux/Category/category.actions";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCategories: [],
    };
  }

  onCategoryClicked = (category) => {
    this.props.setCurrentCategory({ currentCategory: category });
  };

  async componentDidMount() {
    this.setState({ allCategories: await getAllCategories() });
  }

  render() {
    const { currentCategory } = this.props;
    console.log(currentCategory);

    return (
      <>
        <NavbarContainer>
          <NavbarLinkContainer>
            {this.state.allCategories.map((val) => {
              return (
                <NavbarLink
                  isactive={() => {
                    return currentCategory === val;
                  }}
                  to={`/${val}`}
                  onClick={() => {
                    this.props.setCurrentCategory({ currentCategory: val });
                    console.log(currentCategory);
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

const mapStateToProps = ({ currentCategory }) => ({
  currentCategory: currentCategory.currentCategory,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentCategory: (currentCategory) =>
    dispatch(setCurrentCategory(currentCategory)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
