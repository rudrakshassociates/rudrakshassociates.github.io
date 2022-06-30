import React from "react"
import {Link} from "react-router-dom"
import "./styles/home.css"
import GHList from "./List/GHList"
export default function Gallery(){
    // const [imagelist,setImagelist]=React.useState()
    const Card=GHList.map((Data)=>{
        return(
            <div className="slider-card">
                <img src={Data.image}/>
            </div> 
        )
    }) 
    return (
        <div>
            <div className="Gallery-Container">
                <div className="Gallery-Head">
                    <h1>GALLERY</h1>
                    <button>See More</button>
                </div>
                <div className="Slider">
                    <div className="scroller-left"></div>
                    <div className="Slider-card">{Card}</div>
                    <div className="scroller-right"></div>
                </div>
            </div>
        </div>
    )
}