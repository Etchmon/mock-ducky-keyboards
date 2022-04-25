import allProducts from "../data/AllProducts";
import React, { useState, useEffect } from "react";

function Shop(props) {
    console.log(allProducts);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState('');
    const [sw, setSwitch] = useState('');
    const [src, setSrc] = useState();

    const viewDetails = (product) => {
        setName(product.name);
        setSize(product.dimensions);
        setSwitch(product.switch);
        setSrc(product.img);
        setPrice(product.price)

        document.querySelector('.product-overlay').style.transform = 'scale(1)'
    };

    return (
        <section className="shop">
            <div className="side-bar">
                <h1>Keyboards</h1>
            </div>
            <div className="shop-display">
                {allProducts.map((product) => (
                    <div className="product-card" key={product.name} id={product.name}>
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
                <span className="detail-card-name">{name}</span>
                <img src={src} alt="product"></img>
                <div className="detail-card">
                    <span className="detail-card-price">${price}</span>
                    <span className="detail-card-switch">{sw}</span>
                    <span className="detail-card-size">{size}</span>
                    <button type="button">ADD TO CART</button>
                </div>
            </div>
        </section>
    )
}

export default Shop;