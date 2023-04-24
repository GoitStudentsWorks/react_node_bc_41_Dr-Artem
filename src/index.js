import { CssBaseline, ThemeProvider } from '@mui/material';
import { App } from 'components/App';
import theme from 'muiTheme/theme';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <Router basename="/MedDoc-front">
            <App />
        </ThemeProvider>
          </Router>
    </React.StrictMode>
);
