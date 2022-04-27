import React, { useState, useEffect } from "react";

// -----Cart-----
// A viewCart state that is set to false, when set to true toggle the display to show
// Pass cart as props to cart.js
// map through cart items and create displays showing their img, name, price and quantity.
// during map, multiply each items price by their quantity, then add it to the subtotal
// Cart css slide in from right
// close cart if you click x button or outside of cart window

function Cart(props) {

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            <div className="cart-content">
                {props.cart.map((product) =>
                (
                    <div key={product.name} className="cart-content-product">
                        <img src={product.img} alt="product-image" />
                        <span>{product.name}</span>
                        <span>${product.price}</span>
                        <span>{product.quantity}</span>
                    </div>
                ))}
            </div>
            <span className="cart-subtotal">Subtotal:${props.subtotal}</span>
            <button type="button">CHECKOUT</button>
        </div>
    )
}

export default Cart;