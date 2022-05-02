import styled from "styled-components";

export const ContentPage = styled.div`
  size: fill;
  height: 100%;
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

export const ContentCategory = styled.h2`
  font-size: 42px;
  text-decoration: none;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
  text-transform: capitalize;

  margin: 80px 100px;
  padding: 0 40px;
  align-items: center;
  width: min-content;
  height: max-content;
`;

export const ContentContainer = styled.div`
  margin: 80px 100px;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  width: auto;

  font-family: "Raleway", sans-serif;
`;
