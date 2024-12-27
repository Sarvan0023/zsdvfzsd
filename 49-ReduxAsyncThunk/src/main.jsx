import React from "react";
import { WishlistProvider } from "./WishlistContext";
import { BasketProvider } from "./BasketContext";
import Products from "./Products";
import Wishlist from "./Wishlist";

const App = () => {
  return (
    <WishlistProvider>
      <BasketProvider>
        <Products />
        <Wishlist />
      </BasketProvider>
    </WishlistProvider>
  );
};

export default App;