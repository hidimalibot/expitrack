import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseconfig = {
    apiKey: "AIzaSyDpA3_q-wsiRC6YfJk7JooA2Pf1KAWf4EU",
    authDomain: "expitrack-93d85.firebaseapp.com",
    projectId: "expitrack-93d85",
    storageBucket: "expitrack-93d85.appspot.com",
    messagingSenderId: "1078019747570",
    appId: "1:1078019747570:web:8c6a0af9bebaa2848d6a6b",
    measurementId: "G-CKY79YW0Y5"
};
if (!firebase.apps.length)(
    firebase.initializeApp(firebaseconfig)

)
export { firebase };