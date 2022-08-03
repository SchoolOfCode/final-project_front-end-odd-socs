import styled from "styled-components";
import { useState } from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

//STYLED COMPONENTS
const ProfileSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 30vw;
  position: absolute;
  top: 25px;
  right: 15px;
  gap: 1.5rem;
`;

const SettingHeaders = styled.h3`
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--font-primary-color);
`;
const SettingsArrow = styled.div`
  color: var(--font-primary-color);
  display: flex;
  align-items: center;
`;
const SettingsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SettingsTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const DropDownContentContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  margin-right: 2.7rem;
`;

const DropDownContent = styled.h4`
  font-weight: 500;
  color: var(--font-secondary-color);
  justify-content: flex-end;
  display: flex;
`;

export function Settings() {
  // STATES
  const [isMyAccountOpen, setIsMyAccountOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [isCustomerSupportOpen, setIsCustomerSupportOpen] = useState(false);

  //TOGGLE FUNCTIONS
  //My Account
  function toggleMyAccountOpen(e) {
    //What does this prevent from happening??? MATT??????
    e.preventDefault;
    //"Ok Google" - Matt - please explain
    setIsMyAccountOpen((prevIsMyAccountOpen) => !prevIsMyAccountOpen);
  }
  function toggleNotificationsOpen(e) {
    e.preventDefault;
    setIsNotificationsOpen(
      (prevIsNotificationsOpen) => !prevIsNotificationsOpen
    );
  }
  function toggleAccessibilityOpen(e) {
    e.preventDefault;
    setIsAccessibilityOpen(
      (prevIsAccessibilityOpen) => !prevIsAccessibilityOpen
    );
  }
  function toggleCustomerSupportOpen(e) {
    e.preventDefault;
    setIsCustomerSupportOpen(
      (prevIsCustomerSupportOpen) => !prevIsCustomerSupportOpen
    );
  }

  return (
    <ProfileSettingsContainer>
      {/* MY ACCOUNT */}
      <SettingsSectionContainer>
        <SettingsTitleContainer onClick={toggleMyAccountOpen}>
          <SettingHeaders>My Account</SettingHeaders>
          {/* Depending on the state, the arrow icon changes 
                    When the state is TRUE - Arrow is UP
                    When the state is FALSE - Arrow is down
                    */}
          <SettingsArrow>
            {isMyAccountOpen ? (
              <ArrowDropUpIcon fontSize="large" />
            ) : (
              <ArrowDropDownIcon fontSize="large" />
            )}
          </SettingsArrow>
        </SettingsTitleContainer>

        {isMyAccountOpen && (
          <DropDownContentContainer>
            <DropDownContent>Log Out</DropDownContent>
            <DropDownContent>Delete Account</DropDownContent>
          </DropDownContentContainer>
        )}
      </SettingsSectionContainer>
      {/* NOTIFICATIONS */}
      <SettingsSectionContainer>
        <SettingsTitleContainer onClick={toggleNotificationsOpen}>
          <SettingHeaders>Notifications</SettingHeaders>
          <SettingsArrow>
            {isNotificationsOpen ? (
              <ArrowDropUpIcon fontSize="large" />
            ) : (
              <ArrowDropDownIcon fontSize="large" />
            )}
          </SettingsArrow>
        </SettingsTitleContainer>

        {isNotificationsOpen && (
          <DropDownContentContainer>
            <DropDownContent>Deactivate Push Notifcations</DropDownContent>
          </DropDownContentContainer>
        )}
      </SettingsSectionContainer>
         {/* ACCESSIBILITY */}
         <SettingsSectionContainer>
        <SettingsTitleContainer onClick={toggleAccessibilityOpen}>
          <SettingHeaders>Accessibility</SettingHeaders>
          <SettingsArrow>
            {isAccessibilityOpen ? (
              <ArrowDropUpIcon fontSize="large" />
            ) : (
              <ArrowDropDownIcon fontSize="large" />
            )}
          </SettingsArrow>
        </SettingsTitleContainer>

        {isAccessibilityOpen && (
          <DropDownContentContainer>
            <DropDownContent>Text Size</DropDownContent>
          </DropDownContentContainer>
        )}
      </SettingsSectionContainer>
       {/* CUSTOMER SUPPORT */}
       <SettingsSectionContainer>
        <SettingsTitleContainer onClick={toggleCustomerSupportOpen}>
          <SettingHeaders>Customer Support</SettingHeaders>
          <SettingsArrow>
            {isCustomerSupportOpen ? (
              <ArrowDropUpIcon fontSize="large" />
            ) : (
              <ArrowDropDownIcon fontSize="large" />
            )}
          </SettingsArrow>
        </SettingsTitleContainer>

        {isCustomerSupportOpen && (
          <DropDownContentContainer>
            <DropDownContent>Contact Us</DropDownContent>
          </DropDownContentContainer>
        )}
      </SettingsSectionContainer>
    </ProfileSettingsContainer>
  );
}

/*MATT */
/* 1. CREATE STATE (DONE)
const [isWatchOnOpen, setIsWatchOnOpen] = useState(false);

*/

/* 2. CREATE TOGGLE FUNCTION (DONE)
function toggleWatchOnOpen(e) {
    e.preventDefault;
    setIsWatchOnOpen((prevIsWatchOnOpen) => !prevIsWatchOnOpen);
  }

  - Add the toggle function as an onClick thingy to the MyAccountContainer
*/

/* 3. ARROW (Changes the arrow from drop up to drop down) (DONE)
- Remember to import the arrows from mui library

    <WatchOnArrow>
                {isWatchOnOpen ? (
                <ArrowDropUpIcon fontSize="large" />
                ) : (
                <ArrowDropDownIcon fontSize="large" />
                )}
    </WatchOnArrow>
*/

/* 4. RENDERING STUFF INSIDE DROP DOWN 
If WatchOn is open, render these components 

    {isWatchOnOpen && (
            <WatchOnIconContainer>
                <Image src={GooglePlayIcon} alt = "Google Play Icon"/>
                <Image src={YouTubeIcon} alt = "YouTube Icon" />
                <Image src={AmazonIcon} alt = "Amazon Icon"/>
            </WatchOnIconContainer>
            )}
*/

/* 5. STYLING (STYLED DIVS)
For each of our components we need to create a styled.div
Here's what Matt prepared earlier

    const WatchOnContainer = styled.div`
    display: flex;
    align-items: center;
    `;

    const WatchOnText = styled.h3`
    font-size: 1.8rem;
    color: white;
    `;

    const WatchOnArrow = styled.span`
    color: white;
    `;

    const WatchOnIconContainer = styled.div`
    display: flex;
    gap: 3rem;
    `;

*/

/* FULL JSX SECTION
<WatchOnContainer onClick={toggleWatchOnOpen}>
          <WatchOnText>Watch on:</WatchOnText>
          <WatchOnArrow>
            {isWatchOnOpen ? (
              <ArrowDropUpIcon fontSize="large" />
            ) : (
              <ArrowDropDownIcon fontSize="large" />
            )}
          </WatchOnArrow>
        </WatchOnContainer>


        {isWatchOnOpen && (
          <WatchOnIconContainer>
            <Image src={GooglePlayIcon} alt = "Google Play Icon"/>
            <Image src={YouTubeIcon} alt = "YouTube Icon" />
            <Image src={AmazonIcon} alt = "Amazon Icon"/>
          </WatchOnIconContainer>
        )}

*/
