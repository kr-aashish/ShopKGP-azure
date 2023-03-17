import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./pages/account/Account";
import { lightTheme } from "./themes/light";
import Home from "./pages/home/Home.js";
import Checkout from "./pages/checkout/Checkout";
import PrimarySearchAppBar from "./components/appbar/Appbar";
import SignUp from "./pages/signup/SignUp";
import SignInSide from "./pages/login/login";
import SellerInterface from "./pages/seller/Seller"
import { useContext } from "react";
import { UserContext } from "./user_context/Context";
import { ProductDetails } from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import { Sell } from "@mui/icons-material";
import ErrorPage from "./pages/error/Error";

function App() {
  const { state } = useContext(UserContext);
  console.log(state);

  return (
    <ThemeProvider theme={lightTheme}>
      {state?.isLoggedIn ? <PrimarySearchAppBar /> : <></>}
      <Routes>
        <Route
          exact
          path="/signup"
          element={state?.isLoggedIn ? <Home /> : <SignUp />}
        />
        <Route
          exact
          path="/login"
          element={state?.isLoggedIn ? <Home /> : <SignInSide />}
        />
        <Route
          exact
          path="/account/:id"
          element={state?.isLoggedIn ? <Account /> : <SignInSide />}
        />
        <Route
          path="/checkout"
          element={state?.isLoggedIn ? <Checkout /> : <SignInSide />}
        />
        <Route
          path="/add"
          element={state?.isLoggedIn ? <AddProduct /> : <SignInSide />}
        />
        <Route
          path="/detail/:id"
          element={state?.isLoggedIn ? <ProductDetails /> : <SignInSide />}
        />
        <Route
          path="/"
          element={state?.isLoggedIn ? <Home /> : <SignInSide />}
        />
        <Route
          path="/seller"
          element={state?.isLoggedIn ? <SellerInterface/> : <SignInSide />}
        />
        <Route
          path="/error"
          element={<ErrorPage/>}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
