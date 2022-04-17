import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC9F_CuVOZtI2V3U8JYaAnmQ5Khl-wMLY",
  authDomain: "auth-faba5.firebaseapp.com",
  projectId: "auth-faba5",
  storageBucket: "auth-faba5.appspot.com",
  messagingSenderId: "91526740140",
  appId: "1:91526740140:web:23688be02d43bff5ba8709",
  measurementId: "G-2M3J0DCCQD",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);

export default FirebaseApp;
