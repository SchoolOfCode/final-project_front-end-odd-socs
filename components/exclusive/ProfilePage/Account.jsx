import styled from "styled-components";
import ProfileAccountIcon from "./ProfileAccountIcon";

const UserInitials = styled.h2`
    color: var(--font-primary-color);
    font-size:3rem;
    font-weight:300;

    margin-top: 1.5rem;
`
const YearJoined =  styled.h3`
    color: var(--font-secondary-color);
    font-size:1.5rem;
    font-weight:300;
`
const AccountContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
`

export function Account(){
    return(
        <>
        <AccountContainer>
            <ProfileAccountIcon/>
            <UserInitials>
                SP
            </UserInitials>

            <YearJoined>
                Member since 2022
            </YearJoined>
        </AccountContainer>
        </>
    )
}