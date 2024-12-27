import React from "react";
import { useBasket } from "./BasketContext";
import { Button, Card, CardContent, Typography, Grid, CardMedia } from "@mui/material";

const Basket = () => {
  const { basket, removeFromBasket } = useBasket();

  return (
    <Grid container spacing={3}>
      {basket.map((product) => (
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
                color="secondary"
                onClick={() => removeFromBasket(product.id)}
              >
                Remove from Basket
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Basket;