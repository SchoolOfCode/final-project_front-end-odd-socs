import styled from "styled-components";
import LogInEmail from "./firebase/LogIn/LogInEmail";
import LogInGoogle from "./firebase/LogIn/LogInGoogle";
import LogInGithub from "./firebase/LogIn/LogInGithub";
import { useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import { CancelIconStyled } from "./SignUpModal";

export const ModalBackground = styled.div`
  backdrop-filter: blur(30px);
  margin-top: 15vh;
  padding: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1000;
`;

export const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  color: white;
  top: 0;
  left: 0;
  width: 20rem;
`;

export const LoginSectionEmail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const LoginSectionSocial = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 1rem;
`;

const LogInModal = ({ closeLoginModalHandler }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  function closeModalHandler() {
    setIsModalOpen(false);

  }

  function handleExitClick() {
    closeModalHandler();
  }

  return (
    <ModalBackground >
    <CancelIconStyled onClick={closeLoginModalHandler}/>
      <LogInContainer>
        <LoginSectionEmail>
          <LogInEmail />
        </LoginSectionEmail>
        <LoginSectionSocial>
          <LogInGoogle />
          <LogInGithub />
        </LoginSectionSocial>
      </LogInContainer>
    </ModalBackground>
  );
};
export default LogInModal;
