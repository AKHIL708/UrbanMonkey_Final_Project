import { createStore } from "redux";

const reducerFn = (
  state = {
    counter: 0,
    amount: 0,
    itemName: "",
    itemImg: "",
    itemImgText: "",
    CartBtn: "Add To Cart",
  },
  action
) => {
  if (action.type === "Add To Cart") {
    return {
      counter: state.counter + 1,
      amount: state.amount + action.product.productPrice,
      itemName: action.product.productName,
      itemImg: action.product.productImage,
      itemImgText: action.product.productImageText,
      itemName: state.itemName + action.product.productName + ",",
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
  if (action.type === "Toggle Cart Btn") {
    return {
      CartBtn: "Remove",
    };
  }
  return state;
};

const store = createStore(reducerFn);
export default store;
