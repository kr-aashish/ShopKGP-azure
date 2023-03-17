import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { ShoppingCart } from "@mui/icons-material";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { Divider } from "@mui/material";
import Logo from "../Logo";
import SellerButton from "../buttons/SellerButton";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius + 5,
  borderColor: theme.palette.divider,
  borderWidth: 1,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.green, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 10,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [{ basket }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const goToPath = (path) => {
    navigate(path);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    goToPath("/account/12");
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, margin: "10px" }}>
      <AppBar
        position="static"
        elevation={0}
        style={{ backgroundColor: "white" }}
      >
        <Toolbar>
          {/*<Typography*/}
          {/*    variant="h6"*/}
          {/*    noWrap*/}
          {/*    component="div"*/}
          {/*    sx={{display: {xs: "none", sm: "block"}, cursor: "pointer"}}*/}
          {/*    onClick={() => goToPath("/")}*/}
          {/*>*/}
          {/*    BuyNSellKGP*/}
          {/*</Typography>*/}
          <Logo />
          <Search
            style={{
              backgroundColor: "white",
              border: "0.1px solid rgb(110, 110, 110)",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon style={{ color: "black" }} />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{
                borderColor: "black",
                color: "black",
              }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/*<IconButton*/}
            {/*    size="large"*/}
            {/*    aria-label="show 4 new mails"*/}
            {/*    color="inherit"*/}
            {/*>*/}
            {/*    <Badge badgeContent={4} color="error">*/}
            {/*        <MailIcon/>*/}
            {/*    </Badge>*/}
            {/*</IconButton>*/}
            
            <SellerButton onClick={() => goToPath("/seller")} text="Seller Tool"/>
            
            {/* <IconButton>
              <Badge onClick = {() => goToPath("/seller")}>
                <AddCircleOutlineIcon style={{ color: "black" }} />
              </Badge>
            </IconButton> */}
            
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge
                badgeContent={basket?.length}
                color="error"
                onClick={() => goToPath("/checkout")}
              >
                <ShoppingCart style={{ color: "black" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleMenuClose}
              color="inherit"
            >
              <AccountCircle style={{ color: "black" }} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon style={{ color: "black" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <Divider style={{ margin: "10px 10px 20px 20px", color: "black" }} />
    </Box>
  );
}
