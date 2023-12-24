export const PageStyles = {
    // HiveBuddy page
    boxHiveBuddy: {
        height: '100vh',
        backgroundImage: `url("https://images.pexels.com/photos/63641/bee-in-the-approach-bee-apis-pollen-63641.jpeg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    typographyTitles: {
        fontSize: '3.5rem',
        fontWeight: 'bold',
        margin: '16px 0',
        '@media (max-width: 600px)': {
            fontSize: '2rem', // Adjust font size for smaller screens
        },
        color: '#ffffff',
        textAlign: 'center',
        //fontFamily: 'Ubuntu'
    },
    descContainer:{
        color: '#c76c13',
        background: 'rgb(243,224,157)',
        padding:'0 5em 0 5em;',
        fontSize: '1.4rem',
        height: '60vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        '@media (min-width: 1200px)': {
            maxWidth: 'initial',
        },
        '@media (min-width: 600px)': {
            padding: '0 5em 0 5em;'
        }
    },

    // Team Page
    container: {
        color: '#030000',
        fontSize: '1.5rem',
        // height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (min-width: 1200px)': {
            maxWidth: 'initial',
        },
    },

    containerImage: {
        color: '#030000',
        fontSize: '1.5rem',
        height: '100vh',
        '@media (min-width: 1200px)': {
            maxWidth: 'initial',
        },
    },
    // General
    typographyTitlesHighlight: {
        fontSize: '3rem',
        fontWeight: 'bold',
        margin: '1em 0 1em 0',
        '@media (max-width: 600px)': {
            fontSize: '2rem', // Adjust font size for smaller screens
        },
        color: '#D4AC0D',
        textAlign: 'center',
        '@media (min-width: 1200px)': {
            maxWidth: 'initial',
        },
    },
    titleBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.5)',

    },
    imageList: {
        width: '150vh',
        height: '95vh',
        justifyContent: 'center',
        alignItems: 'canter',
        minHeight: '100vh',
        margin: '0 auto',
    },
    //Dashboard Page
    boxDashboard: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
    },
    raise: {
        '&:hover, &:focus': {
            boxShadow: '0 0.5em 0.5em -0.4em var(--hover)',
            transform: 'translateY(-0.25em)',
        },
    },
}


