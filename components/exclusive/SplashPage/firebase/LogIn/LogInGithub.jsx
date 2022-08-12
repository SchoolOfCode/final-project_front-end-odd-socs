// Log in with Github component

import { GithubLoginButton } from 'react-social-login-buttons';
import {GithubAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from "../../../../../firebase/config";
import { useRouter } from 'next/router';

//Logic:
// creating a new GithubAuthProvider 
// creating a handleLogin function that will be called when the button is clicked
// calling signInWithPopup with the auth and GithubProvider
// then using the result to console log the result
// then using the router to redirect to the home page



const LogInGithub = () => {
    const router = useRouter();
    const githubProvider = new GithubAuthProvider();

    const handleGithubLogin = async () => {
    signInWithPopup(auth, githubProvider)
    .then((result) => {

        router.push('/home');
    })}
    return (
        <GithubLoginButton onClick = {handleGithubLogin} />
    )
}

export default LogInGithub;