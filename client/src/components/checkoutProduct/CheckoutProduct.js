import { Box, Rating } from "@mui/material";
import React from "react";
import { useStateValue } from "../../StateProvider";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <Box
      display={"flex"}
      alignItems="center"
      mt={3}
      mb={3}
      mr={4}
      border={1}
      p={5}
      borderRadius={5}
      borderColor="#ABA9A9"
    >
      <img
        src={image}
        alt=""
        style={{
          height: "auto",
          maxHeight: "200px",
          objectFit: "cover",
          marginRight: "30px",
        }}
      />
      <Box>
        <p>{title}</p>
        <Rating
          name="read-only"
          value={rating}
          readOnly
          style={{ marginTop: "10px" }}
        />

        <SecondaryButton onClick={removeFromBasket} text="remove from cart" />
      </Box>
    </Box>
  );
}

export default CheckoutProduct;
