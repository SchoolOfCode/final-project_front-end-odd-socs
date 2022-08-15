// Log in with Email & Password component
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "../../../../../firebase/config";

/*PLAN
- Heading to say "Log in" (DONE)
- Email input field
- Password input field
- Log in button button

*/

export const LoginText = styled.h3`
  color: white;
  font-weight: 400;
  font-size: 2rem;
  width: 100%;
`;

export const TextInput = styled.input`
  width: 100%;
  border: none;
  box-shadow: none;
  font-size: 1.1rem;
  padding: 0.4rem;
  border-radius: 2.5px;
`;

export const LogInButton = styled.button`
  padding: 0.5rem 4rem;
  border: none;
  border-radius: 2.5px;

  &:hover {
    background-color: var(--secondary);
  }
`;

export default function LogInEmail() {
  //Create a router
  const router = useRouter();

  //Set states for email and password
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  //Create a function that logs the user in by email & passsword when the Login button is clicked
  function handleLogin() {
    //User signs in with email & password
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      //then...
      .then((response) => {
        //See the user details in the console

        //direct the user to the home page
        router.push("/home");
      })
      .catch((error) => {
        //See the error in the console

      });
  }

  return (
    <>
      <LoginText>Log in</LoginText>
      <TextInput
        type="email"
        placeholder="Email"
        onChange={(event) => setUserEmail(event.target.value)}
        value={userEmail}
      />

      <TextInput
        type="password"
        placeholder="Password"
        onChange={(event) => setUserPassword(event.target.value)}
        value={userPassword}
      />

      <LogInButton onClick={handleLogin}>Log In</LogInButton>
    </>
  );
}
