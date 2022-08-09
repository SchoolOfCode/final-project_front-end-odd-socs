/*
PLAN
- make file structure for profile pages & component -DONE
- make Account component - IN PROGRESS  
 - image - IN PROGRESS
 - user name (hard coded) - DONE
 - member since - DONE

 - make settings component
    - my account
    - notifications
    - accessibility
    - customer support


- final layout styling

- drop down menu
    - add dropdown icon

*/

import styled from "styled-components";
import Image from "next/image";
import { Account } from "./Account";
import { Settings } from "./Settings";
import StaticBackground from "../../../public/assets/Images/1Source-static-bkg.png";

const ProfileBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10vh;
  height: 90vh;
  width: 100vw;
  gap: 1rem;
  padding: 4rem 3rem;
  position: relative;
`;

export function ProfilePage() {
  return (
    <>
      <ProfileBackground>
        <Image src={StaticBackground} objectFit="cover" layout="fill" />
      </ProfileBackground>
      <PageContainer>
        <Account />
        <Settings />
      </PageContainer>
    </>
  );
}
