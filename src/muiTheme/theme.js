import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 375,
            md: 768,
            lg: 1440,
        },
    },
    palette: {
        primary: {
            main: '#477577',
            light: '#68c494',
            dark: '#0f3937',
            linear: 'linear-gradient(253.01deg, #68c494 -56.38%, #477577 105.61%, #31496d 274.54%)',
        },
        secondary: {
            main: '#f3672b',
            light: '#fc7b43',
        },
        background: {
            main: '#ffffff',
            card: '#fafafa',
            badge: '#edf5f5',
            star: '#d9d9d9',
            starFilled: '#ffc531',
        },
        text: {
            black: '#111111',
            gray: '#484f5c',
            white: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 1.166,
        subtitle1: {
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: 1.333,
            marginBottom: '16px',
        },
        body1: {
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: 1.428,
        },
        // button: {
        //     fontWeight: 600,
        //     fontSize: '14px',
        //     lineHeight: 1.428,
        // },
    },
    spacing: 8,
});

export default theme;
