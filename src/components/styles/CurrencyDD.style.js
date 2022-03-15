import styled from "styled-components";

const CurrencyDD = styled.button`
  margin: auto;
  justify-content: center;
  display: flex;
  cursor: pointer;

  background-color: transparent;
  border: none;
`;

const Currency = styled.img`
  margin: auto;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
`;

const Chevron = styled.img`
  margin: auto;
  width: 10px;
  height: 10px;
  display: flex;
  justify-content: center;

  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.3s ease-out;
  transform: ${(props) => (props.open ? `rotate(180deg)` : "")};
`;

const CurrencyDDcontainer = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
`;

const CurrencyDDlist = styled.ul``;

const CurrencyDDitem = styled.li`
  justify-content: center;
  display: flex;
`;

export {
  CurrencyDD,
  Currency,
  Chevron,
  CurrencyDDcontainer,
  CurrencyDDlist,
  CurrencyDDitem,
};
