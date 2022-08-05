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
      <div className="btnSection" >
        <button
          className='AddCartBtn'
          onClick={props.addToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
