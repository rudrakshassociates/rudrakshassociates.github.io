import React from "react"
import {Link} from "react-router-dom"
import "./styles/home.css"
export default function Gallery(){
    return (
        <div>
            <div className="Gallery-Container">
                <div className="Gallery-Head">
                    <h2>Gallery</h2>
                    <button>See More</button>
                </div>
                <div className="Slider">
                    <div className="scroller-left"></div>
                    <div className="Slider-card"></div>
                    <div className="scroller-right"></div>
                </div>
            </div>
        </div>
    )
}