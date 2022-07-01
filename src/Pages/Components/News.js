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
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </h1>

                </div>
                <div className="News-Head">
                    <h2>Latest News</h2>
                    <button>See All</button>
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