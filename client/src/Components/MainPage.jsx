import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import ProductComponent from "./ProductComponent";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductList from "../Products/ProductList";

export default function MainPage() {
  
  const counter = useSelector((state) => state.counter);
  const amount = useSelector((state) => state.amount);
  const navigate = useNavigate();

  const cartRoute = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  const dispatch = useDispatch();

  const productList = [
    {
      id: 1,
      productImage:
        "https://cdn.shopify.com/s/files/1/0661/7423/products/life-is-better-when-you-dance-style-back-right_1080x.jpg?v=1639393852",
      productImageText: "Tshirt",
      productName: "Oversized Tshirt",
      productPrice: 500,
      productQuantity: 50,
      productRating: 3,
    },
    {
      id: 2,
      productImage:
        "https://cdn.shopify.com/s/files/1/0661/7423/products/life-is-better-when-you-dance-style-back-right_1080x.jpg?v=1639393852",
      productImageText: "Jacket",
      productName: "Oversized Jacket",
      productPrice: 1200,
      productQuantity: 40,
      productRating: 2,
    },
    {
      id: 3,
      productImage:
        "https://cdn.shopify.com/s/files/1/0661/7423/products/life-is-better-when-you-dance-style-back-right_1080x.jpg?v=1639393852",
      productImageText: "Jeans",
      productName: "Straight Fit Jeans",
      productPrice: 2000,
      productQuantity: 10,
      productRating: 5,
    },
    {
      id: 4,
      productImage:
        "https://cdn.shopify.com/s/files/1/0661/7423/products/life-is-better-when-you-dance-style-back-right_1080x.jpg?v=1639393852",
      productImageText: "Jeans",
      productName: "Straight Fit Jeans",
      productPrice: 2000,
      productQuantity: 10,
      productRating: 5,
    },
    {
      id: 5,
      productImage:
        "https://cdn.shopify.com/s/files/1/0661/7423/products/life-is-better-when-you-dance-style-back-right_1080x.jpg?v=1639393852",
      productImageText: "Jeans",
      productName: "Straight Fit Jeans",
      productPrice: 2000,
      productQuantity: 10,
      productRating: 5,
    },
  ];

  return (
    <>
      <div className="NavbarMain">
        <h1 className="NavbarHeadingMain">Urban Monkey</h1>

        <form method="POST" className="MainPageForm"></form>
        <h1 className="CartSymbol">
          <a href="/cart" onClick={cartRoute} className="CartLink">
            {" "}
            <FaCartPlus />
          </a>
          <sup className="CartCount">
            Counter : {counter}, Amount : {amount}{" "}
          </sup>
        </h1>
      </div>

      <div className="mainPageContainer">
        {productList &&
          productList.map((product) => {
            return (
              <ProductComponent
                productDetails={product}
                addToCart={() =>
                  dispatch({
                    type: "Add To Cart",
                    product: product,
                  })
                }
                removeFromCart={() =>
                  dispatch({
                    type: "Remove From Cart",
                    product: product,
                  })
                }
              />
            );
          })}
      </div>
      <Footer />
    </>
  );
}
