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
                    <TabContext>
                        <TabList >
                            {mainNavBarItems.map((item, index) => (
                                <Tab label={item.label} sx={navBarStyles.tabs}></Tab>
                            ))}
                        </TabList>
                        {/*<TabPanel*/}
                        {/*    TabIndicatorProps={{sx: {backgroundColor: "#000000"}}}*/}
                        {/*    value={value} onChange={(e, val) => setValue(val)}*/}
                        {/*    sx={navBarStyles.tabCentering}*/}
                        {/*>*/}
                        {mainNavBarItems.map((item, index) => (
                            <TabPanel key={index} label={item.label} value={item.id}></TabPanel>
                        ))}
                    </TabContext>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Navbar
