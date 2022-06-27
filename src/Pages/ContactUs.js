import React from "react"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import "./Components/styles/contactus.css"
export default function ContactUs(){
    return(
        <div>
            <Navbar/>
            <div className="CU-Container">
                <div className="CU-Header">
                    <img src="Images/contact-head.jpeg"/>
                </div>
                <div className="CU-Content">
                    <div className="CU-para">
                        <h2>Get in Touch</h2>
                        <h3>Wanna work with us?</h3>
                    </div>
                    <div className="CU-form">
                        <form>
                            
                            <input
                                type="text"
                                placeholder="Name"
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
                            <button>SEND</button>

                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}