import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
        py: 2,
        mt: 4,
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} My Products App. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
