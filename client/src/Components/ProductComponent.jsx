import React from "react";

export default function ProductComponent(props) {
  return (
    <div className="SectionOne">
      <img
        className="SectionOneImg"
        src={props.productDetails.productImage}
        alt={props.productDetails.productImageAlternateText}
      />
      <h3>{props.productDetails.productName}</h3>
      <p>Price : {props.productDetails.productPrice}</p>
      <p>Rating : {props.productDetails.productRating}</p>
      <div className="btnSection">
        <button style={{ backgroundColor: "black" }} onClick={props.addToCart}>
          Add to Cart
        </button>
        <button
          style={{ backgroundColor: "gray" }}
          onClick={props.removeFromCart}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
