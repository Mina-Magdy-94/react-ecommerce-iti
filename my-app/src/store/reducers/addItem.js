const cartList = [];

const addItems = (state = cartList, action) => {
  if (action.type == "ADDITEM") {
    return [...state, action.payload];
  } else if (action.type == "DELITEM") {
    return (state = state.filter((item) => {
      return item.id !== action.payload.id;
    }));
  } else {
    return state;
  }
};

export default addItems;
