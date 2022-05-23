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

export const GET_PRODUCT_ATTRIBUTES = gql`
  query getProductAttributes($id: String!) {
    product(id: $id) {
      id
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

export const GET_PRODUCT_CELL_INFO = gql`
  query getProductCellInfo($id: String!) {
    product(id: $id) {
      id
      name
      brand
      inStock
      gallery
      prices {
        amount
        currency {
          label
          symbol
        }
      }
    }
  }
`;

export const GET_PRODUCT_INFO = gql`
  query getProductInfo($id: String!) {
    product(id: $id) {
      id
      name
      brand
      inStock
      gallery
      description
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
    const queryResult = await client.query({ query: GET_ALL_CATEGORIES });
    queryResult.data.categories.forEach((category) => {
      categories.push(category.name);
    });
  } catch (e) {
    console.log(e);
  }
  return categories;
};

export const getAllAttributes = async (id) => {
  let attributes = [];
  try {
    const queryResult = await client.query({
      query: GET_PRODUCT_ATTRIBUTES,
      variables: { id: id },
      // Default 'cache-first' causes weird behavior when fetching attributes with same category names.
      fetchPolicy: "network-only", // 'no-cache' is possible?
    });
    queryResult.data.product.attributes.forEach((attribute) => {
      attributes.push(attribute);
    });
  } catch (e) {
    console.log(e);
  }
  return attributes;
};

export const getCategoryIDs = async (category) => {
  let ids = [];
  try {
    const queryResult = await client.query({
      query: GET_CATEGORY_IDS,
      variables: { title: category },
    });
    queryResult.data.category.products.forEach((val) => {
      ids.push(val.id);
    });
  } catch (e) {
    console.log(e);
  }
  return ids;
};

export const getProductCellInfo = async (id) => {
  let result = {};
  try {
    const queryResult = await client.query({
      query: GET_PRODUCT_CELL_INFO,
      variables: { id: id },
    });
    result = queryResult.data.product;
  } catch (e) {
    console.log(e);
  }
  return result;
};

export const getProductInfo = async (id) => {
  try {
    const queryData = await client.query({
      query: GET_PRODUCT_INFO,
      variables: { id: id },
      // Default 'cache-first' causes weird behavior when fetching attributes with same category names.
      fetchPolicy: "network-only", // 'no-cache'?
    });
    const result = { data: {}, attributes: {} };
    result.data = queryData.data.product;
    queryData.data.product.attributes.forEach((attribute) => {
      result.attributes[attribute.id] = attribute.items[0].value;
    });
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const getCurrency = async () => {
  let currency = {};
  try {
    const queryResult = await client.query({ query: GET_CURRENCY });
    queryResult.data.currencies.forEach((element) => {
      currency[element.symbol] = element.label;
    });
  } catch (e) {
    console.log(e);
  }
  return currency;
};
