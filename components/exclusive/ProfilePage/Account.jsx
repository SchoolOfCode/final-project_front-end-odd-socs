import styled from "styled-components";
import ProfileAccountIcon from "./ProfileAccountIcon";

const UserInitials = styled.h2`
    color: var(--font-primary-color);
    font-size:3rem;
    font-weight:300;
`

export function Account(){
    return(
        <>
        {/* <AccountContainer> */}
            <ProfileAccountIcon/>
            <UserInitials>
                SP
            </UserInitials>
            {/* <YearJoined>
                <h2>Member since 2022</h2>
            </YearJoined> */}
        {/* </AccountContainer> */}
        </>
    )
}