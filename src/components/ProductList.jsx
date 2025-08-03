// ProductList.jsx
import React, { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

function ProductListPage({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  // Handle add to cart (this will open the drawer)
  const handleAddToCart = (product) => {
    console.log("Product added to cart:", product.title);
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2, md: 3 }, py: 3 }}>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard
                product={product}
                onViewDetails={() => handleViewDetails(product)}
                onAddToCart={() => handleAddToCart(product)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Product Detail Modal */}
      <ProductDetailModal
        open={modalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}

export default ProductListPage;
