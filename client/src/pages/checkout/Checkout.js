import React, { useContext } from "react";
import "./Checkout.css";
import CheckoutProduct from "../../components/checkoutProduct/CheckoutProduct";
import Subtotal from "../../components/subtotal/Subtotal";
import { useStateValue } from "../../StateProvider";
import { UserContext } from "../../user_context/Context";
import { Box } from "@mui/system";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const { user_dispatch, state } = useContext(UserContext);
  console.log(basket);

  const navigate = useNavigate();

  const goToPath = (path) => {
    navigate(path);
  };

  return (
    <Box display={"flex"} mr={5} ml={5}>
      <Box flex={{ sm: 12, md: 4 }}>

        <h3 style={{ marginTop: "10px", color: "#504E4E" }}>
          Hello, {state.user?.email}
        </h3>

        <h2 style={{ marginTop: "10px", color: "#312F2F" }}>
          Your shopping Basket - {Object.keys(basket).length} items
        </h2>
        
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}

            // id={item.itemId}
            // title={item.description}
            // image={item.imageUrl}
            // price={item.price}
            // rating={5}
          />
        ))}
        <PrimaryButton
          text={"continue shopping"}
          onClick={() => {
            goToPath("/");
          }}
        />
      </Box>
      <Box flex={{ sm: 12, md: 1 }} mt={10}>
        <Subtotal />
      </Box>
    </Box>
  );
}

export default Checkout;
