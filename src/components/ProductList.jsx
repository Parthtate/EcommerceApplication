// ProductList.jsx
import React, { useState, useEffect } from "react";
import { Grid, Container, CircularProgress, Alert, Box } from "@mui/material";
import axios from "axios";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

function ProductListPage({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get API URL from environment variables
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log("Fetching from API URL:", API_URL);

        const response = await axios.get(API_URL);
        setProducts(response.data);
        console.log("Products loaded:", response.data.length);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (API_URL) {
      fetchProducts();
    } else {
      setError(
        "API URL not configured. Please check your environment variables."
      );
      setLoading(false);
    }
  }, [API_URL]);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    console.log("Product added to cart:", product.title);
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  // Loading state
  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 200,
          }}
        >
          <CircularProgress size={50} sx={{ color: "#FF8F00" }} />
        </Box>
      </Container>
    );
  }

  // Error state
  if (error) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Alert severity="error" sx={{ maxWidth: 600, mx: "auto" }}>
          {error}
        </Alert>
      </Container>
    );
  }

  // No products state
  if (products.length === 0) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Alert severity="info" sx={{ maxWidth: 600, mx: "auto" }}>
          No products found.
        </Alert>
      </Container>
    );
  }

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
