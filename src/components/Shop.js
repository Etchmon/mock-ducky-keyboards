import allProducts from "../data/AllProducts";
import React, { useState, useEffect } from "react";

function Shop(props) {
    const [currentProduct, setCurrentProduct] = useState({});

    const viewDetails = (product) => {

        setCurrentProduct(product);

        document.querySelector('.product-overlay').style.transform = 'scale(1)'
    };

    return (
        <section className="shop">
            <div className="side-bar">
                <h1>Keyboards</h1>
            </div>
            <div className="shop-display">
                {allProducts.map((product) => (
                    <div className="product-card" key={product.name} id={product.name} >
                        <h2>{product.name}</h2>
                        <img alt="product-card" src={product.img}></img>
                        <div className="overlay">
                            <button type="button" onClick={() => viewDetails(product)}>DETAILS</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="product-overlay">
                <button type="button" className="close-btn" onClick={() => document.querySelector('.product-overlay').style.transform = 'scale(0)'}>x</button>
                <span className="detail-card-name">{currentProduct.name}</span>
                <img src={currentProduct.img} alt="product"></img>
                <div className="detail-card">
                    <span className="detail-card-price">${currentProduct.price}</span>
                    <span className="detail-card-switch">{currentProduct.switch}</span>
                    <span className="detail-card-size">{currentProduct.dimensions}</span>
                    <button type="button" onClick={() => props.addToCart(currentProduct)}>ADD TO CART</button>
                </div>
            </div>
        </section>
    )
}

export default Shop;