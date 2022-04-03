import React, { Component } from "react";
import { getProductInfo } from "../../queries";
import {
  InfoBox,
  LImage,
  LImageContainer,
  ProdPageContainer,
  SImage,
  SImgContainer,
} from "../styles/ProductPage.style";

export default class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodData: {},
      largeImage: "",
    };
  }

  async componentDidMount() {
    this.setState({ prodData: await getProductInfo(this.props.id) });
    this.setState({ largeImage: this.state.prodData.gallery[0] });
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
          <InfoBox></InfoBox>
        </ProdPageContainer>
      )
    );
  }
}
