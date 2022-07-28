import {useContext, createContext, useEffect, useState} from 'react';
import {
        GoogleAuthProvider,
        EmailAuthProvider,
        GithubAuthProvider,
        signInWithPopup,
        onAuthStateChanged,
    } from 'firebase/auth';
import { auth } from '../firebase/index';

const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});

    const googleSignIn = () => {
        const providerGoogle = new GoogleAuthProvider();
        signInWithPopup(auth, providerGoogle);
    };

    const githubSignIn = () => {
        const providerGitHub = new GithubAuthProvider(); 
        signInWithPopup(auth, providerGitHub);
    };

    const emailSignIn = () => {
        const providerEmail = new EmailAuthProvider();
        signInWithPopup(auth, providerEmail);
    };
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }
    , []);
    return (
        <AuthContext.Provider value={{user, googleSignIn, githubSignIn, emailSignIn}}>
            {children}
        </AuthContext.Provider>
    );
}

export const UserAuth = () => { useContext(AuthContext);
};