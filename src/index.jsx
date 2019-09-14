import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import App from './app/App';

ReactDOM.render(<App />, document.querySelector('#app'))

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/serviceWorker.' + process.env.VERSION + '.js')
//     })
// }
let currentUser = undefined
let db = undefined

document.addEventListener('DOMContentLoaded', () => {
    try {
        let app = firebase.app(process.env.SHORT_NAME)
        // Initialize Cloud Firestore through Firebase
        db = app.firestore();

        let features = ['auth', 'database', 'messaging', 'storage', 'firestore'].filter(feature => typeof app[feature] === 'function');
        console.log("Firebase SDK loaded with " + features.join(', '));
    } catch (e) {
        console.error(e);
        document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
})