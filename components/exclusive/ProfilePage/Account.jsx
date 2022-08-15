import styled from "styled-components";
//import ProfileAccountIcon from "./ProfileAccountIcon";
import AccountProfileImage from "../../../public/assets/Images/AccountProfileImage.png";
import Image from "next/image";

//Imports required for adding authentication
import { useEffect, useState } from "react";
import { app } from "../../../firebase/config";
import { getAuth, updateProfile } from "firebase/auth";

const UserInitials = styled.h2`
  color: var(--font-primary-color);
  font-size: 2.5rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;
const UserEmailAddress = styled.h3`
  color: var(--font-secondary-color);
  font-size: 1.4rem;
  font-weight: 400;
`;
const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`;

const AccountImageContainer = styled.div`
  clip-path: circle();
  height: 10rem;
  width: 10rem;
  object-fit: cover;
`;

const AccountImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const NotLoggedIn = styled.h1`
  color: var(--font-primary-color);
  font-size: 2.5rem;
  font-weight: 500;
  position: relative;
  left: 50%;
  transform: translateX(-12%);
`;

export function Account() {
  //Setting states for the user's profile image and displayName (username) so that they can change them if they want to
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState("");

  // || AUTHENTICATION set up
  //This function initialises the  authentication service from firebase to our front-end
  const auth = getAuth();
  //If you check the console, you can see the details of the user that is currently logged in!!

  const signedInUser = auth.currentUser;
  console.log(signedInUser);

  // || UPDATING USER DETAILS
  //PROFILE PIC - Updating the user's profile image (this function will run when we click the "update your profile image" button)
  function updateUserImage() {
    //This is a function imported from firebase that allows you to update the current user's profile info
    updateProfile(auth.currentUser, {
      //This changes the user's photoURL (profile image) to the state "profilePic" which is set in the onChange in the input field below
      photoURL: profilePic,
    })
      .then(() => {
        alert("Profile pic updated!");
        //Once the profile image has been updated by the user, this resets the input field back to being empty again
        setProfilePic("");
        //If there is an error whilst updating the user's profile pic, an alert will pop up.
      })
      .catch((error) => {
        alert("Error updating profile");
      });
  }

  //PROFILE USERNAME - Updating your profile username (this function will run when we click the "update your username" button)
  function updateUsername() {
    //This is a function imported from firebase that allows you to update the current user's profile info.
    updateProfile(auth.currentUser, {
      //This changes the user's displayName (username) to the state "username" which is set in the onChange in the input field below
      displayName: username,
    })
      .then(() => {
        alert("Profile username updated!");
        //Once the username has been updated, this resets the input field back to being empty again
        setUsername("");

        //If there is an error whilst updating the user's username, an alert will pop up
      })
      .catch((error) => {
        alert("Error updating profile");
      });
  }

  return (
    <>
      {/* Is the user logged in? If so, the following will be rendered on the page. */}
      {auth.currentUser && (
        <AccountContainer>
          {/* Profile Image  (if the user already has a profile image show it, but if they don't let's just use a placeholder image)*/}
          {signedInUser.photoURL ? (
            <AccountImageContainer>
              <AccountImage src={signedInUser.photoURL} />
            </AccountImageContainer>
          ) : (
            <AccountImageContainer>
              <Image
                src={AccountProfileImage}
                alt="user image"
                width={100}
                height={100}
              ></Image>
            </AccountImageContainer>
          )}

          {/* The user's name (if the user already has a display name show it, but if they don't let's just call them Anon) */}
          {signedInUser.displayName ? (
            <UserInitials>{signedInUser.displayName}</UserInitials>
          ) : (
            <UserInitials>Anon</UserInitials>
          )}

          {/* The user's email address*/}
          <UserEmailAddress>{signedInUser.email}</UserEmailAddress>

          {/* The section that allows you to update your profile */}
          <h2>Update your profile!</h2>
          {/* Update the username */}
          <input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <button onClick={updateUsername}>Update Your username!</button>

          {/* Update the profile image */}
          <input
            placeholder="Profile Image URL"
            type="text"
            value={profilePic}
            onChange={(event) => setProfilePic(event.target.value)}
          />
          <button onClick={updateUserImage}>Update Your Profile Pic!</button>
        </AccountContainer>
      )}
      {/* // If the user is not logged in, the following will be rendered on the page. */}
      {auth.currentUser === null && (
        <NotLoggedIn>You are not logged in</NotLoggedIn>
      )}
    </>
  );
}
