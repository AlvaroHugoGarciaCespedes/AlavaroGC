import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC72v1JaQpSp-l6VGq8gMl2_5KJuuyq62g",
  authDomain: "abogados-servicios.firebaseapp.com",
  databaseURL: "https://abogados-servicios-default-rtdb.firebaseio.com",
  projectId: "abogados-servicios",
  storageBucket: "abogados-servicios.appspot.com",
  messagingSenderId: "1079160805835",
  appId: "1:1079160805835:web:afc20a22568b3d09d27e4e"
};

export const app = initializeApp(firebaseConfig);
