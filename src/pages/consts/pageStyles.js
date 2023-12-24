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
    // Team Page
    container: {
        color: '#030000',
        fontSize: '1.5rem',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerImage: {
        color: '#030000',
        fontSize: '1.5rem',
        height: '100vh',

    },
    // General
    typographyTitlesHighlight: {
        fontSize: '3rem',
        fontWeight: 'bold',
        margin: '16px 0',
        '@media (max-width: 600px)': {
            fontSize: '2rem', // Adjust font size for smaller screens
        },
        color: '#D4AC0D',
        textAlign: 'center',

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


