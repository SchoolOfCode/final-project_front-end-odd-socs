import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth"; 
import { auth } from "../../../../firebase";
import { useState } from "react";

export const EmailSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
  
    if (error) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
    }
    if (loading) {
      return <p>Loading...</p>;
    }
    if (user) {
      return (
        <div>
          <p>Signed In User: {user.email}</p>
        </div>
      );
    }
    return (
      <>
        <Form
          type="email"
          value={email}
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form
          type="password"
          value={password}
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => signInWithEmailAndPassword(email, password)}>
          Sign In
        </button>
      </>
    );
  };