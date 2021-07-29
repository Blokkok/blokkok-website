const firebaseConfig = {
  apiKey: "AIzaSyC5i-h_cKrptVxv0fOCc4lNH1rfVQfh1pw",
  authDomain: "blokkok-3ded8.firebaseapp.com",
  projectId: "blokkok-3ded8",
  storageBucket: "blokkok-3ded8.appspot.com",
  messagingSenderId: "171826471818",
  appId: "1:171826471818:web:a3132c252ff43f7ddf5e73",
  measurementId: "G-YHNZCDZG6H"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

/* ---------------------------------------------------------- */

const db = firebase.firestore();