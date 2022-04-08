import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllAttributes, getProductInfo } from "../../queries";
import {
  ProductName,
  InfoBox,
  LImage,
  LImageContainer,
  ProdPageContainer,
  ProductBrand,
  SImage,
  SImgContainer,
  AttributeName,
  AttributeBox,
  AttributeContainer,
  Price,
  AddToCartBtn,
  Description,
} from "../styles/ProductPage.style";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodData: {},
      largeImage: "",
      attributes: [],
    };
  }

  setPriceCurrency = (currency) => {
    let amount = 0;
    this.state.prodData.prices.forEach((element) => {
      if (element.currency.symbol === currency) {
        amount = element.amount;
      }
    });
    return `${currency} ${amount}`;
  };

  async componentDidMount() {
    this.setState({ prodData: await getProductInfo(this.props.id) });
    this.setState({ largeImage: this.state.prodData.gallery[0] });
    this.setState({ attributes: await getAllAttributes(this.props.id) });
  }

  render() {
    return (
      this.state.prodData.gallery !== undefined && (
        <ProdPageContainer>
          <SImgContainer>
            {this.state.prodData.gallery.map((img) => {
              return (
                <SImage
                  src={img}
                  alt="small photo"
                  onClick={() => this.setState({ largeImage: img })}
                />
              );
            })}
          </SImgContainer>
          <LImageContainer>
            <LImage src={this.state.largeImage} alt="large photo" />
          </LImageContainer>
          <InfoBox>
            <ProductBrand>{this.state.prodData.brand}</ProductBrand>
            <ProductName>{this.state.prodData.name}</ProductName>
            {this.state.attributes.map((attribute) => {
              return (
                <AttributeContainer>
                  <AttributeName>{attribute.name}:</AttributeName>
                  {attribute.items.map((item) => {
                    return (
                      <AttributeBox
                        style={{ background: item.value, color: item.value }}
                      >
                        {item.value}
                      </AttributeBox>
                    );
                  })}
                </AttributeContainer>
              );
            })}
            <AttributeContainer>
              <AttributeName>price:</AttributeName>
              <Price>{this.setPriceCurrency(this.props.currentCurrency)}</Price>
            </AttributeContainer>
            <AddToCartBtn inStock={this.state.prodData.inStock}>
              add to cart
            </AddToCartBtn>
            <Description
              dangerouslySetInnerHTML={{
                __html: this.state.prodData.description,
              }}
            />
          </InfoBox>
        </ProdPageContainer>
      )
    );
  }
}

const mapStateToProps = ({ currentCurrency }) => ({
  currentCurrency: currentCurrency.currentCurrency,
});

export default connect(mapStateToProps)(ProductPage);
