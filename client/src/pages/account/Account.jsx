import * as React from 'react';
import Box from "@mui/material/Box";
import AccountNavbar from "./AccountNavbar";
import AccountContent from "./AccountContent";
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Account() {
    return (
        <Box>
            <Typography variant={"h5"} fontWeight={"bold"} pl={5} pt={4} pb={2}>My Account </Typography>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <AccountNavbar/>
                <AccountContent/>
            </Stack>
        </Box>
    );
}