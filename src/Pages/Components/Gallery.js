import React from "react"
import {Link} from "react-router-dom"
import "./styles/gallery.css"
import GHList from "./List/GHList"
export default function Gallery(){
    function Electrical(){
    }
    const Card=GHList.map(Data=>{
        return (
            <img src={Data.image}></img>
        )
    })
    return (
        <div className="Gallery-Container">
            <div className="Gallery-Head"> 
                <h1>GALLERY</h1>
                <hr></hr>
            </div>
            <button>See More</button>
            
            <div className="Gallery-Content">
                <div className="collage-index">
                    <h3 >All</h3>
                    <h3 onClick={Electrical}>Electrical</h3>
                    <h3>Fire Station</h3>
                    <h3>School</h3>
                </div>
                <div className="collage">
                    <div className="collage-row">
                        {Card}
                    </div>
                </div>
            </div>
        </div>
    )
}