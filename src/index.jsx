import React from 'react'
import { render } from 'react-dom'

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import './index.scss'
import App from './app/App';
import theme from './theme';

render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>, document.querySelector('#app'))