import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import MainSectionCom from "./MainSectionCom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductList from "../Products/ProductList";

export default function MainPage() {
   const counter = useSelector((state)=> state.counter)
   const amount = useSelector((state)=> state.amount)
   const navigate = useNavigate();
const cartRoute = (e)=>{
  e.preventDefault()
  navigate("/cart")
}

const dispatch = useDispatch()

const ProductOne = ()=>{
  dispatch({type :'INC'});
  // dispatch({type :'AMOUNT',});
 
}
const RemoveCart=()=>{
  dispatch({type : 'DEC'})
}

const ProductTwo = ()=>{
  dispatch({type : 'INC'})
}

const ProductThree = ()=>{
  dispatch({type : 'INC'})
}

const ProductFour = ()=>{
  dispatch({type : 'INC'})
}

const ProductFive = ()=>{
  dispatch({type : 'INC'})
}

const ProductSix = ()=>{
  dispatch({type : 'INC'})
}

const ProductSeven = ()=>{
  dispatch({type : 'INC'})
}

const ProductEight = ()=>{
  dispatch({type : 'INC'})
}

  return (
    <>
      <div className="NavbarMain">
        <h1 className="NavbarHeadingMain">Urban Monkey  {amount}</h1>
        
        <form method="POST" className="MainPageForm"></form>
        <h1 className="CartSymbol">
       <a href="/cart" onClick={cartRoute} className="CartLink"> <FaCartPlus /></a>  
          <sup className="CartCount">{counter}</sup>
        </h1>
      </div>

      <div className="mainPageContainer">
        <MainSectionCom
          imgLink="https://cdn.shopify.com/s/files/1/0661/7423/products/life-is-better-when-you-dance-style-back-right_1080x.jpg?v=1639393852"
          ItemName="Over Seized"
          ItemPrice="₹ 500-/"
          Stars="★★★☆☆"
          FunctionName={ProductOne}
          RemoveFunction ={RemoveCart}
        />
        <MainSectionCom
          imgLink="https://i.pinimg.com/736x/44/29/c6/4429c62ee4b2d25f6e9b0e833bb9c950.jpg"
          ItemName="Girls Ripped Jeans"
          ItemPrice="₹ 450-/"
          Stars="★★★★☆"
          FunctionName={ProductTwo}
          RemoveFunction ={RemoveCart}
        />
        <MainSectionCom
          imgLink="https://cdn.shopify.com/s/files/1/0661/7423/products/everyday-im-snugglin-front-left-style_250x250@2x.jpg?v=1655538331"
          ItemName="Looch Hoodie"
          ItemPrice="₹ 700-/"
          Stars="★★★★★"
          FunctionName={ProductThree}
          RemoveFunction ={RemoveCart}
        />
        <MainSectionCom
          imgLink="https://cdn.shopify.com/s/files/1/0661/7423/products/mystic-maya-right-back.jpg?v=1621404609"
          ItemName="Coloured Hoodie"
          ItemPrice="₹ 2300-/"
          Stars="★★★☆☆"
          FunctionName={ProductThree}
          RemoveFunction ={RemoveCart}
        />
        <MainSectionCom
          imgLink="https://i.pinimg.com/originals/60/82/35/6082352b8cd19e0b826b65efe442ea5a.jpg"
          ItemName="Mistic Maya"
          ItemPrice="₹ 2500-/"
          Stars="★★★☆☆"
          FunctionName={ProductFour}
          RemoveFunction ={RemoveCart}
        />
        <MainSectionCom
          imgLink="https://cdn.shopify.com/s/files/1/0661/7423/products/sunset-sherbet-right-zoom_540x.jpg?v=1655541320"
          ItemName="Sun Set"
          ItemPrice="₹ 900-/"
          Stars="★★★☆☆"
          FunctionName={ProductFive}
          RemoveFunction ={RemoveCart}
        />
        <MainSectionCom
          imgLink="https://cdn.shopify.com/s/files/1/0661/7423/products/drip-is-drip-front-hood-string_11b90bf9-5fc7-4613-91f4-96e25bf537c1_1080x.jpg?v=1655538353"
          ItemName="Blue Pink Yellow"
          ItemPrice="₹ 2200-/"
          Stars="★★★★★"
          FunctionName={ProductSix}
          RemoveFunction ={RemoveCart}
        />
        <MainSectionCom
          imgLink="https://cdn.fashiola.in/L73668039/marcelo-burlon-flame-print-denim-jacket.jpg"
          ItemName="Flame Printed"
          ItemPrice="₹ 1700-/"
          Stars="★★★★☆"
          FunctionName={ProductSeven}
          RemoveFunction ={RemoveCart}
        />
        <MainSectionCom
          imgLink="https://cdn.shopify.com/s/files/1/2698/4646/products/product-image-747580454_800x.jpg?v=1623958541"
          ItemName="Printed One"
          ItemPrice="₹ 3500-/"
          Stars="★★★★☆"
          FunctionName={ProductEight}
        />
      </div>
      <Footer />
    </>
  );
}
 