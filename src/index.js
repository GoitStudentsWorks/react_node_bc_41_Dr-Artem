import { CssBaseline, ThemeProvider } from '@mui/material';
import { App } from 'components/App';
import theme from 'muiTheme/theme';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
