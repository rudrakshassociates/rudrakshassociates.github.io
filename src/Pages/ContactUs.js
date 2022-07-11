import React from "react"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import "./Components/styles/contactus.css"
export default function ContactUs(){
    return(
        <div onLoad={window.scrollTo(0,0)}>
            <div className="main">
                <Navbar/>
                <div className="CU-Container">
                    <div className="CU-Header">
                        <h2>We love meeting new people and helping them solve complex design challenges.</h2>
                    </div>
                    <div className="CU-Content">
                        <div className="image-replacement-1">Lorem Ipsum-Lanscape</div>
                        <div className="image-replacement-2">Lorem Ipsum Portrait</div>
                        <div className="CU-para">
                            <h2><b>PHONE: </b>+91 9818321006 , +91 9810536966</h2>
                            <h2><b>EMAIL : </b>adhirajconstructions2018@gmail.com</h2>
                        </div>
                        
                        <div className="CU-form">
                            <form>
                                <div>
                                    <input
                                    type="text"
                                    placeholder="First Name"
                                    />
                                    <input
                                    type="text"
                                    placeholder="Last Name"
                                    />
                                    </div>
                                
                                <input
                                
                                type="text"
                                placeholder="Phone Number"
                                />
                                <input
                                
                                    type="text"
                                    placeholder="Email"
                                />
                                <textarea
                                    type="text"
                                    placeholder="Message"
                                ></textarea>
                                <br></br>
                                <button>Get in Touch</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}