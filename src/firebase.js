import firebase from 'firebase/compat/app'

import "firebase/compat/firestore";
require('firebase/compat/auth')
require('firebase/compat/storage')

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyB-MIAU487I3kQq-_ZqJgjmD-PTKvl-7iI",
    authDomain: "gcoea-instagram.firebaseapp.com",
    projectId: "gcoea-instagram",
    storageBucket: "gcoea-instagram.appspot.com",
    messagingSenderId: "735513190654",
    appId: "1:735513190654:web:fa7fdc1874278db00205af",
    measurementId: "G-T402T918XT"
  });

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();
 
  export{ db, auth, storage };
