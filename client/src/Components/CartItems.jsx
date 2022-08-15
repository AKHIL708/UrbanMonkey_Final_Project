import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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

  const arrOfItemNames = itemName.slice(0, -1).split(",");

  const productCounts = {};

  for (const product of arrOfItemNames) {
    productCounts[product] = productCounts[product]
      ? productCounts[product] + 1
      : 1;
  }

  useEffect(() => {
    updating();
  }, []);
  function updating() {
    setState((current) => [
      ...current,
      <CartComponent
        cartName={itemName}
        cartImg={itemImg}
        AltTxt={ItemImgTextt}
      />,
    ]);
  }

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

  return (
    <>
      <div className="CartNavbar">
        <h1>Cart Items </h1>
      </div>
      <form method="POST" className="MainPageForm">
        <div className="CartContainer">
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
        </div>
        <div className="CartContainer">
          <span>Total : </span>
          <input
            type="text"
            onChange={(e) => e.target.value}
            name="totalAmount"
            value={totalCartAmount}
          />
        </div>
      </form>
      <div className="CartBox">
        <div>
          <center>
            <br />
            <br />
            <img src={itemImg} alt="demo" />
            <div>Total Cart Amount : {totalCartAmount}</div>
            <br />
            <div>Cart Items Count: {counter}</div>
            <div> Items: {JSON.stringify(productCounts)}</div>
            <br />
          </center>
        </div>
      </div>
    </>
  );
}
