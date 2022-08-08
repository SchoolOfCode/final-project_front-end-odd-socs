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

import {
  Title,
  TitleSpan,
} from "../../../components/exclusive/Header/NavMenu/NavMenu.jsx";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import LogInModal from "./LogInModal.jsx";
import SiteLogo from "../Header/NavMenu/SiteLogo.jsx";
import Background from "./Background.jsx";

const LinkStyles = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  font-size: 1.25rem;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;
const PageContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Button = styled.div`
  font-size: 1.25rem;
  text-align: center;
  color: var(--font-primary-color);
  border-radius: 10px;
  border: 0.1rem solid var(--secondary);
  padding: 0.7rem;
  width: 10rem;
  cursor: pointer;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 10vh;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const SplashPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModalHandler = () => {
    setIsModalOpen(true);
  };
  const closeModalHandler = () => {
    setIsModalOpen(false);
  };
  function handleLoginClick() {
    openModalHandler();
  }
  function handleSignUpClick() {
    openModalHandler();
  }
  return (
    <>
      <PageContainer>
        <Background />
          <SiteLogo/>
        <Main>
          {isModalOpen && <LogInModal closeModalHandler={closeModalHandler} />}
          <ButtonGroup>
            <Button onClick={handleLoginClick}>Login</Button>
            <Button onClick={handleSignUpClick}>Sign Up</Button>
          </ButtonGroup>

          <Link href="/home">
            <LinkStyles> Continue as Guest...</LinkStyles>
          </Link>
        </Main>
      </PageContainer>
    </>
  );
};

export default SplashPage;
