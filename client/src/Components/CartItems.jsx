import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartComponent from "./CartComponent";

export default function CartItems() {
  const [state, setState] = useState([]);
  const counter = useSelector((state) => state.counter);
  const amount = useSelector((state) => state.amount);
  const itemName = useSelector((state) => state.itemName);
  const itemImg = useSelector((state) => state.itemImg);
  const ItemImgTextt = useSelector((state) => state.itemImgText);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // setState((current) => [
    //   ...current,
    //   <CartComponent
    //     cartName={itemName}
    //     cartImg={itemImg}
    //     AltTxt={ItemImgTextt}
    //   />,
    // ]);
    console.log(state.length);
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
            value={amount}
          />
        </div>
      </form>
      <div className="CartBox">
        <li>
          {state.map((item, index) => {
            console.log(state);
            return <li key={index}>{item}</li>;
          })}
        </li>
        <div>
          <button onClick={IncreaseCartCount}>+</button>
          <input type="text" placeholder="0" value={counter} />
          <button style={{ padding: "4px" }} onClick={DecreaseCartCount}>
            -
          </button>
        </div>
      </div>
    </>
  );
}
