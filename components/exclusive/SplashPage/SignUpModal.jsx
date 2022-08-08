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
import CancelIcon from "@mui/icons-material/Cancel";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

//change the style of the Cancel Icon to be the secondary color and the size to be 1.5rem in the top right of the modal
export const CancelIconStyled = styled(CancelIcon)`
  color: white; 
  font-size: 10rem;
  position: absolute;
  display: flex;
  justify-content: right;
  top: 3rem;
  right: 3rem;
  &:hover {
    color: var(--secondary);
  }
  `;

const SignUpModal = ({ closeSignUpModalHandler }) => {
  return (
    <ModalBackground>
    
    <CancelIconStyled onClick={closeSignUpModalHandler}/>
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
