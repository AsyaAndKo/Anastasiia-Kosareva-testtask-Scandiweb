import { gql } from "apollo-boost";
import { client } from ".";

export const GET_CURRENCY = gql`
  query getCurrency {
    currencies {
      label
      symbol
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query getAllCategories {
    categories {
      name
    }
  }
`;

export const GET_CATEGORY_IDS = gql`
  query getCategoryIDs($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        id
      }
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

export const getAllCategories = async () => {
  let categories = [];
  try {
    let queryResult = await client.query({ query: GET_ALL_CATEGORIES });
    queryResult.data.categories.forEach((category) => {
      categories.push(category.name);
    });
  } catch (e) {
    console.log(e);
  }
  return categories;
};
