import React from "react";
import "./Home.css";
import Product from "../../components/product/Product";
import { Grid } from "@mui/material";
import { data } from "../../data/products";
import { Box } from "@mui/system";
import PrimarySearchAppBar from "../../components/appbar/Appbar";
import Footer from "../../components/footer/Footer";

// import devConfig from '../../config/dev';
import { useState, useEffect} from 'react';
import axios from 'axios';

function Home() {

  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              axios.get(`${process.env.REACT_APP_API_URL}/product/all`).then((response) => {
                  setAllProducts(response.data);
              });
          } catch (err) {
              setError(err);
          } finally { 
              setLoading(false);
          }
      };

      fetchData();
  }, []);

  if (loading) {
      return <>Loading...</>
  }

  if (error) {
      return <>Error: {error.message}</>
  }
  console.log("allProducts ", allProducts);
  console.log("data ", data);

  return (
    <>
      <Grid container paddingTop={"5px"}>
        {allProducts.map((v, index) => (
          <Grid
            key={index}
            xs={12}
            sm={6}
            md={4}
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
          >
            <Product
              // id={v.id}
              // title={v.title}
              // price={v.price}
              // rating={v.rating}
              // image={v.image}
              id={v.itemId}
              title={v.description}
              price={parseInt(v.price)}
              rating={5}
              image={v.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
      <Footer/>
    </>
  );
}

export default Home;
