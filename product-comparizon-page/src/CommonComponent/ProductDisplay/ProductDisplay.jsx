import React from "react"
import "./ProductDisplay.css"


export default function ProductDisplay(props){

    return (
      <div className="product-display-container">
        <div>
        <img className="prodct-display-image-size"src={props.imageLink}/>
        </div>

         <div className="prodct-display-title">
         {props.title}
         </div>

          <div className="product-display-flex">
    <div><span >&#x20B9;</span>{props.finalPrice}</div>
    <div className="product-display-original-price"><span >&#x20B9;</span>{props.price}</div>
    <div className="product-display-green">{props.totalDiscount + "off"}</div>
          </div>
    </div>
    );

}