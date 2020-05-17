import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAxWSA2Cqv7QQ_dg7QuvZe9OAifNeH-tek",
    authDomain: "janelle-clothingsdb.firebaseapp.com",
    databaseURL: "https://janelle-clothingsdb.firebaseio.com",
    projectId: "janelle-clothingsdb",
    storageBucket: "janelle-clothingsdb.appspot.com",
    messagingSenderId: "435580688727",
    appId: "1:435580688727:web:73f5cb7ab0d4163d410612",
    measurementId: "G-8FNXT6PT0Z"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase



