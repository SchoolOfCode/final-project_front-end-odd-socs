import styled from "styled-components";
import SettingsIcon from "./SettingsIcon";


const ProfileSettingsContainer = styled.div`
    display:flex;
    flex-direction:column;
    color:white;
    width:30vw;
    position:absolute;
    top:25px;
    right:15px;
    gap:1.5rem;
`

const SettingHeaders = styled.h3`
    font-weight:500;
    font-size: 1.1rem;
    color: var(--font-secondary-color)
`
const HeadingRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;

`

export function Settings(){
    return(
        <ProfileSettingsContainer>
            <HeadingRow>
                <SettingHeaders>My Account</SettingHeaders>
                <SettingsIcon />
            </HeadingRow>
            <HeadingRow>
                <SettingHeaders>Notifications</SettingHeaders>
                <SettingsIcon />
            </HeadingRow>
            <HeadingRow>
                <SettingHeaders>Accessibility</SettingHeaders>
                <SettingsIcon />
            </HeadingRow>
            <HeadingRow>
                <SettingHeaders>Customer Support</SettingHeaders>
                <SettingsIcon />
            </HeadingRow>
        </ProfileSettingsContainer>
    )
}

