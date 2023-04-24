import { createTheme } from '@mui/material/styles';

const COLOR = {
    green: '#477577',
    darkGreen: '#0f3937',
    lightGreen: '#68c494',
    linearGreen: 'linear-gradient(253.01deg, #68c494 -56.38%, #477577 105.61%, #31496d 274.54%)',
    orange: '#f3672b',
    lightOrange: '#fc7b43',
    white: '#FFFFFF',
    gray: '#484f5c',
    lightGray: '#fafafa',
    black: '#111111',
    lightBlue: '#edf5f5',
};

const theme = createTheme({
    breakpoints: {
        values: {
            sm: 375,
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
        button: {
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: 1.428,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'contained' &&
                        ownerState.color === 'secondary' && {
                            backgroundColor: COLOR.lightOrange,
                            color: COLOR.white,
                            fontWeight: 600,
                            fontSize: 12,
                            lineHeight: 1.16,
                            textTransform: 'uppercase',
                            padding: '13px 32px',
                            borderRadius: '12px',
                            textAlign: 'center',

                            '&:hover': {
                                backgroundColor: COLOR.orange,
                            },
                            '&:focus': {
                                backgroundColor: COLOR.orange,
                                boxShadow: '0px 4px 8px rgba(17, 17, 17, 0.15)',
                            },
                        }),
                    ...(ownerState.variant === 'outlined' &&
                        ownerState.color === 'primary' && {
                            border: '1px solid rgba(71, 117, 119, 0.3)',
                            color: COLOR.green,
                            fontWeight: 600,
                            fontSize: 12,
                            lineHeight: 1.16,
                            textTransform: 'uppercase',
                            padding: '16px 32px',
                            borderRadius: '12px',
                            textAlign: 'center',

                            '&:hover': {
                                backgroundColor: COLOR.darkGreen,
                            },
                            '&:focus': {
                                backgroundColor: COLOR.darkGreen,
                                boxShadow: '0px 4px 8px rgba(17, 17, 17, 0.15)',
                            },
                        }),
                }),
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'standard' &&
                        ownerState.color === 'primary' && {
                            fontSize: '14px',
                            lineHeight: 1.16,
                        }),
                }),
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'standard' &&
                        ownerState.color === 'primary' && {
                            fontSize: 12,
                            lineHeight: 1.16,
                            fontWeight: 700,
                            marginBottom: '8px',
                            color: COLOR.black,
                        }),
                }),
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'standard' &&
                        ownerState.color === 'primary' && {
                            fontSize: 14,
                            lineHeight: 1.28,
                            fontWeight: 400,
                            borderRadius: '8px',
                            border: `1px solid rgba(17, 17, 17, 0.1)`,
                            padding: '14px 18px',

                            '&:focus': {
                                border: `1px solid ${COLOR.black}`,
                            },
                        }),
                }),
            },
        },
    },
    spacing: 8,
});

export default theme;
