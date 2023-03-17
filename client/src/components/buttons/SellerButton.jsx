import { Button } from "@mui/material";
import React from "react";

const SellerButton = ({ onClick, text }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        marginTop: "5px",
        textTransform: "capitalize",
        maxWidth: "70%",
        padding: "10px 40px",
        backgroundColor: "var(--orange)",
        color: "#fff",
        fontWeight: 700,
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
        flex: 1,
        transition: "0.3s",
        boxShadow: "0px 10px 20px -8px var(--pale-orange)",
        "&:active": {
          boxShadow: "none",
          backgroundColor: "var(--orange)",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default SellerButton;
