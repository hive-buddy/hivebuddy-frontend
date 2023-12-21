import React from 'react'
import {Button, Container} from "@mui/material";
import {PageStyles} from "../consts/pageStyles";
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Container sx={PageStyles.container}>
            Already have an our device?
            <Button>Log in</Button>
        </Container>
    )
}
export default Login
