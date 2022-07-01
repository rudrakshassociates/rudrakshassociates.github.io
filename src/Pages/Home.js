import React from "react"
import {Link} from "react-router-dom"
import Navbar from "./Components/Navbar.js"
import "./Components/styles/home.css"
import CEO from "./Components/CEO.js"
import Footer from "./Components/Footer.js"
import Gallery from "./Components/Gallery.js"
import News from "./Components/News.js"

export default function Home(){
    
    return(
        <div>
            <div className="main-body">

                </div>
                <Navbar/>
                <div className="Home-bg">
                    {/* <img src="Images/background-head1.jpg"/> */}
                    <div>
                        <div className="Title">
                            <h1>RUDRAKSH ASSOCIATES</h1>
                            <h2>Govt. Registered Composite Contractors</h2>
                        </div>
                        <div className="Title-info">
                            <h1>SPECIALISE IN:</h1>
                            <p>Internal Electrification | Erection and maintenance of D.G. Set | Rising Mains | Bust Duct | Servc Stabilizer | H.T./L.T. Panel | Fire Fighting & Fire Alarm System Etc.</p>
                        </div>
                        <div className="buttons">
                        <Link to="/contactus"><button className="GetinTouch">See Our Work</button></Link>
                        <Link to="/contactus"><button className="GetinTouch">Get in Touch</button></Link>
                        </div>
                        
                    </div>
                </div>
                <div className="service-container">
                    <div className="our-services">
                        <div className="service-info">
                            <h1>SERVICES</h1>
                            <hr></hr>
                        </div>
                        <div className="service-box">
                            <div>
                            <div>
                                <img/>
                                <h3>Loren IPSUM</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                            </div>
                            <div>
                                <img/>
                                <h3>Loren IPSUM</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                            </div>
                            </div>
                            <div>
                            <div>
                                <img/>
                                <h3>Loren IPSUM</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                            </div>
                            <div>
                                <img/>
                                <h3>Loren IPSUM</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                            </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            
                {/* <CEO/> */}
                <div className="Image-Banner">
                    <img src="Images/contact-head.jpeg"/>
                    <h3 className="banner-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
                </div>
                <div className="Counter">
                    {/* Counter */}
                </div>
                <News/>
                <Gallery/>
                <div className="Image-Banner">
                    <img src="Images/contact-head.jpeg"/>
                    <h3 className="banner-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
                </div>
            <div className="footer">
                <Footer/>
            </div>
            
        </div>
    )
}