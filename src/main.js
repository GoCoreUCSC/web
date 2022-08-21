import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import '@fortawesome/fontawesome-free/js/all.js';
import "@fortawesome/fontawesome-free/css/all.css"; 

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// // import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyC8P8DO81a_NbOU5qxL-2Jst1i6HoJwgT4",
//   authDomain: "gocore-6873c.firebaseapp.com",
//   projectId: "gocore-6873c",
//   storageBucket: "gocore-6873c.appspot.com",
//   messagingSenderId: "1087670929534",
//   appId: "1:1087670929534:web:9bd2c04e15dacd10ac302f",
//   measurementId: "G-GT1883S0BG"
// };

// // Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };







createApp(App).use(router).mount('#app')

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App)

.mount('#app')