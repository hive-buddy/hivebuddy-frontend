import React, {useEffect, useState} from 'react';
import {
    Box,
    Container,
    Grow,
    Typography,
} from '@mui/material';
import {PageStyles} from '../consts/pageStyles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const arduinoImg = (
    <Box
        component="img"
        src="https://cdn-icons-png.flaticon.com/512/9213/9213479.png"
        sx={{
            width: 80,
            height: 80,
            margin: '15px',
        }}
    />
);
const cloudImg = (
    <Box
        component="img"
        src="   https://cdn-icons-png.flaticon.com/512/2821/2821656.png "
        sx={{
            width: 80,
            height: 80,
            margin: '15px',
        }}
    />
);
const userImg = (
    <Box
        component="img"
        src="   https://cdn-icons-png.flaticon.com/512/1722/1722934.png  "
        sx={{
            width: 60,
            height: 60,
            margin: '15px',
        }}
    />
);
const HiveBuddyDesc = () => {
    const [checked, setChecked] = useState(false);


    const generateIcons = () => {
        const icons = [
            { icon: arduinoImg, label: 'Arduino' },
            { icon: cloudImg, label: 'Cloud' },
            { icon: userImg, label: 'User' },
        ];

        const arrowIcon = (
            <Grow in={checked} style={{ transformOrigin: '0 0 0' }}>
                <ArrowForwardIcon
                    sx={{
                        width: 30,
                        height: 30,
                        margin: '0 10px',
                    }}
                />
            </Grow>
        );

        const iconsWithArrows = icons.reduce(
            (acc, { icon, label }, index) =>
                index === icons.length - 1
                    ? [...acc, icon]
                    : [...acc, icon, arrowIcon],
            []
        );

        return iconsWithArrows.map((item, index) => (
            <Grow
                key={index}
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: (index + 1) * 1000 } : {})}
            >
                {item}
            </Grow>
        ));
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;

            if (scrollY > 200) {
                setChecked(true);
            } else {
                setChecked(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to run the effect only once on mount

    return (
        <Container sx={PageStyles.descContainer}>
            <Typography
                sx={{
                    fontFamily: 'Book Antiqua',
                    textAlign: 'center',
                }}
                variant="h5"
            >
                HiveBuddy is a project that focused on optimizing beekeepers work by
                collecting and processing data like temperature, humidity, and noise
                level. Enhanced with Arduino sensors that allow beekeepers to get
                real-time reports about their hives' condition.
            </Typography>
            <Box sx={{ height: 70, display: 'flex', alignItems: 'center', mt:'20px' }}>
                {generateIcons()}
            </Box>
        </Container>
    );
};

export default HiveBuddyDesc;

