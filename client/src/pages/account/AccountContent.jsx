import React from 'react';
import Box from "@mui/material/Box";
import {Grid, Paper, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";

const AccountContent = () => {
    return (
        <Box flex={4} p={2}>
            <Paper sx={{padding: 4, borderRadius: 3, marginRight: 2}} variant={"outlined"}>
                <Typography variant={"h5"} pb={2} pt={2} fontWeight={"bolder"}>
                    My Account Details
                </Typography>
                <Typography variant={"body2"} borderBottom={.5} pb={1} borderColor={"gray"} pt={2}
                            fontWeight={"bold"}>
                    Personal Information
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography pt={4} color={"gray"} fontWeight={"bold"} fontSize={11}>
                            FIRST NAME
                        </Typography>
                        <TextField variant={"outlined"} size={"small"} margin={"dense"} placeholder={"First Name"}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography pt={4} color={"gray"} fontWeight={"bold"} fontSize={11}>
                            LAST NAME
                        </Typography>
                        <TextField variant={"outlined"} size={"small"} margin={"dense"} placeholder={"Lasts Name"}/>
                    </Grid>
                </Grid>
                <Typography pt={4} color={"gray"} fontWeight={"bold"} fontSize={11}>
                    BIRTH DATE
                </Typography>
                <TextField type={"date"} variant={"outlined"} size={"small"} margin={"dense"}/>
                <Typography pt={4} color={"gray"} fontWeight={"bold"} fontSize={11}>
                    PHONE NUMBER
                </Typography>
                <TextField type={"text"} helperText={"Keep 9-digit format with no spaces and dashes"}
                           variant={"outlined"}
                           size={"small"} margin={"dense"}/>

                <Typography variant={"body2"} borderBottom={.5} pb={1} borderColor={"gray"} pt={5}
                            fontWeight={"bold"}>
                    E-mail Address
                </Typography>
                <Typography pt={4} color={"gray"} fontWeight={"bold"} fontSize={11}>
                    EMAIL ADDRESS
                </Typography>
                <TextField type={"email"} variant={"outlined"} size={"small"} margin={"dense"}
                           placeholder={"name@example.com"}/>
            </Paper>
        </Box>
    );
};

export default AccountContent;
