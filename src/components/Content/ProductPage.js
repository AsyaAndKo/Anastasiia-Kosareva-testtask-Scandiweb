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
import { addProduct } from "../../redux/Cart/cart.actions";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodData: { data: [] },
      largeImage: "",
      attributes: [],
    };
  }

  setPriceCurrency = (currency) => {
    let amount = 0;
    this.state.prodData.data.prices.forEach((element) => {
      if (element.currency.symbol === currency) {
        amount = element.amount;
      }
    });
    return `${currency} ${amount}`;
  };

  handleAddToCart = (product) => {
    this.props.addProduct(product);
  };
  async componentDidMount() {
    this.setState({
      prodData: await getProductInfo(this.props.currentProductID),
    });
    this.setState({ largeImage: this.state.prodData.data.gallery[0] });
    this.setState({
      attributes: await getAllAttributes(this.props.currentProductID),
    });
  }

  render() {
    let initialAttributes = {};
    return (
      this.state.prodData.data.gallery !== undefined && (
        <ProdPageContainer>
          <SImgContainer>
            {this.state.prodData.data.gallery.map((img) => {
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
            <ProductBrand>{this.state.prodData.data.brand}</ProductBrand>
            <ProductName>{this.state.prodData.data.name}</ProductName>
            {this.state.attributes.map((attribute) => {
              initialAttributes[attribute.name] = attribute.items[0].value;

              return (
                <AttributeContainer>
                  <AttributeName key={attribute}>
                    {attribute.name}:
                  </AttributeName>
                  {attribute.items.map((item) => {
                    return (
                      <AttributeBox
                        style={{ background: item.value, color: item.value }}
                        onClick={() => {
                          initialAttributes[attribute.name] = item.value;
                        }}
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
            <AddToCartBtn
              inStock={this.state.prodData.data.inStock}
              onClick={() => {
                let copy = JSON.parse(JSON.stringify(initialAttributes));
                this.handleAddToCart({
                  data: this.state.prodData.data,
                  attributes: copy,
                });
              }}
            >
              add to cart
            </AddToCartBtn>

            <Description content={this.state.prodData.data.description} />
          </InfoBox>
        </ProdPageContainer>
      )
    );
  }
}

const mapStateToProps = ({ currentCurrency, currentProductID, cartData }) => ({
  currentCurrency: currentCurrency.currentCurrency,
  currentProductID: currentProductID.currentProductID,
  cartData: cartData.cartData,
});
const mapDispatchToProps = (dispatch) => ({
  addProduct: (cartData) => dispatch(addProduct(cartData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
