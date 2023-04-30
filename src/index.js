import { CssBaseline, ThemeProvider } from '@mui/material';
import { App } from 'components/App';
import theme from 'muiTheme/theme';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router basename="/MedDoc-front">
                        <App />
                    </Router>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
