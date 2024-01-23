import {spacing} from "@mui/system";

export const navBarStyles = {
    box: {
        flexGrow: 1,
    },
    logoText: {
        color: 'black',
        fontFamily: 'Book Antiqua',
        fontWeight: 'bold',
        fontSize: '2rem',
    },

    tabs: {
        color: 'black',
        fontSize: '1rem',
        fontFamily: 'Book Antiqua',
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
