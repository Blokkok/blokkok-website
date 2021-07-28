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

document.addEventListener('scroll', function(e) {
  console.log(window.scrollY);

  if(window.scrollY <= 30) {
    document.querySelector('.navbar').setAttribute('style', 'box-shadow: none; background-color: #00aa58; transition: 300ms;');
    document.querySelector('.navbar').setAttribute('class', 'navbar navbar-expand-lg navbar-dark fixed-top');
  } else {
    document.querySelector('.navbar').setAttribute('style', 'background-color: #fff; transition: 300ms;');
    document.querySelector('.navbar').setAttribute('class', 'navbar navbar-expand-lg navbar-light fixed-top');
  }
});
