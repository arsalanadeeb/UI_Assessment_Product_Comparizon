import React from "react"
import "./ProductDisplay.css"


export default function ProductDisplay(props){

    return (
      <div className="product-display-container">
        <div>
        <img className="prodct-display-image-size"src="https://rukminim1.flixcart.com/image/1000/1000/jj367bk0/television/g/c/6/vu-40d6575-original-imaf6qqy4vfneabe.jpeg?q=100"/>
        </div>

         <div>
         LG 60 cm 20 inch
         </div>

          <div className="product-display-flex">
         <div><span >&#x20B9;</span>1099</div>
         <div className="product-display-original-price"><span >&#x20B9;</span>1200</div>
         <div className="product-display-green">9% off</div>
          </div>
    </div>
    );

}