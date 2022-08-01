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
import { PageContainer } from "../../universal/Containers.styles"
import { Account } from "./Account"


export function ProfilePage(){

    return(
        <PageContainer>
            <Account />
        </PageContainer>
        
    )
}