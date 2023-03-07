import React from 'react';

import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { UserProvider } from './Context/User.context';
import Toast from './components/Toast';
import { themes } from './themes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={themes}>
            <UserProvider>
                <App />
                <Toast />
            </UserProvider>
        </ThemeProvider>
    </React.StrictMode>
);
