import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">Welcome to ClubSchooler!</h1>
      <p className="about-text">
        ClubSchooler is a platform designed to help school clubs manage their activities efficiently. 
        Whether you're a club leader or a student looking to join a club, ClubSchooler offers a seamless 
        experience for managing club events, communication, and membership.
      </p>
      <p className="about-text">
        Our platform allows club leaders to easily organize club events, communicate with club members, 
        and track attendance. For students, ClubSchooler provides a central hub to explore different clubs, 
        join their activities, and stay updated with club news and events.
      </p>
      <p className="about-text">
        Join ClubSchooler today and take your school club experience to the next level!
      </p>
    </div>
   )
}