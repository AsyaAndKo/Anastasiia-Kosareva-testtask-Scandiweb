import styled from "styled-components";

const ContentCategory = styled.h2`
  font-size: 42px;
  text-decoration: none;
  font-weight: 400;
  font-family: "Raleway", sans-serif;

  margin: 80px 100px;
  padding: 0 40px;

  width: 100%;
  height: max-content;
`;

const ContentContainer = styled.div`
  margin: 100px;
  display: flex;
  flex-wrap: wrap;

  font-family: "Raleway", sans-serif;
`;

const ProductContainer = styled.div`
  cursor: pointer;
  margin: 0 40px 100px;
  display: flex;
  flex-direction: column;
  height: 550px;
  width: 400px;

  &:hover {
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    transition: all ease-in 300ms;
  }
`;

const ProductImg = styled.img`
  height: 100%;
  margin: 15px;
`;

const ProductName = styled.label`
  display: flex;
  font-size: 18px;
  color: black;
  margin: 15px;
`;

const ProductPrice = styled.label`
  display: flex;
  font-size: 18px;
  margin: 15px;
`;

export {
  ContentContainer,
  ProductContainer,
  ProductImg,
  ProductName,
  ContentCategory,
  ProductPrice,
};
