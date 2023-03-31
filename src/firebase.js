import firebase from 'firebase'
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyAZ3W4dFLHgqv-_UUS1h6t22_WDOY9gid4",
    authDomain: "netflix-clone-d0f27.firebaseapp.com",
    projectId: "netflix-clone-d0f27",
    storageBucket: "netflix-clone-d0f27.appspot.com",
    messagingSenderId: "728516235200",
    appId: "1:728516235200:web:9c2b8447c1f9fdb099c225"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
   export { auth };
   export default db;