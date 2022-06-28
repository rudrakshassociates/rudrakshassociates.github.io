import React from "react"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import "./Components/styles/ourwork.css"
export default function Projects(){
    return(
        <div>
            <Navbar/>
            <div className="Work-Header">
                <div className="Work-Head-Content">
                    <h1>Our Work</h1>
                    <h3>Case Studies</h3>
                    <hr></hr>
                </div>
            </div>
            <div className="Case Studies">
                    <div>
                        {/* Cards */}
                    </div>
            </div>
            <div className="Lets-Connect">
                <h3>LET'S CONNECT</h3>
                <p>We encourage you to connect with us. For employment opportunities and inquiries, please visit our Careers page.<br/>
                    For media and public relations inquiries, please email info@ohpd.net.<br/>
                    For suppliers & product representatives, please email library@ohpd.net.</p>
            </div>
            <Footer/>
        </div>
    )
}