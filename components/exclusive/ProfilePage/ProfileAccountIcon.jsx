import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
//import { MenuIconContainer } from "../../../universal/Containers.styles";

const AccountContainer = styled.div`
font-size:1.9rem;
color: var(--secondary);
`


function ProfileAccountIcon() {
  return (
    <AccountContainer>
        <AccountCircleIcon/>
    </AccountContainer>
  );
}

export default ProfileAccountIcon;


// export const MenuIconContainer = {
//     fontSize: "1.8rem",
//   };