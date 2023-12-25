import React from 'react'
import {Box, Container, FormControlLabel, Grow, Paper, Switch, Typography} from "@mui/material";
import {PageStyles} from "../consts/pageStyles";
//TODO: Add stepper mui, make animation on scroll

const icon = (

    <Box
        component="img"
        src="https://cdn-icons-png.flaticon.com/512/549/549582.png "
        sx={{
            width: 50,
            height: 50,
            margin: '5px',
        }}
    />
);

const HiveBuddyDesc = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    const generateIcons = () => {
        return [1000, 2000, 3000].map((timeout, index) => (
            <Grow
                key={index}
                in={checked}
                style={{transformOrigin: '0 0 0'}}
                {...(checked ? {timeout} : {})}
            >
                {icon}
            </Grow>
        ));
    };

    return (
        <Container sx={PageStyles.descContainer}>
            <Typography sx={{
                fontFamily: 'Book Antiqua', textAlign: 'center',
            }} variant='h5'>
                HiveBuddy is a project that focused on optimizing beekeepers work by
                collecting and processing data like temperature,
                humidity and noise level. Enhanced with Arduino sensors that allows beekeepers
                to get real-time report about their hives
                condition.</Typography>
            <Box sx={{height: 70, display: 'flex', alignItems: 'center'}}>
                <Typography sx={{
                    fontFamily: 'Book Antiqua',
                    color: '#6FB2D2',
                    fontWeight: 'bold'
                }} variant="h5">Bees</Typography>
                <Switch checked={checked} onChange={handleChange}/>
                {generateIcons()}
            </Box>
        </Container>
    )
}
export default HiveBuddyDesc
