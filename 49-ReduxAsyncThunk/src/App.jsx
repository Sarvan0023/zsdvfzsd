import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Products";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import Wishlist from "./Wishlist";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { WishlistProvider } from "./WishlistContext";

function App() {
  return (
    <Router>
      <div className="App">
        <WishlistProvider>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/" element={<Products />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </WishlistProvider>
      </div>
    </Router>
  );
}

export default App;