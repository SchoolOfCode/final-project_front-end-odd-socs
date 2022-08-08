import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
//import { MenuIconContainer } from "../../../universal/Containers.styles";
import AccountProfileImage from "../../../public/assets/Images/AccountProfileImage.png";
import Image from "next/image";

const AccountIconContainer = styled.div`
  clip-path: circle();
  height: 10rem;
  width: 10rem;
`;

function ProfileAccountIcon() {
  return (
    <AccountIconContainer>
      <Image src={AccountProfileImage}></Image>
    </AccountIconContainer>
  );
}

export default ProfileAccountIcon;

// export const MenuIconContainer = {
//     fontSize: "1.8rem",
//   };
