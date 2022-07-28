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
// import firebase from "../../../firebase/clientApp"
// import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {Title, TitleSpan} from "../../../components/exclusive/Header/NavMenu/NavMenu.jsx"
import styled from "styled-components"
import Link from "next/link" 
import {GoogleAuthProvider, GithubAuthProvider, EmailAuthProvider, signInWithPopup, getAuth} from "firebase/auth" 
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {app} from "../../../firebase/clientApp"
import {auth} from "../../../firebase/clientApp"
import firebase from "../../../firebase/clientApp"


const LinkStyles = styled.a`
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
font-size: 1.25rem;
color: white;
text-decoration: none;
`
const PageContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`

const uiConfig = {
    signInSuccessUrl: "/home",
    signInFlow: "popup",
    signInOptions: [auth.EmailAuthProvider]
};
const SplashPage = ()=> {    
return (
    <>
    <PageContainer>
    <Title >
        <TitleSpan>1</TitleSpan>
        Source
    </Title>
    <Link href = '/home'>
        <LinkStyles> Continue as Guest...</LinkStyles>
    </Link>
    <StyledFirebaseAuth uiConfig = {uiConfig} firebaseAuth={firebase.auth()}/>
    </PageContainer>
    </>
)
}

export default SplashPage;