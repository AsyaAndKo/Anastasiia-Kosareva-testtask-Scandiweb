import { gql } from "apollo-boost";

export const GET_ALL_ID = gql`
  {
    category {
      products {
        id
      }
    }
  }
`;
