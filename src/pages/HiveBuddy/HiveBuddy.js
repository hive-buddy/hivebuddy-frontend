import {useEffect, useState} from 'react'
import {Box, Container, Grow, Typography} from "@mui/material";
import {PageStyles} from "../consts/pageStyles";

const SOCKET_URL = 'http://localhost:8080/ws-message';


const HiveBuddy = () => {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setChecked(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Box sx={PageStyles.boxHiveBuddy}>
            <Box sx={PageStyles.titleBox}>
                <Grow in={checked}>
                    <Container className="font-face-gm" sx={PageStyles.typographyTitles} variant='h5'>
                        What is HiveBuddy?
                    </Container>
                </Grow>
            </Box>
        </Box>
    )
}

export default HiveBuddy
