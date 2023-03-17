import React from "react";
import "./Footer.css";
import { Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Copyright } from "../../pages/signup/SignUp";

function Footer() {
  return (
    <Box className="footer-container" paddingLeft={3}>
      <Grid container spacing={2}>

        <Grid item xs={12} md={3} paddingLeft={2}>
          <Typography variant="h6">ShopKGP</Typography>
          <Typography variant="body1" className="footer-about">
            ShopKGP is a recommerce platform that allows buyers and sellers to connect with each other.
          </Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h6">Quick Links</Typography>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/seller">Sell a product</Link>
            </li>
            <li>
              <Link to="/error">About Us</Link>
            </li>
            <li>
              <Link to="/error">Contact Us</Link>
            </li>
          </ul>
        </Grid>


        <Grid item xs={12} md={3}>
          <Typography variant="h6">Follow Us</Typography>
          <ul className="footer-social-links">
            <li>
              <a href="https://www.facebook.com">
                <Facebook />
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <Instagram />
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <Twitter />
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com">
                <YouTube />
                YouTube
              </a>
            </li>
          </ul>
        </Grid>


        <Grid item xs={12} md={3}>
          <Typography variant="h6">Contact Us</Typography>
          <ul className="footer-contact">
            <li>
              <Typography variant="body1">Email: contact@shopkgp.com</Typography>
            </li>
            <li>
              <Typography variant="body1">
                Phone: +91-8084662242
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Address: RMSoEE, IIT Kharagpur, West Bengal, India
              </Typography>
            </li>
          </ul>
        </Grid>

    
      </Grid>
        <Copyright sx={{ mt: 1, py: 3, color: "white" }}/>
    </Box>
  );
}

export default Footer;
