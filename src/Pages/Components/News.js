import React from "react"
import {Link} from "react-router-dom"
import "./styles/home.css"
export default function News(){
    return (
        <div>
           <div className="News-Container">
                <div className="News-Head">
                    <h1>LATEST HAPPENING!</h1>
                </div>
                <div>
                    <div className="Map"></div>
                    <div className="Slider-down">
                    </div>
                    <div className="slider-down"></div>
                </div>
           </div>
        </div>
    )
}