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
                <Container className="font-face-gm" variant="h4" align="center" gutterBottom
                            sx={{...PageStyles.typographyTitlesHighlight}}>
                    Our team
                </Container>
                <Grid container spacing={3} justifyContent="center">
                    {itemData.map((item) => (
                        <Grid item key={item.img} sx={{padding: '2.5em 2.5em 0 0', elevation: '20'}}>
                            <Card sx={{maxWidth: 300}}>
                                <CardMedia
                                    component="img"
                                    image={`${item.img}?fit=crop&w=300&max-h=300`}
                                    alt={item.title}
                                    loading="lazy"
                                    sx={{ height: 300, background: '#f3f3f3' }}
                                />
                                <CardContent sx={{background: '#eaeaea' }}>
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
