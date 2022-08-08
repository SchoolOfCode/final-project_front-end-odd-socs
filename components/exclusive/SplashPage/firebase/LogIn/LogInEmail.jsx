// Log in with Email & Password component

import { signInWithEmailAndPassword } from "firebase/auth";
import {useRouter} from "next/router";
import { useState } from "react";
import { auth } from "../../../../../firebase/config";


/*PLAN
- Heading to say "Log in" (DONE)
- Email input field
- Password input field
- Log in button button

*/

export default function LogInEmail(){
    //Create a router
    const router = useRouter()

    //Set states for email and password
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    
    //Create a function that logs the user in by email & passsword when the Login button is clicked
    function handleLogin(){
        //User signs in with email & password
        signInWithEmailAndPassword(auth, userEmail, userPassword)
        //then...
        .then((response)=>{
            //See the user details in the console
            console.log(response.user);
            //direct the user to the home page
            router.push("/home")
        })
    }

    return(
        <>
        <h1>Log in with email and password</h1>
        <h3>Please enter your email address: <span>e.g. joebloggs@gmail.com</span></h3>
        <input 
        type="email" 
        placeholder="Email"
        onChange={(event)=> setUserEmail(event.target.value)}
        value={userEmail}/>


        <h3>Please enter your password:</h3>
        <input 
        type="password" 
        placeholder="Password"
        onChange={(event)=> setUserPassword(event.target.value)}
        value={userPassword}/>

        <button onClick={handleLogin}>Log In</button>
        </>
    )
}
