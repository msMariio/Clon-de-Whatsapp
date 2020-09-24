import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCUxlmfWoDLtbu0mW8fr7UPQ5AwNOJWOyQ",
    authDomain: "whatsapp-ffe81.firebaseapp.com",
    databaseURL: "https://whatsapp-ffe81.firebaseio.com",
    projectId: "whatsapp-ffe81",
    storageBucket: "whatsapp-ffe81.appspot.com",
    messagingSenderId: "319129546133",
    appId: "1:319129546133:web:b4387282dfba7722751a9c",
    measurementId: "G-7W81L7BKSL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider};
export default db