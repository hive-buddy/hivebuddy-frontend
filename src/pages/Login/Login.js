import React from 'react'
import {Button, Container} from "@mui/material";
import {PageStyles} from "../consts/pageStyles";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

    const navigateToHiveID = () => {
        navigate('/HiveId');
    };
    return (
        <Container sx={PageStyles.container}>
            Already have an our device?
            <Button onClick={navigateToHiveID}>Log in</Button>
        </Container>
    )
}
export default Login
