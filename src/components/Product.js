import React from "react";
import "./product.css"
import cart from "../images/icon-cart.svg"
const Product = ()=>{
    return(
        <div className="product">

                      <div className="prod_img"></div>

                      <div className="details">
                          <h6 className="small_title">PERFUME</h6>
                          <h1>Gabrielle <br/> Essence Eau <br/> De Parfum</h1>
                          <p>
                             A floral, solar and voluptuous <br/> interpretation composed 
                             by <br/> Olivier Ploge, perfumer. creatore <br/> for the house of CHANEL.
                          </p>
                          <span className="new_price">149.99$</span>
                          <span className="old_price">169.99$</span>
                          <button className="add_btn"><img src={cart} alt="cart"/> <span>Add To Cart</span></button>
                      </div>
        
        </div>
    )
}

export default Product;