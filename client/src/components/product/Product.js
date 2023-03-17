import { Button, Rating } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import CartIcon from "../Icons/CartIcon";
import QuantityButton from "../product_details/QuantityButton";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const goToPath = (path) => {
    navigate(path);
  };

  // console.log("This is the basket ", basket);

  const addToBasket = () => {
    //dispatch an item item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>

      <img src={image} alt=" " />

      <Rating name="read-only" value={rating} readOnly />
      <Box
        display={"flex"}
        marginTop="15px"
        alignItems="center"
        justifyContent={"space-evenly"}
        width="100%"
      >
        <PrimaryButton onClick={addToBasket} text="add to cart" />
        <SecondaryButton
          onClick={() => goToPath("/detail/21")}
          text="details"
        />
      </Box>
    </div>
  );
}

export default Product;
