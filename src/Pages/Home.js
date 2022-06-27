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
            <Navbar/>
            <div className="Home-bg">
                <img src="Images/background-head1.jpg"/>
                <div className="Title">
                    <h1>RUDRAKSH ASSOCIATES</h1>
                    <Link to="/contactus"><button className="GetinTouch">Get in Touch</button></Link>
                </div>
            </div>
            <div className="our-services">
                <div className="service-info">
                    <h1>Our Services</h1>
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                </div>
                <div className="service-box">
                    {/* sliders */}
                </div>
            </div>
            <CEO/>
            <Gallery/>
            <News/>
            <Footer/>
            
        </div>
    )
}