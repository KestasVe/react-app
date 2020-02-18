import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDmG_7D2j9xVOkvDJcVMccn3rNtSow9W-0",
    authDomain: "kv-project-1.firebaseapp.com",
    databaseURL: "https://kv-project-1.firebaseio.com",
    projectId: "kv-project-1",
    storageBucket: "kv-project-1.appspot.com",
    messagingSenderId: "298626473526",
    appId: "1:298626473526:web:7d354a298c8803402c8297",
    measurementId: "G-QWDX804PGM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({timestampsInSnapshots: true});
export default firebase;