//Sign up with Email & Password component

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "../../../../../firebase/config";

import { LoginText, TextInput, LogInButton } from "../LogIn/LogInEmail";

const SignUpEmail = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const router = useRouter();
  const handleSignUp = async () => {
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((response) => {

        router.push("/home");
      })
      .catch((error) => {

      });
  };
  return (
    <>
      <LoginText>Sign Up</LoginText>
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

      <LogInButton onClick={handleSignUp}>Sign Up</LogInButton>
    </>
  );
};

export default SignUpEmail;
