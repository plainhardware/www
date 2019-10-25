import React from 'react'
import * as firebase from 'firebase/app'
import config from '../../config/firebase.json'
import 'firebase/auth'

export class Firebase {
    static initialise() {
        return firebase.initializeApp(config)
    }
    static app() {
        return firebase.app()
    }
}
export default Firebase