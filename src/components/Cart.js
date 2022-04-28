import React, { useState, useEffect } from "react";

// -----Cart-----
// A viewCart state that is set to false, when set to true toggle the display to show
// Pass cart as props to cart.js
// map through cart items and create displays showing their img, name, price and quantity.
// during map, multiply each items price by their quantity, then add it to the subtotal
// Cart css slide in from right
// close cart if you click x button or outside of cart window

function Cart(props) {

    const [subtotal, setSubTotal] = useState(0);

    const handleChange = (e, product) => {
        let foo = props.cart.findIndex(item => item.name === product.name);
        props.setCart([...props.cart], props.cart[foo].quantity = e.target.value);
        console.log(props.cart);
    }

    useEffect(() => {
        props.cart.forEach(product => {
            setSubTotal(subtotal + (product.price * product.quantity));
        })
    }, [props.cart]);

    return (
        <div className="cart-container">
            <div className="cart-bg" onClick={() => props.onClick()}>
            </div>
            <div className="cart">
                <h1>Your Cart</h1>
                <div className="cart-content">
                    {props.cart.map((product) =>
                    (
                        <div key={product.name} className="cart-content-product">
                            <img src={product.img} alt="product-image" />
                            <span>{product.name}</span>
                            <span>${product.price * product.quantity}</span>
                            <input type="number" value={product.quantity} onChange={(e) => handleChange(e, product)} />
                        </div>
                    ))}
                </div>
                <span className="cart-subtotal">Subtotal: ${subtotal}</span>
                <button type="button">CHECKOUT</button>
            </div>
        </div>

    )
}

export default Cart;