export const navBarStyles = {
    appBar: {
        fontFamily: 'monospace',
        backgroundColor: 'rgba(241,196,0,0.4)',
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
        fontFamily: 'monospace',
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
    }
}