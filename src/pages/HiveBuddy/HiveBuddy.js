import {useEffect, useState} from 'react';
import {Box, Container, Grow} from "@mui/material";
import {PageStyles} from "../consts/pageStyles";

const HiveBuddy = () => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setChecked(true);
        }, 1000);

        // Cleanup function to clear the timer when the component is unmounted
        return () => clearTimeout(timer);
    }, []); // The empty dependency array ensures that this effect runs only once on component mount

    return (
        <Box sx={PageStyles.boxHiveBuddy}>
            <Box sx={PageStyles.titleBox}>
                <Grow in={checked}>
                    <Container sx={PageStyles.typographyTitles} variant='h5'>
                        What is HiveBuddy?
                    </Container>
                </Grow>
            </Box>
        </Box>
    );
}

export default HiveBuddy;