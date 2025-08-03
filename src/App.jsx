// App.jsx
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProductListPage from "./components/ProductList.jsx";

function App() {
  // Simple cart counter state
  const [cartCount, setCartCount] = useState(0);

  // Handle add to cart - just increment counter and log
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product.title);
    setCartCount((prevCount) => prevCount + 1);
    // You can add more cart logic here later
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <ProductListPage onAddToCart={handleAddToCart} />
      <Footer />
    </>
  );
}

export default App;
