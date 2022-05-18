import styled from "styled-components";

export const LoadMoreBtn = styled.button`
  width: 100%;
  height: 52px;
  display: ${(props) => (props.visible() ? `flex` : `none`)};
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;

  background: #5ece7b;
  color: white;
  border: none;

  cursor: pointer;
  text-transform: uppercase;

  transition: 0.3s;

  font-weight: 400;
  font-size: 16px;

  &:hover {
    background: #4ba362;
    font-size: 20px;
  }

  &:active {
    transition: none;
    background: #5ece7b;
  }
`;
