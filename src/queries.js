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

export const GET_ALL_CATEGORIES = gql`
  {
    categories {
      name
    }
  }
`;

export const GET_PRODUCT_INFO = gql`
  query getProductInfo($id: String!) {
    product(id: $id) {
      name
      brand
      inStock
      gallery
      category
      prices {
        amount
        currency {
          label
          symbol
        }
      }
      attributes {
        id
        name
        type
        items {
          id
          value
          displayValue
        }
      }
    }
  }
`;
