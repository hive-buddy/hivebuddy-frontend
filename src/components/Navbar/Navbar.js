import * as React from 'react';
import {mainNavBarItems} from "./consts/navBarItems";
import {navBarStyles} from "./Styles";
import {
    useNavigate
} from "react-router-dom";
import {Fab, Fade, Typography} from '@mui/material';
import {AppBar, Box} from "@mui/material";
import Slide from '@mui/material/Slide';
import CssBaseline from '@mui/material/CssBaseline';
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Toolbar from "@mui/material/Toolbar";
import {useState} from "react";


    function HideOnScroll(props) {
        const {children} = props;
        const trigger1 = useScrollTrigger();
        return (
            <Slide appear={false} direction="down" in={!trigger1}>
                <AppBar
                    position="fixed"
                    sx={{
                        transition: 'transform 0.3s ease-in-out',
                        transform: trigger1 ? 'translateY(-100%)' : 'translateY(0)',
                        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Toolbar>{children}</Toolbar>
                </AppBar>
            </Slide>
        );
    }

    function ScrollTop(props) {
        const {children} = props;

        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 100,
        });
        const handleClick = (event) => {
            const anchor = (event.target.ownerDocument || document).querySelector(
                '#back-to-top-anchor',
            );
            if (anchor) {
                anchor.scrollIntoView({
                    block: 'center',
                });
            }
        };
        return (
            <Fade in={trigger}>
                <Box
                    onClick={handleClick}
                    role="presentation"
                    sx={{position: 'fixed', bottom: 16, right: 16}}
                >
                    {children}
                </Box>
            </Fade>
        );
    }

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
};
ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
};

function Navbar(props) {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const handleRoute = (route) => {
        navigate(route);
    };
    return (
        <React.Fragment>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <Box sx={navBarStyles.box}>
                    <AppBar position="fixed" sx={{bgcolor: '#EEEEEE'}}>
                        <Toolbar id="back-to-top-anchor">
                            <Box
                                component="img"
                                sx={{
                                    fontFamily: 'Book Antiqua',
                                    height: '50px',
                                }}
                                alt="Honeycomb"
                                src="https://cdn-icons-png.flaticon.com/512/5737/5737723.png "
                            />

                            <Typography sx={navBarStyles.logoText}>HiveBuddy</Typography>

                            <Box sx={{ml: 'auto'}}>
                                {mainNavBarItems.map((item, index) => (
                                    <Button key={index} sx={navBarStyles.tabs}
                                            onClick={() => handleRoute(item.route)}>
                                        {item.label}
                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>
            </HideOnScroll>
            <Toolbar/>
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon/>
                </Fab>
            </ScrollTop>
        </React.Fragment>
    )
}

export default Navbar
