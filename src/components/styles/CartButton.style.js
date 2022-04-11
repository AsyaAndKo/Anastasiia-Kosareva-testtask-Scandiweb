import styled from "styled-components";

const CartBtn = styled.button`
  justify-content: center;
  display: inline-flex;
  cursor: pointer;

  margin: 30px;

  background-color: transparent;
  border: none;
`;

const CartnBage = styled.div`
  position: relative;
  width: min-content;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

const CartImg = styled.img`
  margin: auto;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
`;

const Badge = styled.span`
  position: absolute;
  bottom: 10px;
  left: 13px;
  color: white;
  height: 17px;
  width: 17px;
  background-color: #000;
  border-radius: 50%;
  display: ${(props) => (props.amount > 0 ? "inline-block" : "none")};
`;

const CartContainer = styled.div`
  z-index: 16;
  justify-content: center;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  background-color: white;
  transition: all ease-in 300ms;
  width: auto;
  height: auto;
  position: absolute;
  top: 80px;
  display: ${(props) => (props.open ? `flex` : `none`)};
`;

export { CartBtn, CartImg, Badge, CartnBage, CartContainer };
