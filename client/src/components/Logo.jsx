import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Logo = () => {
  const navigate = useNavigate();

  const goToPath = (path) => {
    navigate(path);
  };
  return (
    <Box display={"flex"} alignItems="center" justifyContent={"center"}>
      <Box
        component="img"
        sx={{
          width: 150,
          display: { xs: "none", sm: "block" },
          cursor: "pointer",
        }}
        onClick={() => goToPath("/")}
        alt="Shopkgp"
        src={logo}
      />
      <Box
        component="img"
        sx={{
          width: 34,
          display: { xs: "block", sm: "none" },
          cursor: "pointer",
        }}
        onClick={() => goToPath("/")}
        alt="Shopkgp"
        src={require("../assets/cart.png")}
      />
    </Box>
  );
};

export default Logo;
