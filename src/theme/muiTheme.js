import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    shape: {
        borderRadius: 16
    },
    palette: {
        primary: {
            main: '#0756A5'
        },
        secondary: {
            main: '#2AA2CE'
        },
        text: {
            main: '#000000',
            secondary: '#666666',
            light: '#FFFFFF'
        },
    },
    components: {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: '32px'
                }
            }
        },
    },
    typography: {
        h1: {
            fontFamily: 'Roboto',
            fontWeight: 300
        },
        h2: {
            fontFamily: 'Roboto',
            fontWeight: 300
        },
        h3: {
            fontFamily: 'Roboto',
            fontWeight: 300
        },
        h4: {
            fontFamily: 'Roboto',
            fontWeight: 300
        },
        h5: {
            fontFamily: 'Roboto',
            fontWeight: 300
        },
        h6: {
            fontFamily: 'Roboto',
            fontWeight: 300
        },
        subtitle1: {
            fontFamily: 'Roboto',
            fontWeight: 500
        },
        subtitle2: {
            fontFamily: 'Roboto',
            fontWeight: 300
        },
        body1: {
            fontFamily: 'Montserrat',
            fontWeight: 400
        },
        body2: {
            fontFamily: 'Montserrat',
            fontWeight: 400
        },
        button: {
            fontFamily: 'Montserrat',
            fontWeight: 300,
            textTransform: 'none'
        },
        caption: {
            fontFamily: 'Montserrat',
            fontWeight: 400
        },
        overline: {
            fontFamily: 'Montserrat',
            fontWeight: 400
        }
    }
});