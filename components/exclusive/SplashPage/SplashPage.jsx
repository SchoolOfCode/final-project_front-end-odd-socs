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

// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "../../../firebase/clientApp"
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {NavStyles, Title, TitleSpan} from "../../../components/exclusive/Header/NavMenu/NavMenu.jsx"
import styled from "styled-components"
import Link from "next/link"   

const SplashPage = ()=> {
    
return (
    <>
    <NavStyles>
    <Title >
        <TitleSpan>1</TitleSpan>
        Source
    </Title>
    </NavStyles>
    {/* <Link href = '/home'>
        <a> Continue as Guest...</a>
    </Link> */}
    {/* <StyledFirebaseAuth uiConfig = {uiConfig} firebaseAuth={firebase.auth()}/> */}
    </>
)
}

export default SplashPage;