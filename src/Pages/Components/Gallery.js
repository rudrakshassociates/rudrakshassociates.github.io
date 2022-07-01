import React from "react"
import {Link} from "react-router-dom"
import "./styles/gallery.css"
import GHList from "./List/GHList"
export default function Gallery(){
    return (
        <div className="Gallery-Container">
            <div className="Gallery-Head"> 
                <h1>GALLERY</h1>
                <hr></hr>
            </div>
            <button>See More</button>
            
            <div className="Gallery-Content">
                <div className="collage-index">
                    <h3>All</h3>
                    <h3>Electrical</h3>
                    <h3>Fire Station</h3>
                    <h3>School</h3>
                </div>
            </div>
        </div>
    )
}