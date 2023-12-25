import React from 'react'
import {Button, Container, Typography} from "@mui/material";
import {PageStyles} from "../consts/pageStyles";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

    const navigateToHiveID = () => {
        navigate('/HiveId');
    };
    return (
        <Container style={{
            background: '#EEEEEE',
            height: '40vh',
            flexDirection: 'column',
            fontSize: '30px'
        }} sx={PageStyles.container}>
            <Typography variant='h4' sx={{...PageStyles.typographyTitlesHighlight, color: 'black'}}>
                Already have our device?
            </Typography>
           <Typography variant='h5'  sx={{...PageStyles.titleLogIn}}> Then click on the button below to login into your account
               <strong> with your hive id!</strong></Typography>

            <Button variant="outlined" size="small"
                    onClick={navigateToHiveID}
                    sx={{...PageStyles.buttonLog}}>
                <Typography>Log in</Typography>
            </Button>
        </Container>
    )
}
export default Login
