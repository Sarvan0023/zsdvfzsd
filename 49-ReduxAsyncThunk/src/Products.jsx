import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Grid, IconButton, CardMedia, Box } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useWishlist } from "./WishlistContext";
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(response => {
        console.log("Fetched products:", response.data); // Debugging line
        setProducts(response.data);
      })
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const isInWishlist = (productId) => wishlist.some(item => item.id === productId);

  return (
    <Grid container spacing={1}>
      {products.map((product) => (
        <Grid  item key={product.id} xs={30} sm={40} md={2}>
          <Card className="product-card">
            <Box position="relative">
              <CardMedia
                component="img"
                height="150"
                image={product.thumbnail}
                alt={product.title}
              />
              <IconButton
                className="wishlist-button"
                onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                style={{ position: 'absolute', top: '10px', right: '10px' }}
              >
                {isInWishlist(product.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description.substring(0, 20)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {product.rating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Stock: {product.stock}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;