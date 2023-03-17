import React, {useState} from 'react';
import {List, ListItemButton, ListItemIcon, ListItemText, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import {LocationOnTwoTone, Person, Settings, ShoppingCart} from "@mui/icons-material";


function AccountNavbar() {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const theme = useTheme();

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        console.log(theme.palette);
    };

    const customStyle = {
        borderRadius: theme.shape.borderRadius,
    }
    return (
        <Box flex={1} p={1} ml={2} sx={{
            display: {"xs": "none", "sm": "block"},
        }}>
            <List>
                <ListItemButton selected={selectedIndex === 1} onClick={(e) => handleListItemClick(e, 1)}
                                style={customStyle}>
                    <ListItemIcon>
                        <Person/>
                    </ListItemIcon>
                    <ListItemText primary="My Details"/>
                </ListItemButton>
                <ListItemButton selected={selectedIndex === 2} onClick={(e) => handleListItemClick(e, 2)}
                                style={customStyle}>
                    <ListItemIcon>
                        <ShoppingCart/>
                    </ListItemIcon>
                    <ListItemText primary="My Orders"/>
                </ListItemButton>
                <ListItemButton selected={selectedIndex === 3} onClick={(e) => handleListItemClick(e, 3)}
                                style={customStyle}>
                    <ListItemIcon>
                        <LocationOnTwoTone/>
                    </ListItemIcon>
                    <ListItemText primary="My Address"/>
                </ListItemButton>
                <ListItemButton selected={selectedIndex === 4} onClick={(e) => handleListItemClick(e, 4)}
                                style={customStyle}>
                    <ListItemIcon>
                        <Settings/>
                    </ListItemIcon>
                    <ListItemText primary="Settings"/>
                </ListItemButton>

            </List>

        </Box>
    );
}

export default AccountNavbar;
