import React from 'react'

export default function MainSectionCom(props) {
  return (
        <div className="SectionOne">
          <img
            className="SectionOneImg"
            src={props.imgLink}
            alt="denim jeans"
          />
          <h3>{props.ItemName}</h3>
          <p>{props.ItemPrice}</p>
          {props.Stars}
          <div className="btnSection">
            <button style={{backgroundColor:"black"}} onClick={props.FunctionName}>Add to Cart</button>
            <button style={{backgroundColor:"gray"}} onClick={props.RemoveFunction}>Remove</button>
          </div>
        </div>
  )
}
