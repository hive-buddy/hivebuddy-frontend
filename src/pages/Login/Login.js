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
        <Container style={{background:'grey', height:'40vh', flexDirection:'column', fontSize:'30px'}} className="font-face-gm" sx={PageStyles.container}>
            Already have our device?
            <Container style={{color:'#f1c400',marginTop:'1em', flexDirection:'column'}} className="font-face-gm" sx={PageStyles.container}>
                Then click on the button below to login into your account
                <strong>with personal hive information!</strong>
            </Container>
            <Button style={{marginTop:'1em'}} variant="outlined" size="medium" sx={PageStyles.container} onClick={navigateToHiveID}>Log in</Button>
        </Container>
    )
}
export default Login
