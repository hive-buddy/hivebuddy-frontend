import React from 'react'
import {Container} from "@mui/material";
import {PageStyles} from "../consts/pageStyles";

const HiveBuddyDesc = () => {

    return (
        <Container sx={PageStyles.container}>
            HiveBuddy is a project that focused on optimizing beekeepers work by
            collecting and processing data like temperature, humidity and noise level.
            Enhanced with Arduino sensors that allows beekeepers
            to get real-time report about their hives well-being.
        </Container>
    )
}
export default HiveBuddyDesc
