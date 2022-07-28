import { createStore } from "redux";

const reducerFn = (
  state = { counter: 0, amount: 0, itemName: "", itemImg: "", itemImgText: "" },
  action
) => {
  if (action.type === "Add To Cart") {
    return {
      counter: state.counter + 1,
      amount: state.amount + action.product.productPrice,
      itemName: state.itemName + action.product.productName,
      itemImg: state.itemImg + action.product.productImage,
      itemImgText: state.itemImgText + action.product.productImageText,
    };
  }
  if (action.type === "Remove From Cart") {
    return {
      counter: state.counter - 1,
      amount: state.amount - action.product.productPrice,
    };
  }
  if (action.type === "Increase Cart Count") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "Decrease Cart Count") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(reducerFn);
export default store;
