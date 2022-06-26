import React from "react"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
export default function FAQ(){
    return(
        <div>
            <Navbar/>
            <div className="FAQ-Container">
                <div className="FAQ-Header"></div>
                <div className="FAQ-Content">
                    <div className="FAQ-Theme" id="Theme-1">faq</div>
                    <div className="FAQ-Theme" id="Theme-2"></div>
                    <div className="FAQ-Theme" id="Theme-3"></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}