import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

export default function HeaderContent() {
  return (
    <div>
        <div className="banner">
        <video src="https://ik.imagekit.io/mohdrahil101/files/bgvid.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1668283958353" type="video/mp4" autoPlay muted loop></video>

    <div className="content" id="home"> 
        {/* <NavBar /> */}
        <div className="title">
            <h1>SWIFTWINGS JOURNEYS</h1>
            <p>Plan your trip with us and travel around the world with the most affordable packages!</p>
            <Link to="/Register" className="button">Register Now!</Link>
        </div>
        </div>
    </div>
    </div>
  );
}
