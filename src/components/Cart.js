import React, { useState, useEffect } from "react";

// -----Cart-----
// A viewCart state that is set to false, when set to true toggle the display to show
// Cart has

function Cart(props) {


    return (
        <div className="cart">
            <h1>Your Cart</h1>
            <div className="cart-content">

            </div>
            <span>Subtotal:</span>
            <button type="button">CHECKOUT</button>
        </div>
    )
}

export default Cart;