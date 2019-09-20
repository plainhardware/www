import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import App from './app/App';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import config from '../config/firebase.json'

ReactDOM.render(<App />, document.querySelector('#app'))

if ('serviceWorker' in navigator && process.env.NODE_ENV != 'development') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/serviceWorker.' + process.env.VERSION + '.js')
    })
}
let currentUser = undefined
let db = undefined
document.addEventListener('DOMContentLoaded', () => {
    try {
        let app = firebase.initializeApp(config, process.env.SHORT_NAME)
        app.auth().signInAnonymously().catch((error) => console.log(error))
        let features = ['auth', 'database', 'messaging', 'storage', 'firestore'].filter(feature => typeof app[feature] === 'function');
        console.log("Firebase SDK loaded with " + features.join(', '));
    } catch (e) {
        console.error(e);
        document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
})