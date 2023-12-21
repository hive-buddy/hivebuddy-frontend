import React from 'react'
import itemData from './const/imageList'
import {Container, Typography, Grid, Card, CardMedia, CardContent, ThemeProvider} from "@mui/material";
import {PageStyles} from "../consts/pageStyles";
import {theme} from '../consts/themes'

const SOCKET_URL = 'http://localhost:8080/ws-message';


const Team = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container sx={PageStyles.containerImage}>
                <Typography variant="h4" align="center" gutterBottom
                            sx={{...PageStyles.typographyTitlesHighlight, fontFamily: 'Ubuntu'}}>
                    Our team
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    {itemData.map((item) => (
                        <Grid item key={item.img}>
                            <Card sx={{maxWidth: 300}}>
                                <CardMedia
                                    component="img"
                                    image={`${item.img}?fit=crop&w=300&max-h=300`}
                                    alt={item.title}
                                    loading="lazy"
                                    sx={{ height: 300 }}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.author}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </ThemeProvider>
    )
}
export default Team
