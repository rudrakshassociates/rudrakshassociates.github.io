import React from "react"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
export default function ContactUs(){
    return(
        <div>
            <Navbar/>
            <div className="ContactUs-Container">
                <div className="CU-Header"></div>
                <div className="CU-Content">
                    <div className="CU-para">cu</div>
                    <div className="CU-form"></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}