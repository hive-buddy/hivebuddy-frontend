import React from 'react'
import {Box, Container} from "@mui/material";
import {PageStyles} from "../consts/pageStyles";

const HiveBuddyDesc = () => {

    return (
        <Container className="font-face-gm" sx={PageStyles.descContainer}>
            <p style={{fontSize: '25px', marginBottom:'1em', fontWeight:'bold', textTransform: 'uppercase'}}>HiveBuddy is a project that focused on optimizing beekeepers work</p> by
            collecting and processing data like <strong style={{marginLeft: '6px', color:'#905111'}}> temperature, humidity and noise level.</strong>
            Enhanced with Arduino sensors that allows beekeepers
            to get <strong style={{marginLeft: '6px', color:'#905111'}}> real-time report about their hives condition.</strong>
        </Container>
    )
}
export default HiveBuddyDesc
