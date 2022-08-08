import { useRouter } from "next/router";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase";
import {GoogleButton} from "react-google-button";

export const SignInGoogle = () => {
    const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
    const router = useRouter()
    const [user] = useAuthState(auth);
    const redirectUser = () => {
        if (user) {
            router.push("/home");
        }
    }
    return(
        <>
            <GoogleButton onClick={() => signInWithGoogle()}>Sign In with Google</GoogleButton>
        </>
    )
};
