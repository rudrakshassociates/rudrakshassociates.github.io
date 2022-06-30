import React from "react"
import {Link} from "react-router-dom"
import "./styles/home.css"
export default function Ceo(){
    return (
        <div>
            <div className="CEO-Container">
                <div className="CEO-pic">
                    <img src="Images/dp.jpg"/>
                </div>
                <div className="CEO-Info">
                    <div className="quote-right"></div>
                    <p className="Info-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="quote-right"></div>
                    <h1>VISHAL SHARMA</h1>
                    <h3 className="designation">Chief Executive Officer</h3>
                </div>
            </div>
        </div>
    )
}