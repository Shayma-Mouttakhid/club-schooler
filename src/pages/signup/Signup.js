import React, { useState } from "react";
import Login from "../login/Login";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayname, setDisplayname] = useState("");
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  

  return (
    <div className="auth-form">
      
        <form onSubmit={handleSubmit}>
          
          <h2>Signup As A Member</h2>
        
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
          

          
        </form>
      
    </div>
  );
}
