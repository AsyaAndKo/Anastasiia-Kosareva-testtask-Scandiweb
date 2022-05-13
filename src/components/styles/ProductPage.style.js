import styled from "styled-components";
import { Interweave } from "interweave";

export const ProdPageContainer = styled.div`
  margin: 80px 100px;
  display: flex;
  flex-wrap: wrap;
  width: auto;

  font-family: "Raleway", sans-serif;

  ${(props) =>
    props.cartIsOpen === "open"
      ? `width: 100%;
    height: 100%;
    background-color: rgba(57, 55, 72, 0.22);;
    position: fixed;
    pointer-events:none;
    background: rgba(57, 55, 72, 0.22);;
    `
      : `background-color:transparent;
      opacity:100%;`}
`;

export const SImgContainer = styled.div`
  display: flow;
  width: 120px;
  height: 120px;
  padding-bottom: 50px;
`;

export const SImage = styled.img`
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

export const LImageContainer = styled.div`
  height: 700px;
  width: 700px;
  margin: 0 100px;
`;

export const LImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const InfoBox = styled.div`
  height: max-content;
  width: max-content;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const ProductBrand = styled.label`
  font-weight: 600;
  font-size: 30px;
`;

export const ProductName = styled.label`
  font-size: 30px;
  margin-top: 16px;
`;

export const AttributeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: min-content;
  margin: 20px 0;
`;

export const AttributeName = styled.label`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 10px;
  width: 100%;
  margin-bottom: 8px;
`;

export const AttributeBoxText = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.clickable === true
      ? `cursor: pointer;`
      : `pointer-events: none;
`}
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;

  width: 63px;
  height: 45px;
  border: 1px solid #1d1f22;

  ${(props) =>
    props.active()
      ? `background-color: #1d1f22;
    color: white;`
      : `background-color: #fff;
    color: black;`}
`;

export const AttributeBoxSwatch = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.clickable === true
      ? `cursor: pointer;`
      : `pointer-events: none;
`}
  width: 45px;
  height: 45px;
  -webkit-text-fill-color: transparent;
  border: 1px solid #1d1f22;
  background: ${(props) => props.color};

  ${(props) =>
    props.active()
      ? `
    border: 3px solid #5ece7b;
  `
      : `  border: 1px solid #1d1f22;
`}
`;

export const Price = styled.label`
  font-size: 24px;
  font-weight: 700;
`;

export const AddToCartBtn = styled.button`
  margin: 30px 0;
  width: 90%;
  height: 52px;
  border: none;
  background: #5ece7b;
  color: white;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;

  transition: 0.3s;

  font-weight: 400;
  font-size: 16px;

  ${(props) =>
    props.inStock
      ? `pointer-events: auto;`
      : `pointer-events: none; opacity: 0.4; filter: grayscale(100%);`}
  &:hover {
    background: #4ba362;
    font-size: 20px;
  }

  &:active {
    transition: none;
    background: #5ece7b;
  }
`;

export const Description = styled(Interweave)`
  width: 290px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;
