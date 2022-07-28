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
      <p>₹ {props.productDetails.productPrice}-/</p>
      <p>Qty : {props.productDetails.productQuantity}</p>
      <p>Rating : {props.productDetails.productRating}</p>
      <div className="btnSection">
        <button style={{ backgroundColor: "black" }} onClick={props.addToCart}>
          Add to Cart
        </button>
        <span  style={{
          margin:"0px 5px",
          color : "black",
          marginLeft: " 15px",   
          fontWeight : "bolder",
          border : "none",
          height : "25px"

        }}> 0 </span>
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
