import styled from "styled-components";

const CurrencyDD = styled.button`
  justify-content: center;
  display: inline-flex;
  cursor: pointer;

  background-color: transparent;
  border: none;
`;

const CurrencyLbl = styled.label`
  text-decoration: none;
  justify-content: center;
  cursor: pointer;
  color: black;
  font-size: 18px;
  font-family: "Raleway", sans-serif;
  text-align: center;
  text-transform: uppercase;
  margin: auto 5px;
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
  justify-content: center;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  width: auto;
  position: absolute;
  display: ${(props) => (props.open ? "flex" : "none")};
`;

const CurrencyDDList = styled.ul`
  list-style-type: none;
  margin: 10px;
  overflow: hidden;
  padding: 0px;
`;

const CurrencyDDitem = styled.li`
  text-decoration: none;
  display: block;
  text-align: left;
  padding: 10px;

  &:hover {
    text-decoration: underline 0.15em #5ece7b;
    text-underline-offset: 0.2em;
    transition: text-decoration-color 300ms, text-underline-offset 300ms;
  }
`;

export {
  CurrencyDD,
  CurrencyLbl,
  Chevron,
  CurrencyDDcontainer,
  CurrencyDDList,
  CurrencyDDitem,
};
