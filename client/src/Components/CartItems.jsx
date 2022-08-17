import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer"

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


  const cartRoute = (e) => {
    e.preventDefault();
    navigate("/cart");
  };
  const x = productList && productList.map((product)=>{
    return product
  })

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
          <span>Total Amount: </span>
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
            {/* <div>Total Cart Amount : {totalCartAmount}</div>
            <div>Cart Items Count: {counter}</div> */}

            {productCountsArray.map((product) => {
              return (
                <div className="CartItemsEditing">
                  <img className="CartImg" src="https://m.media-amazon.com/images/I/51ATCvhe0nL._AC_UX385_.jpg" alt="cloth Image" />
                  <div className="CartItemNames_Data">
                   <h3  style={{ fontWeight: "bold", margin: "1rem" }}>
                     {product[0]} 
                    </h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat earum cupiditate nesciunt explicabo eum aperiam ut illum est, eius esse?</p>
                  </div>
                  <div>
                  <input
                    style={{ padding: "0.25rem"}}
                    type="button"
                    value={"+"}
                    onClick={() => {
                      productList &&
                        productList.map((product) => {
                          dispatch({
                            type: "Add To Cart",
                            product: product,
                          });
                        });
                    }}
                  //  onClick={()=>{
                  //   dispatch({
                  //     type : "Add To Cart",
                  //     product : x
                  //   })
                  //  }}
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
                    style={{ padding: "0.25rem",backgroundColor:"red" }}
                    type="button"
                    value={"-"}
                    onClick={() => {
                      window.alert(" - clicked for now")
                    }}
                  />
                  </div>
                </div>
              );
            })}
          </div>
        </center>
      </div>
      <Footer/>
    </>
  );
}
