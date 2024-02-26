import React, { useState } from "react";
import Login from "../login/Login";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayname, setDisplayname] = useState("");
  const [infos, setInfos] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfos({ email, password, displayname });
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="auth-form">
      {showLogin ? (
        <Login />
      ) : (
        <form onSubmit={handleSubmit}>
          
          <h2>Signup As A Member</h2>
          {/* <a onClick={handleLoginClick} >login</a> */}
          <label>
            <span>Email:</span>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Password:</span>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <span>Display Name:</span>
            <input
              required
              type="text"
              value={displayname}
              onChange={(e) => setDisplayname(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
          

          {infos && (
            <div className="entered-info">
              <h3>Entered Information:</h3>
              <p>Email: {infos.email}</p>
              <p>Password: {infos.password}</p>
              <p>Display Name: {infos.displayname}</p>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
