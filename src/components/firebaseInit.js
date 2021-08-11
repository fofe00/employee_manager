import firebase from 'firebase'
// import 'firebase/firestore'
import firebaseconfig from './firebaseconfig'

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseconfig)
export default firebaseApp.firestore()
// const userCollection = db.collection('user')
