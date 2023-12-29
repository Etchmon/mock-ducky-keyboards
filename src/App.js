import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, lazy, Suspense } from "react";
// Components
import Nav from "./components/Nav";
// import Home from "./components/Home";
// import Shop from "./components/Shop";
// import Cart from "./components/Cart";
// Styles
import "./styles/css/reset.css";
import "./styles/css/App.css";

// Lazy load the Home component
const Home = lazy(() => import("./components/Home"));
const Shop = lazy(() => import("./components/Shop"));
const Cart = lazy(() => import("./components/Cart"));

// -----Ducky Keyboards Shopping Cart & Landing Page-----

// Main App component
function App() {
  // State for user, initially set to 'Guest'
  const [user, setUser] = useState({
    name: "Guest",
  });

  // State for cart, initially an empty array
  const [cart, setCart] = useState([]);

  // State for viewCart, initially set to false
  const [viewCart, setViewCart] = useState(false);

  // Function to add a product to the cart
  const addToCart = (product) => {
    let boo = false; // Flag to check if product is already in the cart
    // Iterate over each item in the cart
    cart.forEach((item) => {
      // If the item is already in the cart, increase the quantity
      if (item.name === product.name) {
        item.quantity = Number(item.quantity) + Number(product.quantity);
        boo = true; // Set flag to true
      }
    });
    // Hide the product overlay
    document.querySelector(".product-overlay").style.transform = "scale(0)";
    // If product is already in the cart, return and don't add it again
    if (boo) return;
    // Add the product to the cart
    setCart((cart) => [...cart, product]);
  };

  // Function to toggle the viewCart state
  const onClick = () => setViewCart(!viewCart);

  // Content to be rendered
  let content = (
    <div className="app">
      <Router>
        {/* Navigation bar */}
        <Nav user={user} onClick={onClick} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="shopping-cart/" element={<Home />} />
            <Route
              exact
              path="shopping-cart/shop"
              element={<Shop user={user} addToCart={addToCart} />}
            />
          </Routes>
          {viewCart ? (
            <Cart cart={cart} setCart={setCart} onClick={onClick} />
          ) : null}
        </Suspense>
      </Router>
    </div>
  );

  // Return the content to be rendered
  return content;
}

export default App;
