//This is the config file for Firebase services that we will use

import {initializeApp} from 'firebase/app';
import { getAuth, 
        createUserWithEmailAndPassword, 
        GoogleAuthProvider, 
        GithubAuthProvider, 
        signInWithPopup, 
        onAuthStateChanged, 
        signOut,
        signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, 
         collection,
         addDoc, 
         getDoc,
         deleteDoc,} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)

/*PLAN
- Set up our config file (DONE)

AUTHENTICATION
1. Firebase
- Set up firebase for authentication 
  - Email
  - Github
  - Google

2. Code
- SIGN UP functionality
  - Email/password
    - Form (for both email & password)
    - Sign up button
      - When clicked, change state to "isLoggedIn = true"
      - Redirect to home page
      - Add details to the database
      - These will be the same for Google and Github sign up
  - Google
  - Github

- LOGIN functinality
  - Email/password
  - Google
  - Github

- LOGOUT
  - Log Out button
  - Redirects you to the splash page
  - Changes state to "isLoggedIn = false"

3. Styling 

DATABASE
1. Firestore set up
   - Set up a database
    - Set the location to eu-west3
   - Security rules for authenticated users


2. Title Page (where the user can add something to their picks)
  - Create a function that allows a user to add a pick to the database (using addDoc)
  - Button onClick adds to the database (by running the function we've created)
  - Repeat these steps for and "reviews")

3. My Picks Page (where the user's picks are displayed)
  - Create a function that GETs all of the users picks from the database
  - Create a button that allows the user to delete each pick
  - Add in authentication so that the picks are unique to each user (i.e. the user can only see their own picks)

4. My
  - Create a function that GETs all of the users items from the database
  - Create a button that allows the user to delete each item
  - Add in authentication so that the items are unique to each user (i.e. the user can only see their own item)


4. Reviews (stretch goal)
  - 



*/










