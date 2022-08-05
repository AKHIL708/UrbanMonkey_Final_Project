import { FaCartPlus } from "react-icons/fa";
import ProductComponent from "./ProductComponent";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import productList from "../Products/ProductList";
import { useState } from "react";

export default function MainPage() {
  const [state, setState] = useState([]);
  const counter = useSelector((state) => state.counter);
  const amount = useSelector((state) => state.amount);
  const itemName = useSelector((state) => state.itemName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartRoute = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  return (
    <>
      <div className="NavbarMain">
        <h1 className="NavbarHeadingMain">Urban Monkey </h1>
      </div>
      <form className="MainPageForm">
        <div className="CartContainer">
          <a href="/cart" onClick={cartRoute} className="CartLink">
            {" "}
            <FaCartPlus className="CartSymbol" />
          </a>
          <input type="text" onChange={(e) => e.target.value} value={counter} />
        </div>
        <div className="CartContainer">
          <span>Total : </span>
          <input type="text" onChange={(e) => e.target.value} value={amount} />
        </div>
      </form>

      <div className="mainPageContainer">
        {productList &&
          productList.map((product) => {
            return (
              <ProductComponent
                productDetails={product}
                addToCart={() => {
                  setState((current) => [...current, itemName]);
                  dispatch({
                    type: "Add To Cart",
                    product: product,

                  });
                }}
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
