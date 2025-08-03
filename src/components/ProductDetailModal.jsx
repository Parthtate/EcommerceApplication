// ProductDetailModal.jsx
import React from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  Rating,
  Button,
  Chip,
  Stack,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductDetailModal = ({ open, onClose, product, onAddToCart }) => {
  if (!product) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent sx={{ p: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {/* Product Image */}
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{
              width: 300,
              height: 300,
              objectFit: "contain",
              borderRadius: 2,
              bgcolor: "#f5f5f5",
              p: 2,
            }}
          />

          {/* Product Info */}
          <Box sx={{ flex: 1 }}>
            <Stack direction="row" justifyContent="space-between">
              <Chip
                label={product.category}
                sx={{
                  backgroundColor: "#f0f0f5",
                  textTransform: "capitalize",
                  fontWeight: 500,
                }}
              />
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Stack>

            <Typography variant="h5" fontWeight="bold" mt={2}>
              {product.title}
            </Typography>

            <Box display="flex" alignItems="center" gap={1} mt={1}>
              <Rating
                value={product.rating?.rate || 0}
                precision={0.5}
                readOnly
                size="small"
              />
              <Typography variant="body2">
                ({product.rating?.count} reviews)
              </Typography>
            </Box>

            <Typography variant="h5" color="primary" fontWeight={700} mt={2}>
              ${product.price}
            </Typography>

            <Typography variant="subtitle1" fontWeight={600} mt={3}>
              Description
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              {product.description}
            </Typography>

            <Stack direction="row" gap={2} mt={4}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<ShoppingCartIcon />}
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  px: 3,
                  bgcolor: "#FF8F00",
                  "&:hover": { bgcolor: "#FF9F00" },
                }}
                onClick={() => {
                  console.log("Adding to cart from modal:", product.title);
                  onAddToCart(product); // Add product to cart
                  onClose(); // Close the modal after adding to cart
                }}
              >
                Add to Cart
              </Button>
              <Button
                onClick={onClose}
                variant="outlined"
                sx={{ textTransform: "none", fontWeight: 600, px: 3 }}
              >
                Close
              </Button>
            </Stack>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
