import styled from "styled-components";
import SignUpEmail from "./firebase/SignUp/SignUpEmail";
import LogInGoogle from "./firebase/LogIn/LogInGoogle";
import LogInGithub from "./firebase/LogIn/LogInGithub";
import {
  ModalBackground,
  LogInContainer,
  LoginSectionEmail,
  LoginSectionSocial,
} from "./LogInModal";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const SignUpModal = ({ closeSignUpModalHandler }) => {
  return (
    <ModalBackground onClick={closeSignUpModalHandler}>
      <LogInContainer>
        <LoginSectionEmail>
          <SignUpEmail />
        </LoginSectionEmail>
        <LoginSectionSocial>
          <LogInGoogle />
          <LogInGithub />
        </LoginSectionSocial>
      </LogInContainer>
    </ModalBackground>
  );
};
export default SignUpModal;
