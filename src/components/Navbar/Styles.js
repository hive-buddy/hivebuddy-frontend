import {spacing} from "@mui/system";

export const navBarStyles = {
    appBar: {
        fontFamily: 'Book Antiqua',
        backgroundColor: '#EEEEEE',
        height: '80px',
        '@media (max-width: 600px)': {
            height: '60px',
        },
    },
    box: {
        flexGrow: 1,
    },
    logoText: {
        color: 'black',
        fontFamily: 'Book Antiqua',
        fontWeight: 'bold',
        fontSize: '2rem',
        mt: '10px',
        ml: '10px',
        '@media (max-width: 600px)': {
            fontSize: '20px',
        },

    },
    tabCentering: {
        ml: '120px',
        mt: '10px',
    },
    tabs: {
        color: 'black',
        fontSize: '1rem',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: '2rem',
        '@media (max-width: 600px)': {
            fontSize: '20px',
        },
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
    },
}
