import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    handleMenuClose();
    navigate("/login");
  };

  const handleRegister = () => {
    handleMenuClose();
    navigate("/register");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    handleMenuClose();
    // Add toast notification for logout
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Hovsan Store
        </Typography>
        <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
        <Button color="inherit" onClick={() => navigate("/wishlist")}>Wishlist</Button>
        <Button color="inherit" onClick={handleMenuClick}>
          Account
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {!isAuthenticated ? (
            <>
              <MenuItem onClick={handleLogin}>Login</MenuItem>
              <MenuItem onClick={handleRegister}>Register</MenuItem>
            </>
          ) : (
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;