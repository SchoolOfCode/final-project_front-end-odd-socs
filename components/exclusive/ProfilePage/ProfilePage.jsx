/*
PLAN
- make file structure for profile pages & component -DONE
- make Account component - IN PROGRESS  
 - image
 - user name (hard coded)
 - member since

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