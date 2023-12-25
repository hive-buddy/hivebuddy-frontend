import React, {useState} from 'react'
import {
    Box,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import Button from "@mui/material/Button";

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
    const [id, setId] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            hiveId: data.get('hiveId'),
        });
    };
    const handleLogin = async () => {
        try {
            const response = await fetch('/api/v1/data/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ hiveId: id }),
            });

            if (response.ok) {
                // TODO: handle successful login, navigate to the user's home page
            } else {
                alert("Unauthorized login")
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };
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
                <Box component="form" onSubmit={handleLogin} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="hiveId"
                        label="Your Hive Id"
                        name="hiveId"
                        autoComplete="hiveId"
                        autoFocus
                        value={id}
                        onChange={(event) => setId(event.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
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
