import styled from "styled-components";


const ProfileSettingsContainer = styled.div`
    display:flex;
    flex-direction:column;
    border:2px solid red;
    color:white;
    width:30vw;
    text-align:right;
    position:absolute;
    top:25px;
    right:15px;
    gap:1.5rem;
`

const SettingHeaders = styled.h3`
font-weight:normal;
`

export function Settings(){
    return(
        <ProfileSettingsContainer>
            <SettingHeaders>My Account</SettingHeaders>
            <SettingHeaders>Notifications</SettingHeaders>
            <SettingHeaders>Accessibility</SettingHeaders>
            <SettingHeaders>Customer Support</SettingHeaders>
        </ProfileSettingsContainer>
    )
}

