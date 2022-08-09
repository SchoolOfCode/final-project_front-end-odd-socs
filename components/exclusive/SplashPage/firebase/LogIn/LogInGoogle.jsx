// Log in with Google component

import { GoogleLoginButton } from 'react-social-login-buttons';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from "../../../../../firebase/config";
import { useRouter } from 'next/router';

//Logic:
// creating a new GoogleAuthProvider 
// creating a handleLogin function that will be called when the button is clicked
// calling signInWithPopup with the auth and googleProvider
// then using the result to console log the result
// then using the router to redirect to the home page



const LogInGoogle = () => {
    const router = useRouter();
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = async () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        console.log(result);
        router.push('/home');
    })}
    return (
        <GoogleLoginButton onClick = {handleGoogleLogin} />
    )
}

export default LogInGoogle;