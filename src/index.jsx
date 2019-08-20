import React from 'react'
import { render } from 'react-dom'

import "normalize-scss/sass/normalize/_import-now.scss";
import './index.scss'
import App from './app';

render(<App />, document.getElementById('app'))