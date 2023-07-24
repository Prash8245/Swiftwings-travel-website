import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
        <section className="footer">
            <div className="foot">
                <div className="footer-content">
                    <div className="footlinks">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/Register">Register</Link></li>
                            <li><Link to="/About">About Us</Link></li>
                            <li><Link to="/Contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footlinks">
                        <h4>Connect</h4>
                        <div className="social">
                            <a href="https://www.facebook.com/people/Pavan-Gowda/100010680518826/" ><i className='bx bxl-facebook'></i></a>
                            <a href="https://www.instagram.com/pavanig286/?igshid=NTA5ZTk1NTc%3D" ><i className='bx bxl-instagram' ></i></a>
                            <a href="https://twitter.com/PathakamuriBha3?t=X5Rc_jBso3HCseDggAEifg&s=08" ><i className='bx bxl-twitter' ></i></a>

                        </div>
                    </div>
                </div>
            </div>

            <div className="end">
                <p>Copyright © 2023 SwiftWings Journeys All Rights Reserved.</p>
            </div>
        </section>
    </div>
  );
}
