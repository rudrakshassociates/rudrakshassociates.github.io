import React from "react"
import {Link} from "react-router-dom"
import "./styles/footer.css"
export default function Footer(){
    return (
        <div>
           <div className="Footer-Container">
                <div className="Footer-Tagline">
                    <h1>TagLine-Text tagline-text</h1>
                </div>
                <div className="Footer-flex-Content">
                    <div className="Footer-Links">
                        <div className="Link-block">
                            <ul>
                                <h3>Our Services</h3>
                                <hr></hr>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>

                        <div className="Link-block">
                            <ul>
                                <h3>About</h3>
                                <hr></hr>
                                <h2>Wanna work with us?</h2>
                                <button id="number">+91 9875416358</button>
                                <button id="contact">Get in Touch</button>
                            </ul>
                        </div>

                        <div className="Link-block">
                            <ul>
                                <h3>Projects</h3>
                                <hr></hr>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="Footer-bottom"> 
                    <div className="Footer-list">
                        <ul className="Footer-bottom-links">
                            <li>Our Services</li>
                            <li>Projects</li>
                            <li>Gallery</li>
                            <li>FAQ</li>
                            <li>Contact Us</li>
                        </ul>
                        <h1><Link to="/" className="Footer-home-link">Rudraksh Associates</Link></h1>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}