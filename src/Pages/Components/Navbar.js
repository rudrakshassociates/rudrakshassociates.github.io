import React from "react"
import {Link} from "react-router-dom"
import "./styles/Navbar.css"
export default function Navbar(){
    return (
        <div>
            <div className="Navbar-container">
                <h1><Link to="/" className="home-link">Rudraksh Associates</Link></h1>
                <div className="Navbar-list">
                    <ul className="links">
                        <li><Link to="/services" className="navbar-link">Our Services</Link></li>
                        <li><Link to="/projects" className="navbar-link">Our Work</Link></li>
                        <li><Link to="/gallery" className="navbar-link">Gallery</Link></li>
                        <li><Link to="/faq" className="navbar-link">About Us</Link></li>
                        <li><Link to="/contactus" className="navbar-link">Contact Us</Link></li>
                    </ul>
                    <ul className="socials">
                        <li>in</li>
                        <li>f</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}