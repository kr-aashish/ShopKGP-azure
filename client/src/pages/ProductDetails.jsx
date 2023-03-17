import React, { useState } from "react";
import Gallery from "../components/product_details/Gallery";
import MobileGallery from "../components/product_details/MobileGallery";
import QuantityButton from "../components/product_details/QuantityButton";
import CartIcon from "../components/Icons/CartIcon";
import { Container } from "@mui/material";
import PrimarySearchAppBar from "../components/appbar/Appbar";

export const ProductDetails = () => {
  const [quant, setQuant] = useState(0);
  const [orderedQuant, setOrderedQuant] = useState(0);

  const addQuant = () => {
    setQuant(quant + 1);
  };

  const removeQuant = () => {
    setQuant(quant - 1);
  };

  const resetQuant = () => {
    setQuant(0);
    setOrderedQuant(0);
  };
  return (
    <>
      <Container component="section" maxWidth={"lg"}>
        <section className="core">
          <Gallery />
          <MobileGallery />
          <Description
            onQuant={quant}
            onAdd={addQuant}
            onRemove={removeQuant}
            onSetOrderedQuant={setOrderedQuant}
          />
        </section>
      </Container>
    </>
  );
};

export const Description = ({
  onQuant,
  onAdd,
  onRemove,
  onSetOrderedQuant,
}) => {
  return (
    <section className="description">
      <p className="pre">sai chandan kadarla</p>
      <h1>fall limited edition sneakers</h1>
      <p className="desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer
      </p>
      <div className="price">
        <div className="main-tag">
          <p>Rs. 125.00</p>
          <p>50%</p>
        </div>
        <s>Rs. 250.00</s>
      </div>
      <div className="buttons">
        <QuantityButton onQuant={onQuant} onRemove={onRemove} onAdd={onAdd} />
        <button
          className="add-to-cart"
          onClick={() => {
            onSetOrderedQuant(onQuant);
          }}
        >
          <CartIcon />
          add to cart
        </button>
      </div>
    </section>
  );
};
