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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  
  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}



export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase



