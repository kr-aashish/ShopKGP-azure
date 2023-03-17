import { Button } from "@mui/material";
import React from "react";

const SecondaryButton = ({ onClick, text }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        marginTop: "15px",
        textTransform: "capitalize",
        maxWidth: "50%",
        padding: "10px 40px",
        backgroundColor: "var(--pale-orange)",
        color: "#403F3F",
        fontWeight: 700,
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
        flex: 1,
        transition: "0.3s",
        boxShadow: "0px 0px",
      }}
    >
      {text}
    </Button>
  );
};

export default SecondaryButton;
