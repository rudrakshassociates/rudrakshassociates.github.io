import React from "react"
import {Link} from "react-router-dom"
import "./styles/home.css"
import NewsList from "./List/NewsList"
import Cslider from "./Card-Slider"
export default function News(){
    return (
        <div>
           <div className="News-Container">
                <div className="News-Highlight">
                    <h1>Rudraksh Associates had paved way for their customers with their services in electrical and construction field for over a decade, and will continue to do so in the future across the country.</h1>

                </div>
                <div className="News-Head">
                    <h2>Latest News</h2>
                </div>
                <div className="News-Content">
                    <div className="Slider-down">
                        <Cslider
                        slidername="News-slider"
                        Cardname={NewsList}/>
                    </div>
                </div>
                <div className="slider-down"></div>

           </div>
        </div>
    )
}