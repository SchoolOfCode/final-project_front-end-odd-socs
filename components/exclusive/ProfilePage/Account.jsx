import styled from "styled-components";
import ProfileAccountIcon from "./ProfileAccountIcon";

// const ProfileImage = styled.div`

// `

export function Account(){
    return(
        <>
        <AccountContainer>
            <ProfileAccountIcon/>
            {/* <UserInitials>
                <h1>SP</h1>
            </UserInitials>
            <YearJoined>
                <h2>Member since 2022</h2>
            </YearJoined> */}
        </AccountContainer>
        </>
    )
}