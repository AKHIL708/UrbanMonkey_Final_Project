import { createStore } from "redux";

const reducerFn = (state = { counter: 0, amount: 0 }, action) => {
  if (action.type === "Add To Cart") {
    return {
      counter: state.counter + 1,
      amount: state.amount + action.product.productPrice,
    };
  }
  if (action.type === "Remove From Cart") {
    return {
      counter: state.counter - 1,
      amount: state.amount - action.product.productPrice,
    };
  }

  return state;
};

const store = createStore(reducerFn);
export default store;
