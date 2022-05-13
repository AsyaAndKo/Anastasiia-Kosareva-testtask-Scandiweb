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
  AttributeBoxText,
  AttributeBoxSwatch,
  AttributeContainer,
  Price,
  AddToCartBtn,
  Description,
  GrayLayout,
} from "../styles/ProductPage.style";
import { addProduct } from "../../redux/Cart/cart.actions";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodData: { data: [], attributes: {} },
      largeImage: this.props.currentProductID.gallery[0],
      attributes: [],
      currentAttributes: {},
    };
  }

  setPriceCurrency = (currency) => {
    let amount = 0;
    this.props.currentProductID.prices.forEach((element) => {
      if (element.currency.symbol === currency) {
        amount = element.amount;
      }
    });
    return `${currency} ${amount}`;
  };

  handleAddToCart = (product) => {
    this.props.addProduct(product);
  };

  getAllData = async (id) => {
    this.setState({
      prodData: await getProductInfo(id),
    });
  };

  getInitialAttributes = (allAttributes) => {
    let initialAttributes = {};
    allAttributes.forEach((attribute) => {
      initialAttributes[attribute.name] = attribute.items[0].value;
    });
    return initialAttributes;
  };

  async componentDidMount() {
    this.getAllData(this.props.currentProductID.id);
    this.setState({
      attributes: await getAllAttributes(this.props.currentProductID.id),
    });
    this.setState({
      currentAttributes: this.getInitialAttributes(
        this.props.currentProductID.attributes
      ),
    });
  }

  render() {
    let initialAttributes = {};
    return (
      this.props.currentProductID.gallery !== undefined && (
        <GrayLayout>
          <ProdPageContainer cartIsOpen={this.props.cartIsOpen}>
            <SImgContainer>
              {this.props.currentProductID.gallery.map((img) => {
                return (
                  <SImage
                    key={img}
                    src={img}
                    alt="small photo"
                    onClick={() => {
                      this.setState({ largeImage: img });
                      console.log(img);
                    }}
                  />
                );
              })}
            </SImgContainer>
            <LImageContainer>
              <LImage src={this.state.largeImage} alt="large photo" />
            </LImageContainer>
            <InfoBox>
              <ProductBrand>{this.props.currentProductID.brand}</ProductBrand>
              <ProductName>{this.props.currentProductID.name}</ProductName>
              {this.props.currentProductID.attributes.map((attribute) => {
                initialAttributes[attribute.name] = attribute.items[0].value;
                return (
                  <AttributeContainer key={attribute}>
                    <AttributeName>{attribute.name}:</AttributeName>
                    {attribute.items.map((item) => {
                      return attribute.type === "text" ? (
                        <AttributeBoxText
                          key={item.value}
                          clickable={true}
                          active={() => {
                            return (
                              this.state.currentAttributes[attribute.name] ===
                              item.value
                            );
                          }}
                          onClick={() => {
                            initialAttributes = this.state.currentAttributes;

                            initialAttributes[attribute.name] = item.value;
                            this.setState({
                              currentAttributes: initialAttributes,
                            });
                          }}
                        >
                          {item.value}
                        </AttributeBoxText>
                      ) : (
                        <AttributeBoxSwatch
                          key={item.value}
                          color={item.value}
                          clickable={true}
                          active={() => {
                            return (
                              this.state.currentAttributes[attribute.name] ===
                              item.value
                            );
                          }}
                          onClick={() => {
                            initialAttributes = this.state.currentAttributes;
                            initialAttributes[attribute.name] = item.value;
                            this.setState({
                              currentAttributes: initialAttributes,
                            });
                          }}
                        />
                      );
                    })}
                  </AttributeContainer>
                );
              })}

              <AttributeContainer>
                <AttributeName>price:</AttributeName>
                <Price>
                  {this.setPriceCurrency(this.props.currentCurrency)}
                </Price>
              </AttributeContainer>
              <AddToCartBtn
                inStock={this.props.currentProductID.inStock}
                onClick={() => {
                  let copy = JSON.parse(
                    JSON.stringify(this.state.currentAttributes)
                  );
                  this.handleAddToCart({
                    data: this.props.currentProductID,
                    attributes: copy,
                  });
                }}
              >
                add to cart
              </AddToCartBtn>

              <Description content={this.props.currentProductID.description} />
            </InfoBox>
          </ProdPageContainer>
        </GrayLayout>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  currentCurrency: state.currentCurrency.currentCurrency,
  currentProductID: state.currentProductID.currentProductID,
  cartData: state.cartData.cartData,
  cartIsOpen: state.cartIsOpen.cartIsOpen,
});
const mapDispatchToProps = (dispatch) => ({
  addProduct: (cartData) => dispatch(addProduct(cartData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
