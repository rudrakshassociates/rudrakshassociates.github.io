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
                        <h2>We love meeting new people and helping them develop their ideas into life</h2>
                    </div>
                    <div className="CU-Content">
                        <img className="image-replacement-1" src="Images/contact landscape.jpg"></img>
                        <img src="Images/portrait.jpg" className="image-replacement-2"/>
                        <div className="CU-para">
                            <h2><b>PHONE: </b>+919818321006 , +919810536966</h2>
                            <h2><b>EMAIL : </b>adhirajconstructions2018@gmail.com</h2>
                        </div>
                        
                        <div className="CU-form">
                            <form action="https://formsubmit.co/mridulsclient@gmail.com" method="POST">
                                <input type="hidden" name="_captcha" value="false"/>
                                {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input> */}
                                <div>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        />
                                        <input
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                    <input type="hidden" name="_autoresponse" value="Thanks for Contacting Us!. We will look what you had to say. For any further information just send an email at the saem email address."></input>
                                    
                                </div>
                                
                                <input
                                    name="number"
                                    required
                                    type="number"
                                    placeholder="Phone Number"
                                />
                                
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                />
                                <textarea
                                    name="message"
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