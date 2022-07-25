import React from "react";
import { useSelector } from "react-redux";

export default function CartItems() {
  const counter = useSelector((state) => state.counter);
  const amount = useSelector((state) => state.amount);
  return (
    <>
      <h1> {amount}</h1>
      <div className="cartContainer">
        <div className="cartContainerOne">
          <h1>Cart {counter}</h1>
          hello
          <br />
        </div>
      </div>
    </>
  );
}
