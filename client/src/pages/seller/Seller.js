import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  makeStyles,
  MenuItem,
  TextField,
  Typography,
  Select
} from "@material-ui/core";
import {
  AddCircleOutline as AddCircleOutlineIcon,
  FormatBoldSharp,
  PhotoCamera as PhotoCameraIcon
} from "@material-ui/icons";
import axios from 'axios';
import devConfig from '../../config/dev';
import Swal from 'sweetalert2';
import AWS from 'aws-sdk';


const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main
  },
  imageWrapper: {
    position: "relative"
  },
  imagePreview: {
    width: "100%",
    paddingTop: "100%"
  },
  imagePlaceholder: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.grey[300]
  },
  iconButton: {
    position: "absolute",
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white
  },   
  input: {
    height: 60,
  },
  addIcon: {
    fontSize: "48px",
    backgroundColor: "var(--orange)",
    borderRadius: "50%",
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  addButton: {
    marginTop: theme.spacing(3),
    color: "white",
    backgroundColor: "orange",
    "&:hover": {
      backgroundColor: "darkorange",
    },
  },
}));

function SellerInterface() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  // const [imageFile, setImageFile] = useState("");
  const [category, setCategory] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const s3 = new AWS.S3({
    accessKeyId: 'AKIAVO4R5EPKIYI3H7HH',
    secretAccessKey: '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',
    region: 'ap-northeast-1'
  });

  // const handleImageChange = (event) => {
  //   setImage(URL.createObjectURL(event.target.files[0]));
  //   setImageFile(event.target.files[0]);
  // };

  const handleImageChange = async (event) => {
    try {
      let timerInterval;
      Swal.fire({
        title: 'Uploading your media',
        html: 'It will be complete in <b></b> milliseconds.',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })

      const file = event.target.files[0];
      // setImage(URL.createObjectURL(file));
      // setImageFile(file);
      const fileName = `${Date.now()}-${file.name}`;
      const params = {
        Bucket: 'shopkgp-media',
        Key: fileName,
        Body: file,
        ACL: 'public-read',
      };
      await s3.upload(params).promise();
      console.log('File uploaded successfully');

      const imageUrl = `https://shopkgp-media.s3.amazonaws.com/${fileName}`;
      setImage(imageUrl);

    } catch (error) {
      console.error(error);
    }
  };
  
  const handleAddProduct = () => {

    // const prodApiEndpoint = devConfig.apiEndpoints.createProduct;

    axios.post(`${process.env.REACT_APP_API_URL}/product/create`, {
      itemId: "",
      sellerId: "",
      name: title, 
      description: description,
      price: price, 
      imageUrl: image, 
      category: category  
    })      
    .then((response) => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Product added successfully!',
          iconColor: 'orange',
          showConfirmButton: false,
          timer: 2500
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Oops!",
          text: "Please add all the required details",
          icon: "error",
          button: "Ok",
        });
      })
      .finally (() => {
        setTitle("");
        setDescription("");
        setPrice("");
        setImage("");
        setCategory("");
      })
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" align="center">
          Add a Product
        </Typography>
      </Box>
      <Card>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <AddCircleOutlineIcon className={classes.addIcon}/>
            </Avatar>
          }
          title="Product Information"
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Title"
                fullWidth
                value={title}
                onChange={handleTitleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Price"
                type="number"
                fullWidth
                value={price}
                onChange={handlePriceChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box mt={2} mb={1}>
                <Typography variant="subtitle1" style={{color: 'grey', fontSize: '16px'}}>
                  Category
                </Typography>
              </Box>
              <Select
                labelId="category-label"
                id="category"
                value={category}
                onChange={handleCategoryChange}
                fullWidth
              >
                <MenuItem value="books">Book</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="misc">Misc</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                value={description}
                onChange={handleDescriptionChange}
                margin="normal"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box mt={2} mb={1}>
                <Typography variant="subtitle1">
                  Add Image
                </Typography>
              </Box>
              <Card className={classes.imageWrapper}>
                {image ? (
                  <CardMedia
                    className={classes.imagePreview}
                    image={image}
                    title="Product Preview"
                  />
                ) : (
                  <Box className={classes.imagePlaceholder}>
                    <Typography >add</Typography>
                  </Box>
                )}
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  type="file"
                  onChange={handleImageChange}
                />
                <label htmlFor="contained-button-file">
                <IconButton
                    className={classes.iconButton}
                    component="span"
                    style={{ fontSize: 24, 
                        backgroundColor: "var(--orange)",}}
                    >
                    <PhotoCameraIcon />
                </IconButton>
                </label>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Box display="flex" justifyContent="flex-end" my={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddProduct}
          // disabled={!title || !description || !price || !image || !category}
          className={classes.addButton}
        >
          Add Product
        </Button>
      </Box>
    </Container>
  );
  
}  

export default SellerInterface;