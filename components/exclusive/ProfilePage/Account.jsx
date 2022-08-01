import styled from "styled-components";

const ProfileImage = styled.div`

`


export function Account(){
    return(
        <>
        <ProfileImage>
            <img></img>
        </ProfileImage>
        <UserInitials>
            <h1>SP</h1>
        </UserInitials>
        <YearJoined>
            <h2>Member since 2022</h2>
        </YearJoined>
        </>
    )
}