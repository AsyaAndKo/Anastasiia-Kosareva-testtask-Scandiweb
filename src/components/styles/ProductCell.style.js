import styled from "styled-components";
import { Link } from "react-router-dom";

// export const YetAnotherDiv = styled.div`
//   width: 450px;
//   height: 550px;
//   margin: 0 45px 100px;

//   position: relative;
//   display: flex;
//   /* flex-direction: column; */

//   ${(props) => (props.inStock ? `cursor: pointer;` : `opacity: 0.4;`)}

//   &:hover {
//     box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
//     transition: all ease-in-out 0.3s;
//   }
// `;

export const ProductLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const ProductContainer = styled.div`
  position: relative;
  margin: 0 45px 100px;
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 550px;
  ${(props) => (props.inStock ? `cursor: pointer;` : `opacity: 0.4;`)}
  &:hover {
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    transition: all ease-in-out 0.3s;
  }
`;

export const ProductImg = styled.img`
  height: 100%;
  object-fit: contain;
  margin: 15px;
  filter: ${(props) => (props.inStock ? `grayscale(0%)` : `grayscale(100%)`)};
`;

export const OutOfStock = styled.label`
  display: ${(props) => (props.inStock ? `none` : `flex`)};
  font-size: 24px;
  color: black;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
`;

export const ProductName = styled.label`
  display: flex;
  font-size: 18px;
  color: black;
  margin: 15px;
`;

export const ProductPrice = styled.label`
  display: flex;
  font-size: 18px;
  margin: 15px;
`;

export const AddButton = styled.button`
  cursor: pointer;
  bottom: 90px;
  right: 40px;
  position: absolute;
  border: none;
  padding: 15px;
  background-color: #5ece7b;
  border-radius: 50%;
  transition: 0.3s;
  display: ${(props) => (props.inStock && props.divHover ? `flex` : `none`)};
  &:hover {
    background: #4ba362;
    transform: scale(1.2);
  }
  &:active {
    transition: none;
    background: #5ece7b;
  }
`;

export const ButtonImg = styled.img`
  filter: invert(100%);
  height: 25px;
  width: 25px;
`;
