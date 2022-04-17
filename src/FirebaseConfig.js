import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIyXFJ5vyo_sDeXvAPmSl5T3bCh_wFaC4",
  authDomain: "zairzest-2022.firebaseapp.com",
  projectId: "zairzest-2022",
  storageBucket: "zairzest-2022.appspot.com",
  messagingSenderId: "476237410938",
  appId: "1:476237410938:web:89daed233b37cf97e041c3",
  measurementId: "G-VHVVDBJHEH",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);

export default FirebaseApp;
