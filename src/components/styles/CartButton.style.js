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
  display: none;
  width: min-content;
`;

export { CartBtn, CartImg, Badge, CartnBage, CartContainer };
