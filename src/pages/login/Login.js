// Login.js
import React, { useState } from "react";
import Signup from "../signup/Signup";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState([]);
  const [showSignup, setShowSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const infos = { email, password };
    setLogin([...login, infos]);
    setEmail("");
    setPassword("");
  };

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleLoginClick = () => {
    setShowSignup(false);
  };

  return (
    <div>
      {showSignup ? (
        <Signup />
      ) : (
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label>
            <span>email:</span>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            <span>password:</span>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">submit</button>
          <button onClick={handleSignupClick}>Signup </button>
        </form>
      )}
    </div>
  );
}
