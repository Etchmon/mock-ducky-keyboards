import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
// Components
import Nav from "./components/Nav";
// Styles
import "./styles/css/reset.css"
import "./styles/css/App.css";

// -----Ducky Keyboards Shopping Cart & Landing Page-----
// Put Nav outside of react router so it stays consistent
// States: User, Cart, Loading, Products
// Components: Home, Shop, Cart, Checkout, Details, Card
// Home page displays has shop now button that takes us to Products page
// Products page displays all Products
// Cart button on nav opens a side bar with your car information and checkout button
// Add to cart and Details button on each product. Onclick brings up product details in a pop up.
// Quantity increment only available on details and cart component

function App() {

  const [user, setUser] = useState({
    name: 'Guest',
    cart: [],
  });

  const [loading, setLoading] = useState(true);

  let content = (
    <div className="app">
      <Nav />
      {/* BrowserRouter
          Routes
            Route /
            Route /shop */}

    </div>
  );

  return content;
}

export default App;
