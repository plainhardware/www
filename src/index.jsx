import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import App from './app/App';

console.log("Booting", (new Date).getTime());
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        console.log('Ready', (new Date).getTime())
        navigator.serviceWorker.register('/serviceWorker.' + process.env.VERSION + '.js')
            .then((registration) => {
                console.log('Registered', registration.scope)
            }).catch((err) => {
                console.log('Error Registering', err)
            })
    })
}
ReactDOM.render(<App />, document.querySelector('#app'))