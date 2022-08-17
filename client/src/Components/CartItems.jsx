import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartComponent from "./CartComponent";
import ProductComponent from "./ProductComponent";
import productList from "../Products/ProductList";

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

  const productCountsArray = Object.entries(productCounts);

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
      <div>
        <center>
          <div>
            <div>Total Cart Amount : {totalCartAmount}</div>
            <div>Cart Items Count: {counter}</div>

            {productCountsArray.map((product) => {
              return (
                <div>
                  <span style={{ fontWeight: "bold", margin: "1rem" }}>
                    {product[0]}
                  </span>
                  <input
                    style={{ padding: "0.25rem" }}
                    type="button"
                    value={"+"}
                  />
                  <span
                    style={{
                      color: "grey",
                      fontWeight: "bold",
                      margin: "1rem",
                    }}
                  >
                    {product[1]}
                  </span>
                  <input
                    style={{ padding: "0.25rem" }}
                    type="button"
                    value={"-"}
                  />
                </div>
              );
            })}
          </div>
        </center>
      </div>
    </>
  );
}
