import firebase from "firebase/app";
import {initializeApp} from "firebase/app";


const clientCredentials = {
  apiKey: process.env.FBAPIKEY,
  authDomain: process.env.FBAUTHDOMAIN,
  projectId: process.env.FBPROJECTID,
  storageBucket: process.env.FBSTORAGEBUCKET,
  messagingSenderId: process.env.FBSENDERID,
  appId: process.env.FBAPPID,
  measurementId: process.env.FBMEASUREMENTID,
};


if (!initializeApp(clientCredentials).length) {
  initializeApp(clientCredentials);
}

export default firebase;