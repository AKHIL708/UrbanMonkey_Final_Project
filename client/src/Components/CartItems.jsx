import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import productList from "../Products/ProductList";
import CartList from "../CartList/CartList";
import CartComponent from "./CartComponent";

export default function CartItems() {
  const [state, setState] = useState([]);
  const counter = useSelector((state) => state.counter);
  const totalCartAmount = useSelector((state) => state.amount);
  const itemName = useSelector((state) => state.itemName);
  const itemImg = useSelector((state) => state.itemImg);
  const ItemImgTextt = useSelector((state) => state.itemImgText);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(`Item Names : ${itemName}`);

  const arrOfItemNames = itemName.slice(0, -1).split(",");

  const productCounts = {};

  for (const product of arrOfItemNames) {
    productCounts[product] = productCounts[product]
      ? productCounts[product] + 1
      : 1;
  }

  useEffect(() => {
    setState((current) => [...current, <CartComponent cartName={itemName} />]);
  }, []);

  const IncreaseCartCount = () => {
    dispatch({
      type: "Increase Cart Count",
    });
  };
  const DecreaseCartCount = () => {
    dispatch({
      type: "Decrease Cart Count",
    });
  };
  const cartRoute = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  // {state.map((e) => {
  //   return <p>{e}</p>;
  // })}
  return (
    <>
      <div className="CartNavbar">
        <h1>Cart Items</h1>
      </div>
      {/* <div className="CartContainer">
        <a href="/cart" onClick={cartRoute} className="CartLink">
          {" "}
          <FaCartPlus className="CartSymbol" />
        </a>
        <input
          type="text"
          onChange={(e) => e.target.value}
          name="cartCount"
          value={counter}
        />
      </div> */}
      <div>
        <center>
          <br />
          <br />
          <div>Total Cart Amount : {totalCartAmount}</div>
          <br />
          <div>Cart Items Count: {counter}</div>
          <div> Items: {JSON.stringify(productCounts)}</div>
          <br />
        </center>
      </div>
      {/* <div className="CartBox">
        <img className="CartImg" src={itemImg} alt={ItemImgTextt} />
        <h1>
          {state.map((item) => {
            return <li>{item}</li>;
          })}
        </h1>
        <div>
          <button onClick={IncreaseCartCount}>+</button>
          <input type="text" placeholder="0" value={counter} />
          <button style={{ padding: "4px" }} onClick={DecreaseCartCount}>
            -
          </button>
        </div>
      </div> */}
    </>
  );
}
