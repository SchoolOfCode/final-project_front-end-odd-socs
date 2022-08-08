// Log in with Email & Password component


/*PLAN
- Heading to say "Log in" (DONE)
- Email input field
- Password input field
- Log in button button

*/

export default function LogInEmail(){

    
    return(
        <>
        <h1>Log in with email and password</h1>
        <h3>Please enter your email address: <span>e.g. joebloggs@gmail.com</span></h3>
        <input type="text" placeholder="Email"/>
        <h3>Please enter your password:</h3>
        <input type="password" placeholder="Password"/>
        <button>Log In</button>
        </>
    )
}
