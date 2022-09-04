import React from "react"
import {Link} from "react-router-dom"
import "./styles/footer.css"
export default function Footer(){
    return (
        <div>
           <div className="Footer-Container">
            {/* <h1><Link to="/" className="Footer-home-link">Rudraksh Associates</Link></h1> */}

                <div className="Footer-Tagline">
                    
                    <h1>Years of Development through our services</h1>
                </div>
                <div className="Footer-flex-Content">
                    <div className="Footer-Links">
                        <div className="Link-block">
                            <ul>
                                <h3><Link to="/about" className="foot-subhead">About Us</Link></h3>
                                <hr></hr>
                                <li>Carrer</li>
                                <li>Our Story</li>
                                <li>Articles on Us</li>
                                <li>Insights of Company</li>
                            </ul>
                        </div>

                        <div className="Link-block">
                            <ul>
                                <h3><Link to="/" className="foot-subhead">Our Services</Link></h3>
                                <hr></hr>
                                <h2>Wanna work with us?</h2>
                                <div className="contact-button">
                                    <button id="number">+91 9875416358</button>
                                    <button id="contact">Get in Touch</button>
                                </div>
                                
                            </ul>
                        </div>

                        <div className="Link-block">
                            <ul>
                                <h3><Link to="/work" className="foot-subhead">Projects</Link></h3>
                                <hr></hr>
                                <li>School Building Project</li>
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
                        <h2><b>RUDRAKSH</b> ASSOCIATES</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}