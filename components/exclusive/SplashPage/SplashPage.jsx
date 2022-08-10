
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import LogInModal from "./LogInModal.jsx";
import SiteLogo from "../Header/NavMenu/SiteLogo.jsx";
import Background from "./Background.jsx";
import SignUpModal from "./SignUpModal.jsx";

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

// const TagLine = styled.a`
//   color: white;
//   font-size: 1.25rem;
// `;

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
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const openLoginModalHandler = () => {
    setIsLoginModalOpen(true);
  };
  const closeLoginModalHandler = () => {
    setIsLoginModalOpen(false);
  };

  const openSignUpModalHandler = () => {
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModalHandler = () => {
    setIsSignUpModalOpen(false);
  };

  function handleLoginClick() {
    openLoginModalHandler();
  }
  function handleSignUpClick() {
    openSignUpModalHandler();
  }
  return (
    <>
      <PageContainer>
        <Background closeLoginModalHandler={closeLoginModalHandler} />
        <SiteLogo />
        {isLoginModalOpen && (
          <LogInModal closeLoginModalHandler={closeLoginModalHandler} />
        )}
        {isSignUpModalOpen && (
          <SignUpModal closeSignUpModalHandler={closeSignUpModalHandler} />
        )}
       
        <Main>
          <ButtonGroup>
          {/* <TagLine> No matter the Movie, TV show, Music or Game. Find your next source of entertainment with 1Source </TagLine> */}
          <br/>
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
