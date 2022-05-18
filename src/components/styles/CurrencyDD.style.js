import styled from "styled-components";

export const CurrencyDD = styled.button`
  justify-content: center;
  display: inline-flex;
  cursor: pointer;

  background-color: transparent;
  border: none;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CurrencyLbl = styled.label`
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

export const Chevron = styled.img`
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

export const CurrencyDDcontainer = styled.div`
  justify-content: center;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  background-color: white;
  transition: all ease-in 300ms;
  width: max-content;
  height: max-content;
  position: absolute;
  display: ${(props) => (props.open ? "flex" : "none")};
`;

export const CurrencyDDList = styled.ul`
  list-style-type: none;

  overflow: hidden;
  padding: 0px;
`;

export const CurrencyDDitem = styled.li`
  text-decoration: none;
  display: block;
  text-align: left;
  padding: 10px;
  background-color: ${(props) => (props.active() ? `#eee` : `#fff`)};

  &:hover {
    background-color: #eeeeee;
    transition: 150ms ease-in;
  }
`;
