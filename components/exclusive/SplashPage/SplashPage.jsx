/* PLAN
1. Title
    - Shall we reuse the header component? Or do we need to create a new component?

2. Login/Sign up button
    - Button
    - Add styling
    - Link to authenticator

3. Continue as guest button
    - Button
    - Add styling
    - Link to the homepage!


4. Graphics
    - Ask CJ if we wants to add a background. 
*/

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "../../../firebase/clientApp"
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

export default SplashPage = ()=> {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
    }).catch((error) => { 
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });

    const uiConfig = {
        signInSuccessUrl: "/home", 
        signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID, 
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,]
    }
return (
    <>
    <Title>
        <TitleSpan>1</TitleSpan>
        Source
    </Title>
    </>
)
}