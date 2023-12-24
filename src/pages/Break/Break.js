import React from 'react'
import {Box, Container} from "@mui/material";
import {PageStyles} from "../consts/pageStyles";
import backgroundImage from "../Process/img/honeybee.webp"

const Break = () => {
    return(
        <Container sx={PageStyles.container}>
            <Box sx={photo.bee} style={{margin:'10em'}}></Box>
        </Container>
    )
}

export default Break;

export const photo = {
    // HiveBuddy page
    bee: {
        height: '500px',
        width: '500px',
        backgroundImage: `url(${backgroundImage})`,
    },
}