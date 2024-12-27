import React from "react";
import { useWishlist } from "./WishlistContext";
import { useBasket } from "./BasketContext";
import { Button, Card, CardContent, Typography, Grid, CardMedia } from "@mui/material";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToBasket } = useBasket();

  return (
    <Grid container spacing={3}>
      {wishlist.map((product) => (
        <Grid item xs={12} sm={6} md={2} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="150"
              image={product.thumbnail}
              alt={product.title}
            />
            <CardContent>
              <Typography variant="h5">{product.title}</Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Typography variant="h6">${product.price}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => addToBasket(product)}
              >
                Add to Basket
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => removeFromWishlist(product.id)}
              >
                Remove from Wishlist
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Wishlist;