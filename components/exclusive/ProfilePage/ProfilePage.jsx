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





import styled from "styled-components"
import { Account } from "./Account"
import { Settings } from "./Settings"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  margin-top: 10vh;
  height:90vh;
  width: 100vw;
  gap: 1rem;
  padding: 4rem 3rem;
  position:relative;
`;

export function ProfilePage(){

    return(
        <PageContainer>
            <Account />
            <Settings/>
        </PageContainer>
        
    )
}