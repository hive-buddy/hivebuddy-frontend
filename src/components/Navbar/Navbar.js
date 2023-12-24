import React, {useState} from 'react';
import Toolbar from '@mui/material/Toolbar';
import {mainNavBarItems} from "./consts/navBarItems";
import {navBarStyles} from "./Styles";
import {
    useNavigate
} from "react-router-dom";
import PropTypes from 'prop-types';
import {Tabs, Tab, Typography} from '@mui/material';
import {AppBar, Box} from "@mui/material";
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import CssBaseline from '@mui/material/CssBaseline';

function HideOnScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


function Navbar(props) {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const handleRoute = (route) => {
        navigate(route); // New line
    };

    return (
        <React.Fragment>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <Box sx={navBarStyles.box}>
                <AppBar position="fixed" sx={navBarStyles.appBar}>
                    <Toolbar >
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
            </HideOnScroll>
            <Toolbar/>
        </React.Fragment>
    )
}

export default Navbar
