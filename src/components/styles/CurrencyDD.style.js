import styled from "styled-components";

export const CurrencyDD = styled.button`
  margin: auto;
  justify-content: center;
  display: flex;
  cursor: pointer;

  background-color: transparent;
  border: none;
`;

export const Currency = styled.img`
  margin: auto;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
`;

export const Chevron = styled.img`
  margin: auto;
  width: 10px;
  height: 10px;
  display: flex;
  justify-content: center;

  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.3s ease-out;
  transform: ${(props) => (props.rotate ? `rotate(180deg)` : "")};
`;
