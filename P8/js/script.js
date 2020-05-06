
var firebaseConfig = {
  apiKey: "AIzaSyBPDZ6sQbktiTL4dgrk_hbTkRfOlb0adbI",
  authDomain: "uya-2020.firebaseapp.com",
  databaseURL: "https://uya-2020.firebaseio.com",
  projectId: "uya-2020",
  storageBucket: "uya-2020.appspot.com",
  messagingSenderId: "933742841092",
  appId: "1:933742841092:web:225418055e142c00a55451",
  measurementId: "G-WS8S8QLZ55"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

document.querySelector("#login").onclick = () => {
  console.log("login");
}


document.querySelector("#singup").onclick = () => {
  const n = document.querySelector("#first_name").value;
  const ln = document.querySelector("#last_name").value;
  const e = document.querySelector("#email_sub").value;
  const pw = document.querySelector("#password_sub").value;

  const expreg = /\./g;

  database.ref(e.replace(expreg, "-")).once('value', snapshot => {
    if (snapshot.val() === null) {
      database.ref(e.replace(expreg, "-")).set({
        name: n,
        last_name: ln,
        password: pw
      });
      alert("User registered");
    }
    else
      alert("User already exist");
  })
}

document.querySelector("#login").onclick = () => {
  const e = document.querySelector("#email").value;
  const pw = document.querySelector("#password").value;

  const expreg = /\./g;

  database.ref(e.replace(expreg, '-')).on('value', snapshot => {
    if (pw == snapshot.val().password)
      alert("Login");
    else
      alert("Bad password");
  });
}

//--------------------------------------------------------------
// Parte de Materialize
//hamburguer menu
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

//carousel
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var options = {
    'duration': 200,
    'indicators': true,
    'fullWidth': true
  }
  var instances = M.Carousel.init(elems, options);
});

//collapsables
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});