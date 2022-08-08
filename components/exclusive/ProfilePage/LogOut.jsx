import { useRouter } from "next/router"
import {signOut, onAuthStateChange} from "../../../firebase/config"
import {Link} from 'next/link'


export default function LogOut(){
    //need a router
    const router = useRouter;

    function handleLogoutUser(){
        signOut(auth)

        .then(()=>{
            console.log('user signed out')
            //push the user to the splash page
            router.push("/")
        })
    }    
}