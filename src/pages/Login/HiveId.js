import React, {useState} from 'react'
import {
    Box,
    Container,
    CssBaseline,
    TextField,
    Typography
} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

// const SOCKET_URL = 'ws://localhost:8080/ws-message';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props} fo>
            {'Copyright © '}
            HiveBuddy
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const HiveId = () => {
    const navigate = useNavigate();
    const [hiveId, setId] = useState("");


    async function handleLogin() {

        try {
            const response = await fetch(`/api/v1/data/login/${hiveId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const contentType = response.headers.get('Content-Type');
            console.log(`Content-Type: ${contentType}`);

            if (response.status === 200 && hiveId === '1') {
                navigate("/login/" + hiveId + "/1");
                console.log(response.status)
                console.log(response);

            } else {
                alert("No HiveId " + hiveId);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Log in
                </Typography>
                <Box component="form" noValidate sx={{mt: 1}}>
                    {/*<Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>*/}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="hiveId"
                        label="Your Hive Id"
                        name="hiveId"
                        autoComplete="hiveId"
                        autoFocus
                        value={hiveId}
                        onChange={(event) => setId(event.target.value)}
                    />
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}

                        onClick={handleLogin}
                    >
                        Log In
                    </Button>
                </Box>
            </Box>
            <Copyright sx={{mt: 8, mb: 4}}/>
        </Container>
    )
}
export default HiveId
