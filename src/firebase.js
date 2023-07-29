import firebase from 'firebase/app'

import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCainUxusRvtfzDqvmEsj1eg4pZxUy2Cxs",
    authDomain: "datastore-3e515.firebaseapp.com",
    databaseURL: "https://datastore-3e515-default-rtdb.firebaseio.com",
    projectId: "datastore-3e515",
    storageBucket: "datastore-3e515.appspot.com",
    messagingSenderId: "403729414552",
    appId: "1:403729414552:web:b866a62444d7194616d3ed",
    measurementId: "G-Y3ESQV3XRW"
  };
  
  firebase.initializeApp(firebaseConfig);

export default firebase;