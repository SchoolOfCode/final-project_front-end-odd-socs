// import { useEffect } from "react";
// import {GoogleButton} from 'react-google-button'
// import { UserAuth } from "../../../context/AuthContext";
// import { useRouter } from "next/router";
import LogInScreen  from "../../../firebase/index"

const Login = () => {
    // const { googleSignIn, githubSignIn, emailSignIn, user } = UserAuth();
    // const router = useRouter();
    // const [data, setData] = useState({
    //     email: "",
    //     password: "",
    // });

    // const handleGoogleSignIn = async () => {
    //     try {
    //         await googleSignIn();
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // const handleGithubSignIn = async () => {
    //     try {
    //         await githubSignIn();
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // const handleEmailSignIn = async () => {
    //     try {
    //         await emailSignIn();
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // useEffect(() => {
    //     if (user =! null) {
    //         router.push("/home");
    //     }
    // }, [user]);

    return (
        <>
        <LogInScreen />
            {/* <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    /> 
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password"
                    placeholder="Password"
                     /> 
                </Form.Group>
            </Form>
            <GoogleButton onClick={handleGoogleSignIn} /> */}

        </>
    )
};

export default Login;