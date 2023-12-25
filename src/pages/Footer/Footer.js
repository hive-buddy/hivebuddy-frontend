import React from 'react';
import {makeStyles} from '@mui/styles';
import {Container, Typography} from '@mui/material';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#6FB2D2",
        padding: '5px'
    },
    text: {
        fontFamily: 'Book Antiqua',
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="body2" color="black" align="center"  className={classes.text}>
                    © {new Date().getFullYear()} HiveBuddy
                </Typography>
                <Typography variant="body2" color="black" align="center"  className={classes.text}>
                    Powered by Bees
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
