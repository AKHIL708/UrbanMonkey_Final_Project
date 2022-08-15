import React from "react";

export default function CartComponent(props) {
  return (
    <ul>
      <img className="CartComponentImg" src={props.cartImg} alt={props.AltTxt} />
     <h3>{props.cartName}</h3> 
    </ul>
  );
}
