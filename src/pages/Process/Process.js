import React from 'react'
import {Box, Container, ImageList, ImageListItem} from "@mui/material";
import {PageStyles} from "../consts/pageStyles";
import processPhoto from "../Process/const/processPhoto";
// import ScrollAnimation from 'react-animate-on-scroll'
const SOCKET_URL = 'http://localhost:8080/ws-message';

const Process = () => {
    return (
        <Container>
            <Container className="font-face-gm" variant="h4" align="center" gutterBottom
                       sx={{...PageStyles.typographyTitlesHighlight}} style={{margin: '3em 0 -3em 0'}}>
                Our project path
            </Container>
        <Container sx={PageStyles.container}>
        <Box sx={{ width: 1000, height: 1401, marginTop:30}}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {processPhoto.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
        </Container>
        </Container>
    )
}
export default Process
