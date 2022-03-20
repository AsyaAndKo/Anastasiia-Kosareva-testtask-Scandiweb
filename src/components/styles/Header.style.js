import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
const LeftContainer = styled.div`
  flex: 45%;
  display: flex;
  margin-left: 117px;
`;

const CenterContainer = styled.div`
  flex: 10%;
  display: flex;
`;

const RightContainer = styled.div`
  flex: 45%;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  margin-right: 117px;
`;

const Logo = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 35px;
`;

export {
  HeaderContainer,
  LeftContainer,
  CenterContainer,
  RightContainer,
  Logo,
};
