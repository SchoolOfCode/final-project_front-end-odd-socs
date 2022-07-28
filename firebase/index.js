import {initializeApp} from 'firebase';
import {getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, EmailAuthProvider} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const login =

const [user, loading, error] = useAuthState(auth);









