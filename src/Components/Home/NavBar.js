import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
        <nav>
            <img src="https://ik.imagekit.io/mohdrahil101/files/logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668283934802" 
            className="logo" alt="Logo" title="FirstFlight Travels" />
            
            <ul className="navbar">
                <li>
                    <Link to="">Home</Link>
                    {/* <a href="#locations">Locations</a> */}
                    <Link to="/Home" state={"locations"}>Locations</Link>
                    <Link to="/Home" state={"package"}>Packages</Link>
                    {/* <a href="#package">Packages</a> */}
                    <Link to="/About">About Us</Link>
                    <Link to="/Contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    </div>
  );    
}
