// firebaseConfig.js
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZWynlMCRg4rdKwfgPbkMEpUP4EAczOUY",
  authDomain: "travelmantics-8c873.firebaseapp.com",
  databaseURL: "https://travelmantics-8c873.firebaseio.com",
  projectId: "travelmantics-8c873",
  storageBucket: "travelmantics-8c873.appspot.com",
  messagingSenderId: "882491922933",
  appId: "1:882491922933:web:4a21d9935cfb9084cae8bc",
  measurementId: "G-YMGRPGHYM8",
};

const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

const auth = getAuth(firebaseApp);

export { firebaseApp, auth };
