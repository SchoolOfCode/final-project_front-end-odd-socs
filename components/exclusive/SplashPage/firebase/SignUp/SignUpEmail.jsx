//Sign up with Email & Password component

import { createUserWithEmailAndPassword } from "firebase/auth";
import {useRouter} from "next/router";
import { useState } from "react";
import { auth } from "../../../../../firebase/config";

const SignUpEmail = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const router = useRouter();
    const handleSignUp = async () => {
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((response)=>{
            console.log(response.user);
            router.push("/home")
        }).catch((error)=>{
            console.log(error);
        }
        )
    } 
    return(
        <>
        <h1>Sign Up with email and password</h1>
        <h3>Please enter your email address: <span>e.g. joebloggs@gmail.com</span></h3>
        <input 
        type="email" 
        placeholder="Email"
        onChange={(event)=> setUserEmail(event.target.value)}
        value={userEmail}/>


        <h3>Please create password: <span> Must be over 6 characters </span></h3>
        <input 
        type="password" 
        placeholder="Password"
        onChange={(event)=> setUserPassword(event.target.value)}
        value={userPassword}/>

        <button onClick={handleSignUp}>Sign Up</button>
        </>
    )
}

export default SignUpEmail;