import React from "react"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import "./Components/styles/services.css"
export default function Ourservices(){
    return(
        <div>
            <Navbar/>
            <div className="service-Header">
                <div className="Header-Content">
                    <h1>OUR SERVICES</h1>
                    <h3>Here are following services we provide</h3>
                </div>
            </div>
            <div className="services-Content">
                    <div>
                        
                    </div>
            </div>
            <div className="Customer-Head">
                <div className="customer-feedback">
                    <div>
                        <p>5453</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p>5454</p>
                        <p>People Satisfied</p>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}