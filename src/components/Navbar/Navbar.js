import React, {useState} from 'react'
import Toolbar from '@mui/material/Toolbar';
import {mainNavBarItems} from "./consts/navBarItems";
import {navBarStyles} from "./Styles"
import {useNavigate} from "react-router-dom";
import {Tabs, Tab, Typography, Container} from '@mui/material';
import {Link, animateScroll as scroll} from "react-scroll";
import {AppBar, Box} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";

const Navbar = () => {
    // const navigate = useNavigate()
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const handleRoute = (route) => {
        // console.log(route);
        navigate(route); // New line
    };

    return (
        <Box sx={navBarStyles.box}>
            <AppBar position="fixed" sx={navBarStyles.appBar}>
                <Toolbar>
                    <Box
                        component="img"
                        sx={{
                            height: 50,
                            width: 50,
                            mt: '10px',
                        }}
                        alt="Honeycomb"
                        src="https://cdn-icons-png.flaticon.com/512/5737/5737723.png "
                    />

                    <Typography sx={navBarStyles.logoText}>HiveBuddy</Typography>

                    <Tabs
                        TabIndicatorProps={{sx: {backgroundColor: "#000000"}}}
                        value={value}
                        onChange={(e, val) => setValue(val)}
                        sx={navBarStyles.tabCentering}
                    >
                        {mainNavBarItems.map((item, index) => (
                            <Tab key={index} label={item.label} sx={navBarStyles.tabs} onClick={() => {
                                handleRoute(item.route)
                            }}></Tab>
                        ))}
                        {/* <Tab key="4" label="Test" sx={navBarStyles.tabs} onClick={() => { handleRoute("test")}}></Tab> */}
                        {/* <LinkTab label="Page One" href="/drafts" /> */}
                    </Tabs>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Navbar
