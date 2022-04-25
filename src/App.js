import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from "react";
// Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from './components/Shop';
// Styles
import "./styles/css/reset.css"
import "./styles/css/App.css";

// -----Ducky Keyboards Shopping Cart & Landing Page-----
// Fill data.js with 15 different keyboards
// Display cards of each product showing image
// Oncard click display that hard in a full screen blurred background pop up that gives information on price, dimensions, and switch type. Use a bigger image than on the display page.
// Onhover display a button for details
// Add to card button only available on details
// Add to cart pushing that products info into users cart array.
// Cart button onclick, slide out cart display over right side of page, blurr background behind it.
// Cart displays all items in cart with product name and price
// At bottom display price total 
// Add delete, and increment button/counter to cart display for each product.

function App() {

  const [user, setUser] = useState({
    name: 'Guest',
    cart: [],
    viewCart: false,
  });

  const [loading, setLoading] = useState(true);

  let content = (
    <div className="app">
      <Router>
        <Nav user={user} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
        </Routes>
      </Router>
      {/* BrowserRouter
          Routes
            Route /
            Route /shop */}

    </div>
  );

  return content;
}

export default App;
