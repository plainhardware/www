import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import App from './app/App';

// if ('serviceWorker' in navigator && process.env.NODE_ENV != 'development') {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/serviceWorker.' + process.env.VERSION + '.js')
//     })
// }
ReactDOM.render(<App />, document.querySelector('#app'))