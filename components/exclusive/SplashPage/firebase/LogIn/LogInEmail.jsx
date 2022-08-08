// Log in with Email & Password component

const LogInEmail = ({}) => {
    return (
        <div className="LogInEmail">
        <h1>Log In with Email & Password</h1>
        <form>
            <h4> Please enter you email address <span> (e.g. joebloggs@gmail.com)</span></h4>
            <input type="text" placeholder="Email" />
            <h4> Please enter you password <span> (e.g. password123)</span></h4>
            <input type="password" placeholder="Password" />
            <button>Log In</button>
        </form>
        </div>
    );
    }