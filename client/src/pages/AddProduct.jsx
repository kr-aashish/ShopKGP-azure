import { AddAPhoto, Image } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import DragDrop from "../components/DragAndDrop";

const AddProduct = () => {
  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState();
  const [fileURL, setfileURL] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setIsFilePicked(true);
      setfileURL(URL.createObjectURL(event.target.files[0]));
      console.log(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <Box
      height={"40vh"}
      width="30%"
      backgroundColor="#EFF5F5FB"
      border={"dashed 1px"}
      borderRadius="20px"
      display={"flex"}
      ml="10%"
      flexDirection="column"
      alignItems={"center"}
      justifyContent="center"
      overflow={"clip"}
    >
      {fileURL ? (
        <img
          src={fileURL}
          alt="NotFound"
          fit="cover"
          width={"100%"}
          height="100%"
        />
      ) : (
        <>
          <AddAPhoto
            onClick={() => inputFile.current.click()}
            color="#504E4E"
          />

          <input
            id="myInput"
            type="file"
            ref={inputFile}
            style={{ display: "none" }}
            onChange={changeHandler}
          />
          <p fontSize={"xl"} color="#A0AEC0">
            Upload picture
          </p>
        </>
      )}
    </Box>
  );
};

export default AddProduct;
