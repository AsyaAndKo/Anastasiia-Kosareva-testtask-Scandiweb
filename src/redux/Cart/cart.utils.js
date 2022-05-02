const deepEqual = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
};

const isObject = (object) => {
  return object != null && typeof object === "object";
};

export const existingCartItem = ({ prevCartItem, nextCartItem }) => {
  return prevCartItem.find(
    (cartItem) =>
      deepEqual(cartItem.data, nextCartItem.data) &&
      deepEqual(cartItem.attributes, nextCartItem.attributes)
  );
};

export const handleAddToCart = ({ prevCartItem, nextCartItem }) => {
  const quantityIncrement = 1;
  const cartItemExists = existingCartItem({ prevCartItem, nextCartItem });
  console.log(cartItemExists);
  if (cartItemExists) {
    return prevCartItem.map((cartItem) =>
      deepEqual(cartItem.data, nextCartItem.data) &&
      deepEqual(cartItem.attributes, nextCartItem.attributes)
        ? { ...cartItem, quantity: cartItem.quantity + quantityIncrement }
        : cartItem
    );
  }

  return [
    ...prevCartItem,
    {
      ...nextCartItem,
      quantity: quantityIncrement,
    },
  ];
};
