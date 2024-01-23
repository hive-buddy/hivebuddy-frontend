import React from 'react'
import itemData from './const/imageList'
import {Container, Typography, Grid, Card, CardMedia, CardContent, ThemeProvider} from "@mui/material";
import {PageStyles} from "../consts/pageStyles";
import {theme} from '../consts/themes'


const Team = () => {

    return (
        <Container sx={PageStyles.containerImage}>
            <Typography  variant="h2" align="center" gutterBottom
                       sx={{...PageStyles.typographyTitlesHighlight}}>
                Our team
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {itemData.map((item) => (
                    <Grid item key={item.img} sx={{padding: '2em 2em 0 0', elevation: '10'}}>
                        <Card sx={{maxWidth: 300}}>
                            <CardMedia
                                component="img"
                                image={`${item.img}?fit=crop&w=200&max-h=200`}
                                alt={item.title}
                                loading="lazy"
                                sx={{height: 250, background: '#f3f3f3'}}
                            />
                            <CardContent sx={{background: '#EEEEEE'}}>
                                <Typography variant="h6" component="div" sx={{fontFamily: 'Book Antiqua',}}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{fontFamily: 'Book Antiqua',}}>
                                    {item.author}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
export default Team
