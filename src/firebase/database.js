import { initializeApp } from 'firebase/app';
import { app } from './config'
import { onAuthStateChanged, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, onValue, set, update, child, get, query, remove, startAfter, limitToFirst, limitToLast, orderByValue, startAt, orderByChild, endAt, endBefore } from "firebase/database";
import { getList, getIndexStorage } from './storage'
// import { getDate, getDayMonthYear, getMonthAndYear } from '../utils/Utils'


const auth = getAuth();
const db = getDatabase(app);

function onAuth(setUserProfile, setUserData, postsIMG, setUserPostsIMG, setUserDate, setUserMonthAndYear, setUserDayMonthYear, monthAndYear) {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserProfile(user)
    } else {
      setUserProfile(user)
    }
  });
}

// ---------------------------Login, Sign Up and Sign In------------------------------------

function signInWithEmail(email, password, setUserProfile, setUserSuccess) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      setUserProfile(user)
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)
    });
}

function handleSignOut() {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

// -------------------------------Firebase Realtime Database------------------------------------

const dbRef = ref(getDatabase());


async function getUserData(setUserData) {

  get(query(ref(db, '/')))
    .then((snapshot) => {
      if (snapshot.exists()) {

        let snap = snapshot.val()
       let ar = Object.entries(snap.services).map((i)=>{
          return {...i[1], uid: i[0]}
        })
      
        const arr = ar.sort(function (a, b) {
           return a.posicion - b.posicion })
        // console.log(arr)
        setUserData({ ...snap, services: arr })
      }
    });
}



function getSpecificData(rute, specificData, setUserSpecificData) {

  let key = rute.split('/').pop()
  get(child(dbRef, `${rute}`)).then((snapshot) => {
    if (snapshot.exists()) {
      let snap = snapshot.val()
      setUserSpecificData({ ...specificData, [key]: snap })
    } else {
      setUserSpecificData({ ...specificData, [key]: { nota: 'en redaccion' } })
    }
  }).catch((error) => {
    console.error(error);
  });
}

function writeUserData(ruteDB, object, setUserData, setUserSuccess) {
  console.log(object)
  update(ref(db, `${ruteDB}`), object)
    .then(() => {
      setUserSuccess !== null ? setUserSuccess('save') : ''
      getUserData(setUserData)
    })
    .catch((e) => console.log(e))
}

function removeData(ruteDB, setUserData, setUserSuccess) {
  remove(ref(db, ruteDB))
    .then(() => {
      getUserData(setUserData)
      setUserSuccess('save')
    })
    .catch(() => setUserSuccess('repeat'));
}

export { onAuth, signInWithEmail, handleSignOut, getUserData, getSpecificData, writeUserData, removeData, }

