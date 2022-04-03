import styled from "styled-components";

export const ProdPageContainer = styled.div`
  margin: 80px 100px;
  display: flex;
  flex-wrap: wrap;
  width: auto;

  font-family: "Raleway", sans-serif;
`;

export const SImgContainer = styled.div`
  display: flow;
  width: 120px;
  height: 120px;
  padding-bottom: 50px;
`;

export const SImage = styled.img`
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

export const LImageContainer = styled.div`
  height: 700px;
  width: 700px;
  margin: 0 100px;
`;

export const LImage = styled.img`
  height: 100%;
  object-fit: contain;
`;

export const InfoBox = styled.div`
  height: 600px;
  width: 600px;
  border: 1px solid black;
`;
