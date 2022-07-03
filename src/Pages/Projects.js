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
                    <hr></hr>

                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</h3>
                </div>
            </div>
            <div className="Case-Studies">
                    <div className="card-case">
                        <div>
                            <h2>LOREM IPSUM</h2>
                           <div>LOREN IPSUM</div>
                           <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h4> 
                        </div>
                        {/* Cards */}
                    </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}