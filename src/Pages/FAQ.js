import React from "react"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import "./Components/styles/faq.css"
export default function FAQ(){
    return(
        <div>
            <Navbar/>
            <div className="FAQ-Container">
                <div className="FAQ-Header">
                    <img src="Images/contact-head.jpeg"/>
                    <div className="Header-title">
                        <h1>FAQ</h1>
                        <h2>Frequently Asked Questions</h2>
                    </div>
                </div>
                <div className="FAQ-Content">
                    <div className="FAQ-Theme">
                        <div  className="Theme-para">
                            <h3>Theme 1</h3>
                            <hr></hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                        </div>
                        <div className="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                            {/* card */}
                        </div>
                    </div>
                    <div className="FAQ-Theme">
                        <div className="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                            {/* card */}
                        </div>
                        <div  className="Theme-para">
                            <h3>Theme 2</h3>
                            <hr></hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                        </div>
                       
                    </div>
                    <div className="FAQ-Theme">
                        <div  className="Theme-para">
                            <h3>Theme 3</h3>
                            <hr></hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                        </div>
                        <div className="card-para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                            {/* card */}
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}