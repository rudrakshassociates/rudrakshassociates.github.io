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
                        <li>Our Services</li>
                        <li>Projects</li>
                        <li>Gallery</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
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